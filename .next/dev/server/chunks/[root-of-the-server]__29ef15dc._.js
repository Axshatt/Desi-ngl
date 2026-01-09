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
"[project]/Desi-Ngl/pages/api/[username].js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
const { userModal, messageModal } = __turbopack_context__.r("[project]/Desi-Ngl/db.js [api] (ecmascript)");
async function handler(req, res) {
    const { method } = req;
    const username = req.query.username;
    if (method === 'POST') {
        try {
            const { message, mood = 'Serious' } = req.body;
            if (!message) return res.status(400).json({
                error: 'message required'
            });
            const user = await userModal.findOne({
                username
            });
            if (!user) return res.status(404).json({
                error: 'User not found'
            });
            await messageModal.create({
                message,
                mood,
                userId: user._id
            });
            return res.status(200).json({
                msg: message
            });
        } catch (e) {
            console.error(e);
            return res.status(500).json({
                error: e.message
            });
        }
    }
    return res.status(405).end();
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__29ef15dc._.js.map