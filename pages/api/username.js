require('dotenv').config()
const jwt = require('jsonwebtoken')
const { userModal } = require('../../db')

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  try {
    const { username } = req.body
    if (!username) return res.status(400).json({ error: 'username required' })
    const user = await userModal.create({ username })
    const token = jwt.sign({ username }, process.env.JWT_PASS)
    return res.status(200).json({ token })
  } catch (e) {
    console.error(e)
    return res.status(500).json({ error: e.message })
  }
}
