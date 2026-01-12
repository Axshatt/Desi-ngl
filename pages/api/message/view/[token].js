import { messageModal } from '../../../../db'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { token } = req.query

  if (!token) {
    return res.status(400).json({ error: 'Token required' })
  }

  try {
    const message = await messageModal.findOne({ senderToken: token })
      .select('message mood replies createdAt senderToken')
      .lean()

    if (!message) {
      return res.status(404).json({ error: 'Message not found' })
    }

    // Ensure replies array exists
    if (!message.replies) {
      message.replies = []
    }

    // Sort replies by date (newest first)
    message.replies.sort((a, b) => new Date(b.repliedAt) - new Date(a.repliedAt))

    return res.status(200).json({ 
      success: true,
      message: message
    })
  } catch (error) {
    console.error('View message error:', error)
    return res.status(500).json({ error: 'Failed to fetch message' })
  }
}
