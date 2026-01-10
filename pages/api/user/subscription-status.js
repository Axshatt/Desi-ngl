const { userModal } = require('../../../db')

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    try {
        const { username } = req.query

        if (!username) {
            return res.status(400).json({ error: 'Username is required' })
        }

        const user = await userModal.findOne({ username })

        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }

        res.status(200).json({
            subscriptionStatus: user.subscriptionStatus || 'free',
            isPro: user.subscriptionStatus === 'active',
            subscriptionEndDate: user.subscriptionEndDate
        })
    } catch (error) {
        console.error('Subscription status error:', error)
        res.status(500).json({ error: error.message })
    }
}
