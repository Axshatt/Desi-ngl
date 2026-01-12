import { userModal, messageModal } from '../../../../db'

export default async function handler(req, res) {
  const user = req.query.user

  if (req.method === 'POST') {
    try {
      const u = await userModal.findOne({ username: user })
      if (!u) return res.status(404).json({ message: [] })
      // Sort by newest first (ObjectId has timestamp, so sorting by _id desc works)
      const messages = await messageModal.find({ userId: u._id }).sort({ _id: -1 })
      return res.status(200).json({ messages })
    } catch (e) {
      console.error(e)
      return res.status(500).json({ error: e.message })
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.body
    if (!id) return res.status(400).json({ error: 'Message ID required' })
    try {
      await messageModal.findByIdAndDelete(id)
      return res.status(200).json({ success: true })
    } catch (e) {
      console.error(e)
      return res.status(500).json({ error: e.message })
    }
  } else {
    return res.status(405).end()
  }
}
