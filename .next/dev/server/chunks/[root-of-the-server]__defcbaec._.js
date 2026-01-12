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
    username: {
        type: String,
        unique: true
    },
    email: String,
    isPremium: {
        type: Boolean,
        default: false
    },
    stripeCustomerId: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const messageSchema = new Schema({
    message: String,
    mood: {
        type: String,
        default: 'Serious'
    },
    userId: ObjectId,
    reply: {
        type: String,
        default: null
    },
    senderConsent: {
        type: String,
        enum: [
            'pending',
            'revealed',
            'declined'
        ],
        default: 'pending'
    },
    senderHint: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
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
"[project]/Desi-Ngl/pages/api/message/consent.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desi-Ngl/db.js [api] (ecmascript)");
;
async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();
    try {
        const { id, choice } = req.body // choice: 'revealed' or 'declined'
        ;
        if (!id || !choice) return res.status(400).json({
            error: 'Missing fields'
        });
        const message = await __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["messageModal"].findById(id);
        if (!message) return res.status(404).json({
            message: 'Message not found'
        });
        if (message.senderConsent !== 'pending') {
            return res.status(400).json({
                error: 'Decision already made'
            });
        }
        message.senderConsent = choice;
        await message.save();
        return res.status(200).json({
            success: true
        });
    } catch (e) {
        return res.status(500).json({
            error: e.message
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__defcbaec._.js.map