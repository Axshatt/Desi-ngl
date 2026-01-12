import { userModal, messageModal } from '../../../db'

export default async function handler(req, res) {
  // Simple auth check - in production, use proper JWT/session
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
    // Get all statistics
    const totalUsers = await userModal.countDocuments()
    const totalMessages = await messageModal.countDocuments()
    
    // Messages with replies
    const messagesWithReplies = await messageModal.countDocuments({
      'replies.0': { $exists: true }
    })
    
    // Total replies
    const allMessages = await messageModal.find({}).select('replies').lean()
    const totalReplies = allMessages.reduce((sum, msg) => {
      return sum + (msg.replies?.length || 0)
    }, 0)

    // Messages by mood
    const messagesByMood = await messageModal.aggregate([
      {
        $group: {
          _id: '$mood',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } }
    ])

    // Messages in last 7 days
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
    const messagesLast7Days = await messageModal.countDocuments({
      createdAt: { $gte: sevenDaysAgo }
    })

    // Messages in last 30 days
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
    const messagesLast30Days = await messageModal.countDocuments({
      createdAt: { $gte: thirtyDaysAgo }
    })

    // Users created in last 7 days
    const usersLast7Days = await userModal.countDocuments({
      createdAt: { $gte: sevenDaysAgo }
    })

    // Users created in last 30 days
    const usersLast30Days = await userModal.countDocuments({
      createdAt: { $gte: thirtyDaysAgo }
    })

    // Messages per day (last 7 days)
    const messagesPerDay = []
    for (let i = 6; i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      date.setHours(0, 0, 0, 0)
      const nextDate = new Date(date)
      nextDate.setDate(nextDate.getDate() + 1)
      
      const count = await messageModal.countDocuments({
        createdAt: { $gte: date, $lt: nextDate }
      })
      
      messagesPerDay.push({
        date: date.toISOString().split('T')[0],
        count
      })
    }

    // Most active users (by message count)
    const mostActiveUsers = await messageModal.aggregate([
      {
        $group: {
          _id: '$userId',
          messageCount: { $sum: 1 }
        }
      },
      { $sort: { messageCount: -1 } },
      { $limit: 10 }
    ])

    // Get usernames for most active users
    const userIds = mostActiveUsers.map(u => u._id)
    const users = await userModal.find({ _id: { $in: userIds } }).select('username').lean()
    const userMap = {}
    users.forEach(u => {
      userMap[u._id.toString()] = u.username
    })

    const activeUsersWithNames = mostActiveUsers.map(u => ({
      userId: u._id,
      username: userMap[u._id.toString()] || 'Unknown',
      messageCount: u.messageCount
    }))

    // Messages with reactions
    const messagesWithReactions = await messageModal.countDocuments({
      $or: [
        { 'reactions': { $exists: true, $ne: {} } },
        { 'reactions.🔥': { $exists: true, $ne: [] } },
        { 'reactions.❤️': { $exists: true, $ne: [] } },
        { 'reactions.😂': { $exists: true, $ne: [] } }
      ]
    })

    // Average messages per user
    const avgMessagesPerUser = totalUsers > 0 ? (totalMessages / totalUsers).toFixed(2) : 0

    // Average replies per message
    const avgRepliesPerMessage = totalMessages > 0 ? (totalReplies / totalMessages).toFixed(2) : 0

    return res.status(200).json({
      success: true,
      stats: {
        overview: {
          totalUsers,
          totalMessages,
          totalReplies,
          messagesWithReplies,
          messagesWithReactions,
          avgMessagesPerUser: parseFloat(avgMessagesPerUser),
          avgRepliesPerMessage: parseFloat(avgRepliesPerMessage)
        },
        growth: {
          messagesLast7Days,
          messagesLast30Days,
          usersLast7Days,
          usersLast30Days
        },
        messagesByMood,
        messagesPerDay,
        mostActiveUsers: activeUsersWithNames
      }
    })
  } catch (error) {
    console.error('Stats error:', error)
    return res.status(500).json({ error: 'Failed to fetch statistics' })
  }
}
