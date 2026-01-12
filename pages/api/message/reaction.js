import { messageModal } from '../../../db'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { messageId, reaction, username } = req.body

  if (!messageId || !reaction || !username) {
    return res.status(400).json({ error: 'Message ID, reaction, and username required' })
  }

  // Validate that reaction is a reasonable emoji (not empty, reasonable length)
  // Emojis can be 1-4 characters due to modifiers, skin tones, etc.
  if (!reaction || typeof reaction !== 'string' || reaction.trim().length === 0) {
    return res.status(400).json({ error: 'Reaction must be a valid emoji' })
  }
  
  // Basic validation: emoji should be reasonable length (most are 1-4 chars)
  // Some complex emojis with modifiers can be longer, so we allow up to 10 chars
  if (reaction.length > 10) {
    return res.status(400).json({ error: 'Invalid reaction - emoji too long' })
  }

  try {
    const message = await messageModal.findById(messageId)

    if (!message) {
      return res.status(404).json({ error: 'Message not found' })
    }

    // Ensure reactions object exists
    if (!message.reactions || typeof message.reactions !== 'object') {
      message.reactions = {}
    }
    
    // Initialize reaction array if it doesn't exist
    if (!Array.isArray(message.reactions[reaction])) {
      message.reactions[reaction] = []
    }

    // Check if user already reacted
    const reactedIndex = message.reactions[reaction].indexOf(username)

    if (reactedIndex !== -1) {
      // User already reacted, remove reaction (toggle off)
      message.reactions[reaction].splice(reactedIndex, 1)
    } else {
      // User hasn't reacted, add reaction
      message.reactions[reaction].push(username)
    }

    // Mark the reactions field as modified (required for Mixed type in Mongoose)
    message.markModified('reactions')
    await message.save()

    return res.status(200).json({ 
      success: true, 
      reactions: message.reactions,
      userReacted: reactedIndex === -1 // true if just added, false if removed
    })
  } catch (error) {
    console.error('Reaction error:', error)
    return res.status(500).json({ error: 'Failed to save reaction' })
  }
}
