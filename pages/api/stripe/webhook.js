const Stripe = require('stripe')
const { userModal } = require('../../../db')

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const config = {
    api: { bodyParser: false }
}

async function buffer(readable) {
    const chunks = []
    for await (const chunk of readable) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
    }
    return Buffer.concat(chunks)
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end()
    }

    const buf = await buffer(req)
    const sig = req.headers['stripe-signature']

    let event
    try {
        event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET)
    } catch (err) {
        console.error('Webhook signature verification failed:', err.message)
        return res.status(400).send(`Webhook Error: ${err.message}`)
    }

    // Handle the event
    try {
        switch (event.type) {
            case 'checkout.session.completed':
                const session = event.data.object
                await handleCheckoutComplete(session)
                break

            case 'customer.subscription.updated':
            case 'customer.subscription.deleted':
                const subscription = event.data.object
                await handleSubscriptionChange(subscription)
                break

            default:
                console.log(`Unhandled event type ${event.type}`)
        }

        res.json({ received: true })
    } catch (error) {
        console.error('Webhook handler error:', error)
        res.status(500).json({ error: error.message })
    }
}

async function handleCheckoutComplete(session) {
    const username = session.metadata.username
    const user = await userModal.findOne({ username })

    if (user) {
        user.subscriptionStatus = 'active'
        user.subscriptionId = session.subscription
        await user.save()
        console.log(`Subscription activated for user: ${username}`)
    }
}

async function handleSubscriptionChange(subscription) {
    const user = await userModal.findOne({ subscriptionId: subscription.id })

    if (user) {
        user.subscriptionStatus = subscription.status
        user.subscriptionEndDate = new Date(subscription.current_period_end * 1000)
        await user.save()
        console.log(`Subscription updated for user: ${user.username}, status: ${subscription.status}`)
    }
}
