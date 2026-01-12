import { messageModal, userModal } from '../../../db'

export default async function handler(req, res) {
  // Simple auth check
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (req.method === 'GET') {
    try {
      const { page = 1, limit = 50, search = '', userId = '' } = req.query
      const skip = (parseInt(page) - 1) * parseInt(limit)

      let query = {}
      if (search) {
        query.message = { $regex: search, $options: 'i' }
      }
      if (userId) {
        const user = await userModal.findOne({ username: userId })
        if (user) {
          query.userId = user._id
        }
      }

      const messages = await messageModal.find(query)
        .select('message mood createdAt reactions replies senderMeta')
        .populate('userId', 'username')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit))
        .lean()

      const totalMessages = await messageModal.countDocuments(query)

      return res.status(200).json({
        success: true,
        messages,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total: totalMessages,
          pages: Math.ceil(totalMessages / parseInt(limit))
        }
      })
    } catch (error) {
      console.error('Get messages error:', error)
      return res.status(500).json({ error: 'Failed to fetch messages' })
    }
  }

  if (req.method === 'DELETE') {
    try {
      const { messageId } = req.body
      if (!messageId) {
        return res.status(400).json({ error: 'Message ID required' })
      }

      await messageModal.findByIdAndDelete(messageId)

      return res.status(200).json({ success: true, message: 'Message deleted successfully' })
    } catch (error) {
      console.error('Delete message error:', error)
      return res.status(500).json({ error: 'Failed to delete message' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
