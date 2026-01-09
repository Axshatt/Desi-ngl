const { userModal, messageModal } = require('../../db')

export default async function handler(req, res) {
  const { method } = req
  const username = req.query.username
  if (method === 'POST') {
    try {
      const { message, mood = 'Serious' } = req.body
      if (!message) return res.status(400).json({ error: 'message required' })
      const user = await userModal.findOne({ username })
      if (!user) return res.status(404).json({ error: 'User not found' })
      await messageModal.create({ message, mood, userId: user._id })
      return res.status(200).json({ msg: message })
    } catch (e) {
      console.error(e)
      return res.status(500).json({ error: e.message })
    }
  }
  return res.status(405).end()
}
