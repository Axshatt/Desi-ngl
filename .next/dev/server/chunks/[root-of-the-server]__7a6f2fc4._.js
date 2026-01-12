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
    },
    razorpayOrderId: {
        type: String,
        default: null
    },
    razorpayPaymentId: {
        type: String,
        default: null
    }
});
const replySchema = new Schema({
    reply: String,
    repliedBy: String,
    repliedAt: {
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
    // Unique token for sender to view their message and replies
    senderToken: {
        type: String,
        unique: true,
        sparse: true
    },
    // Dynamic reactions - can accept any emoji as key
    reactions: {
        type: Schema.Types.Mixed,
        default: {}
    },
    // Replies from the message receiver
    replies: [
        replySchema
    ],
    // Optional sender metadata if they choose to share hints
    senderMeta: {
        share: {
            type: Boolean,
            default: false
        },
        ip: {
            type: String,
            default: null
        },
        deviceType: {
            type: String,
            default: null
        },
        os: {
            type: String,
            default: null
        },
        userAgent: {
            type: String,
            default: null
        }
    },
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
"[project]/Desi-Ngl/pages/api/message/view/[token].js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desi-Ngl/db.js [api] (ecmascript)");
;
async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }
    const { token } = req.query;
    if (!token) {
        return res.status(400).json({
            error: 'Token required'
        });
    }
    try {
        const message = await __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["messageModal"].findOne({
            senderToken: token
        }).select('message mood replies createdAt senderToken').lean();
        if (!message) {
            return res.status(404).json({
                error: 'Message not found'
            });
        }
        // Ensure replies array exists
        if (!message.replies) {
            message.replies = [];
        }
        // Sort replies by date (newest first)
        message.replies.sort((a, b)=>new Date(b.repliedAt) - new Date(a.repliedAt));
        return res.status(200).json({
            success: true,
            message: message
        });
    } catch (error) {
        console.error('View message error:', error);
        return res.status(500).json({
            error: 'Failed to fetch message'
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7a6f2fc4._.js.map