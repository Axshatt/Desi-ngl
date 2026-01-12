const { userModal, messageModal } = require('../../db')
const crypto = require('crypto')

export default async function handler(req, res) {
  const { method } = req
  const username = req.query.username
  if (method === 'POST') {
    try {
      const { message, mood = 'Serious', shareMeta = false } = req.body
      if (!message) return res.status(400).json({ error: 'message required' })
      const user = await userModal.findOne({ username })
      if (!user) return res.status(404).json({ error: 'User not found' })

      // Generate unique token for sender to view replies
      const senderToken = crypto.randomBytes(32).toString('hex')

      // Basic IP + device detection (for optional sender hints)
      const xff = req.headers['x-forwarded-for']
      const ip = Array.isArray(xff)
        ? xff[0]
        : (typeof xff === 'string' ? xff.split(',')[0].trim() : req.socket?.remoteAddress || null)

      const ua = req.headers['user-agent'] || ''
      let deviceType = 'Unknown'
      if (/mobile|iphone|android/i.test(ua)) {
        deviceType = 'Mobile'
      } else if (/ipad|tablet/i.test(ua)) {
        deviceType = 'Tablet'
      } else if (ua) {
        deviceType = 'Desktop'
      }

      let os = null
      if (/Windows/i.test(ua)) os = 'Windows'
      else if (/Mac OS X/i.test(ua)) os = 'macOS'
      else if (/Android/i.test(ua)) os = 'Android'
      else if (/iPhone|iPad|iPod/i.test(ua)) os = 'iOS'
      else if (/Linux/i.test(ua)) os = 'Linux'

      const senderMeta = {
        share: !!shareMeta
      }

      if (shareMeta) {
        senderMeta.ip = ip || null
        senderMeta.deviceType = deviceType
        senderMeta.os = os
        senderMeta.userAgent = ua || null
      }

      const newMessage = await messageModal.create({ 
        message, 
        mood, 
        userId: user._id, 
        senderMeta,
        senderToken 
      })
      return res.status(200).json({ 
        msg: message,
        messageId: newMessage._id,
        senderToken: senderToken,
        viewUrl: `/view/${senderToken}`
      })
    } catch (e) {
      console.error(e)
      return res.status(500).json({ error: e.message })
    }
  }
  return res.status(405).end()
}
