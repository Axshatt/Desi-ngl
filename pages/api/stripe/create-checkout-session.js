const Stripe = require('stripe')
const { userModal } = require('../../../db')

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    try {
        const { username } = req.body

        if (!username) {
            return res.status(400).json({ error: 'Username is required' })
        }

        // Find user
        let user = await userModal.findOne({ username })
        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }

        // Create or retrieve Stripe customer
        let customerId = user.stripeCustomerId
        if (!customerId) {
            const customer = await stripe.customers.create({
                metadata: { username }
            })
            customerId = customer.id
            user.stripeCustomerId = customerId
            await user.save()
        }

        // Create checkout session
        const session = await stripe.checkout.sessions.create({
            customer: customerId,
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: 'DesiNGL Pro',
                        description: 'Premium features including sender hints and priority support'
                    },
                    unit_amount: 9900, // ₹99 in paise
                    recurring: { interval: 'month' }
                },
                quantity: 1
            }],
            mode: 'subscription',
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/premium/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/premium?canceled=true`,
            metadata: { username }
        })

        res.status(200).json({ sessionId: session.id })
    } catch (error) {
        console.error('Stripe checkout error:', error)
        res.status(500).json({ error: error.message })
    }
}
