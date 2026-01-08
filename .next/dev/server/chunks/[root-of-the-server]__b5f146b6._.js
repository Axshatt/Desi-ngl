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
"[project]/Desi-Ngl/pages/api/username.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
__turbopack_context__.r("[externals]/dotenv [external] (dotenv, cjs, [project]/Desi-Ngl/node_modules/dotenv)").config();
const jwt = __turbopack_context__.r("[externals]/jsonwebtoken [external] (jsonwebtoken, cjs, [project]/Desi-Ngl/node_modules/jsonwebtoken)");
const { userModal } = __turbopack_context__.r("[project]/Desi-Ngl/db.js [api] (ecmascript)");
async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();
    try {
        const { username } = req.body;
        if (!username) return res.status(400).json({
            error: 'username required'
        });
        const user = await userModal.create({
            username
        });
        const token = jwt.sign({
            username
        }, process.env.JWT_PASS);
        return res.status(200).json({
            token
        });
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            error: e.message
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b5f146b6._.js.map