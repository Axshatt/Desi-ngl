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
    username: String
});
const messageSchema = new Schema({
    message: String,
    userId: ObjectId
});
const subscriptionSchema = new Schema({
    username: String,
    endpoint: String,
    keys: {
        p256dh: String,
        auth: String
    }
});
// Prevent model overwrite error in dev mode
const userModal = mongoose.models.users || mongoose.model("users", userSchema);
const messageModal = mongoose.models.messages || mongoose.model("messages", messageSchema);
const subscriptionModal = mongoose.models.subscriptions || mongoose.model("subscriptions", subscriptionSchema);
module.exports = {
    userModal,
    messageModal,
    subscriptionModal
};
}),
"[project]/Desi-Ngl/pages/api/subscribe.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
const { subscriptionModal } = __turbopack_context__.r("[project]/Desi-Ngl/db.js [api] (ecmascript)");
async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }
    const { subscription, username } = req.body;
    if (!subscription || !username) {
        return res.status(400).json({
            error: 'Missing subscription or username'
        });
    }
    try {
        await subscriptionModal.findOneAndUpdate({
            username,
            endpoint: subscription.endpoint
        }, {
            username,
            endpoint: subscription.endpoint,
            keys: subscription.keys
        }, {
            upsert: true,
            new: true
        });
        res.status(200).json({
            message: 'Subscribed successfully'
        });
    } catch (error) {
        console.error('Subscription error:', error);
        res.status(500).json({
            error: 'Failed to subscribe'
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__57dfe380._.js.map