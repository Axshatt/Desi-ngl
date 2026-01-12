import { userModal, messageModal } from '../../../db'

export default async function handler(req, res) {
  // Simple auth check
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (req.method === 'GET') {
    try {
      const { page = 1, limit = 50, search = '' } = req.query
      const skip = (parseInt(page) - 1) * parseInt(limit)

      let query = {}
      if (search) {
        query.username = { $regex: search, $options: 'i' }
      }

      const users = await userModal.find(query)
        .select('username createdAt')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit))
        .lean()

      // Get message counts for each user
      const usersWithStats = await Promise.all(
        users.map(async (user) => {
          const messageCount = await messageModal.countDocuments({ userId: user._id })
          return {
            ...user,
            messageCount
          }
        })
      )

      const totalUsers = await userModal.countDocuments(query)

      return res.status(200).json({
        success: true,
        users: usersWithStats,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total: totalUsers,
          pages: Math.ceil(totalUsers / parseInt(limit))
        }
      })
    } catch (error) {
      console.error('Get users error:', error)
      return res.status(500).json({ error: 'Failed to fetch users' })
    }
  }

  if (req.method === 'DELETE') {
    try {
      const { userId } = req.body
      if (!userId) {
        return res.status(400).json({ error: 'User ID required' })
      }

      // Delete user and all their messages
      await messageModal.deleteMany({ userId })
      await userModal.findByIdAndDelete(userId)

      return res.status(200).json({ success: true, message: 'User deleted successfully' })
    } catch (error) {
      console.error('Delete user error:', error)
      return res.status(500).json({ error: 'Failed to delete user' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
