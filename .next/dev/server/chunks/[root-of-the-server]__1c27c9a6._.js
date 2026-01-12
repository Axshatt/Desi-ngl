module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desi-Ngl/pages/api/message/status.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
const { messageModal, userModal } = (()=>{
    const e = new Error("Cannot find module '../../db'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
async function handler(req, res) {
    const { id } = req.query;
    if (!id) return res.status(400).json({
        error: 'ID required'
    });
    try {
        const message = await messageModal.findById(id);
        if (!message) return res.status(404).json({
            error: 'Not found'
        });
        const user = await userModal.findById(message.userId);
        return res.status(200).json({
            message: message.message,
            reply: message.reply,
            senderConsent: message.senderConsent,
            username: user?.username || 'user'
        });
    } catch (e) {
        return res.status(500).json({
            error: e.message
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1c27c9a6._.js.map