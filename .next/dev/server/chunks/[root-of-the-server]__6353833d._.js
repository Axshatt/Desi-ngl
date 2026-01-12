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
"[project]/Desi-Ngl/pages/api/admin/stats.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desi-Ngl/db.js [api] (ecmascript)");
;
async function handler(req, res) {
    // Simple auth check - in production, use proper JWT/session
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            error: 'Unauthorized'
        });
    }
    try {
        // Get all statistics
        const totalUsers = await __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["userModal"].countDocuments();
        const totalMessages = await __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["messageModal"].countDocuments();
        // Messages with replies
        const messagesWithReplies = await __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["messageModal"].countDocuments({
            'replies.0': {
                $exists: true
            }
        });
        // Total replies
        const allMessages = await __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["messageModal"].find({}).select('replies').lean();
        const totalReplies = allMessages.reduce((sum, msg)=>{
            return sum + (msg.replies?.length || 0);
        }, 0);
        // Messages by mood
        const messagesByMood = await __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["messageModal"].aggregate([
            {
                $group: {
                    _id: '$mood',
                    count: {
                        $sum: 1
                    }
                }
            },
            {
                $sort: {
                    count: -1
                }
            }
        ]);
        // Messages in last 7 days
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const messagesLast7Days = await __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["messageModal"].countDocuments({
            createdAt: {
                $gte: sevenDaysAgo
            }
        });
        // Messages in last 30 days
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const messagesLast30Days = await __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["messageModal"].countDocuments({
            createdAt: {
                $gte: thirtyDaysAgo
            }
        });
        // Users created in last 7 days
        const usersLast7Days = await __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["userModal"].countDocuments({
            createdAt: {
                $gte: sevenDaysAgo
            }
        });
        // Users created in last 30 days
        const usersLast30Days = await __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["userModal"].countDocuments({
            createdAt: {
                $gte: thirtyDaysAgo
            }
        });
        // Messages per day (last 7 days)
        const messagesPerDay = [];
        for(let i = 6; i >= 0; i--){
            const date = new Date();
            date.setDate(date.getDate() - i);
            date.setHours(0, 0, 0, 0);
            const nextDate = new Date(date);
            nextDate.setDate(nextDate.getDate() + 1);
            const count = await __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["messageModal"].countDocuments({
                createdAt: {
                    $gte: date,
                    $lt: nextDate
                }
            });
            messagesPerDay.push({
                date: date.toISOString().split('T')[0],
                count
            });
        }
        // Most active users (by message count)
        const mostActiveUsers = await __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["messageModal"].aggregate([
            {
                $group: {
                    _id: '$userId',
                    messageCount: {
                        $sum: 1
                    }
                }
            },
            {
                $sort: {
                    messageCount: -1
                }
            },
            {
                $limit: 10
            }
        ]);
        // Get usernames for most active users
        const userIds = mostActiveUsers.map((u)=>u._id);
        const users = await __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["userModal"].find({
            _id: {
                $in: userIds
            }
        }).select('username').lean();
        const userMap = {};
        users.forEach((u)=>{
            userMap[u._id.toString()] = u.username;
        });
        const activeUsersWithNames = mostActiveUsers.map((u)=>({
                userId: u._id,
                username: userMap[u._id.toString()] || 'Unknown',
                messageCount: u.messageCount
            }));
        // Messages with reactions
        const messagesWithReactions = await __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$db$2e$js__$5b$api$5d$__$28$ecmascript$29$__["messageModal"].countDocuments({
            $or: [
                {
                    'reactions': {
                        $exists: true,
                        $ne: {}
                    }
                },
                {
                    'reactions.🔥': {
                        $exists: true,
                        $ne: []
                    }
                },
                {
                    'reactions.❤️': {
                        $exists: true,
                        $ne: []
                    }
                },
                {
                    'reactions.😂': {
                        $exists: true,
                        $ne: []
                    }
                }
            ]
        });
        // Average messages per user
        const avgMessagesPerUser = totalUsers > 0 ? (totalMessages / totalUsers).toFixed(2) : 0;
        // Average replies per message
        const avgRepliesPerMessage = totalMessages > 0 ? (totalReplies / totalMessages).toFixed(2) : 0;
        return res.status(200).json({
            success: true,
            stats: {
                overview: {
                    totalUsers,
                    totalMessages,
                    totalReplies,
                    messagesWithReplies,
                    messagesWithReactions,
                    avgMessagesPerUser: parseFloat(avgMessagesPerUser),
                    avgRepliesPerMessage: parseFloat(avgRepliesPerMessage)
                },
                growth: {
                    messagesLast7Days,
                    messagesLast30Days,
                    usersLast7Days,
                    usersLast30Days
                },
                messagesByMood,
                messagesPerDay,
                mostActiveUsers: activeUsersWithNames
            }
        });
    } catch (error) {
        console.error('Stats error:', error);
        return res.status(500).json({
            error: 'Failed to fetch statistics'
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6353833d._.js.map