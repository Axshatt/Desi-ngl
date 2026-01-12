module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desi-Ngl/db.js [api] (ecmascript)", ((__turbopack_context__, module, exports) => {

const mongoose = __turbopack_context__.r("[externals]/mongoose [external] (mongoose, cjs, [project]/Desi-Ngl/node_modules/mongoose)");
__turbopack_context__.r("[externals]/dotenv [external] (dotenv, cjs, [project]/Desi-Ngl/node_modules/dotenv)").config();
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
if (mongoose.connection.readyState === 0) {
    if (process.env.DATABASE) {
        mongoose.connect(process.env.DATABASE).then(()=>console.log("Connected to DB")).catch((err)=>console.error("DB Config Error:", err));
    } else {
        console.warn("No DATABASE environment variable found.");
    }
}
const userSchema = new Schema({
    username: String,
    stripeCustomerId: {
        type: String,
        default: null
    },
    subscriptionStatus: {
        type: String,
        default: 'free'
    },
    subscriptionId: {
        type: String,
        default: null
    },
    subscriptionEndDate: {
        type: Date,
        default: null
    }
});
const messageSchema = new Schema({
    message: String,
    mood: {
        type: String,
        default: 'Serious'
    },
    userId: ObjectId
});
// Prevent model overwrite error in dev mode
if (mongoose.models.users) delete mongoose.models.users;
if (mongoose.models.messages) delete mongoose.models.messages;
const userModal = mongoose.model("users", userSchema);
const messageModal = mongoose.model("messages", messageSchema);
module.exports = {
    userModal,
    messageModal
};
}),
"[project]/Desi-Ngl/pages/api/stripe/create-checkout-session.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
const Stripe = __turbopack_context__.r("[externals]/stripe [external] (stripe, cjs, [project]/Desi-Ngl/node_modules/stripe)");
const { userModal } = __turbopack_context__.r("[project]/Desi-Ngl/db.js [api] (ecmascript)");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }
    try {
        const { username } = req.body;
        if (!username) {
            return res.status(400).json({
                error: 'Username is required'
            });
        }
        // Find user
        let user = await userModal.findOne({
            username
        });
        if (!user) {
            return res.status(404).json({
                error: 'User not found'
            });
        }
        // Create or retrieve Stripe customer
        let customerId = user.stripeCustomerId;
        if (!customerId) {
            const customer = await stripe.customers.create({
                metadata: {
                    username
                }
            });
            customerId = customer.id;
            user.stripeCustomerId = customerId;
            await user.save();
        }
        // Create checkout session
        const session = await stripe.checkout.sessions.create({
            customer: customerId,
            payment_method_types: [
                'card'
            ],
            line_items: [
                {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: 'DesiNGL Pro',
                            description: 'Premium features including sender hints and priority support'
                        },
                        unit_amount: 9900,
                        recurring: {
                            interval: 'month'
                        }
                    },
                    quantity: 1
                }
            ],
            mode: 'subscription',
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/premium/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/premium?canceled=true`,
            metadata: {
                username
            }
        });
        res.status(200).json({
            sessionId: session.id
        });
    } catch (error) {
        console.error('Stripe checkout error:', error);
        res.status(500).json({
            error: error.message
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d0900ee0._.js.map