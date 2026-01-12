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
    createdAt: {
        type: Date,
        default: Date.now
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
"[project]/Desi-Ngl/utils/fakeMessages.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fakeMessages",
    ()=>fakeMessages
]);
const fakeMessages = [
    "TBH I’ve had a crush on you for a while now 🙈",
    "Song recommendation: 'Diet Mountain Dew' by Lana Del Rey",
    "You give off main character energy ✨",
    "Rate me: 10/10 would recommend",
    "What's your biggest ick?",
    "Drop your skincare routine pls",
    "You're actually so funny it's annoying",
    "Wanna match pfps? 👉👈",
    "Who is your fav influencer?",
    "Describe your aesthetic in 3 words",
    "Lowkey miss you",
    "Spill the tea ☕",
    "Are you single? asking for a friend",
    "Your vibe is immaculate",
    "Fav comfort movie?",
    "Do you believe in soulmates?",
    "Send a selfie rn",
    "What's the last song you listened to?",
    "You look so good today!",
    "Can we be besties?",
    "POV: You're my fav person",
    "Red flag: I reply instantly",
    "Green flag: You have good taste in music",
    "Thoughts on pineapple on pizza?",
    "Marry, Kiss, Kill: The Weeknd, Drake, Travis Scott",
    "Unpopular opinion: TikTok is better than Insta",
    "You're glowing ✨",
    "Idk who needs to hear this but you're doing great",
    "Send memes",
    "Wanna go on a late night drive?"
];
}),
"[project]/Desi-Ngl/pages/api/admin/auto-message.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desi-Ngl/db.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$utils$2f$fakeMessages$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desi-Ngl/utils/fakeMessages.js [api] (ecmascript)");
;
;
async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }
    const { username } = req.body;
    if (!username) {
        return res.status(400).json({
            error: 'Username is required'
        });
    }
    try {
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["userModal"].findOne({
            username
        });
        if (!user) {
            return res.status(404).json({
                error: 'User not found'
            });
        }
        // Pick a random message
        const randomMsg = __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$utils$2f$fakeMessages$2e$js__$5b$api$5d$__$28$ecmascript$29$__["fakeMessages"][Math.floor(Math.random() * __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$utils$2f$fakeMessages$2e$js__$5b$api$5d$__$28$ecmascript$29$__["fakeMessages"].length)];
        // Insert into DB
        await __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["messageModal"].create({
            message: randomMsg,
            userId: user._id,
            createdAt: new Date() // Ensure your schema supports timestamps if you want sorting
        });
        return res.status(200).json({
            success: true,
            message: randomMsg
        });
    } catch (error) {
        console.error("Auto-message error:", error);
        return res.status(500).json({
            error: "Internal Server Error"
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__746281e3._.js.map