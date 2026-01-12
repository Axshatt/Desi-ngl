import { messageModal } from '../../../db'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { messageId, reply, username } = req.body

  if (!messageId || !reply || !username) {
    return res.status(400).json({ error: 'Message ID, reply, and username required' })
  }

  if (!reply.trim()) {
    return res.status(400).json({ error: 'Reply cannot be empty' })
  }

  try {
    const message = await messageModal.findById(messageId)

    if (!message) {
      return res.status(404).json({ error: 'Message not found' })
    }

    // Ensure replies array exists
    if (!message.replies || !Array.isArray(message.replies)) {
      message.replies = []
    }

    // Add the reply
    message.replies.push({
      reply: reply.trim(),
      repliedBy: username,
      repliedAt: new Date()
    })

    await message.save()

    return res.status(200).json({ 
      success: true, 
      replies: message.replies
    })
  } catch (error) {
    console.error('Reply error:', error)
    return res.status(500).json({ error: 'Failed to save reply' })
  }
}
