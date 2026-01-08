module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desi-Ngl/pages/api/subscribe.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
(()=>{
    const e = new Error("Cannot find module '../../../db'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Desi-Ngl/node_modules/mongoose)");
;
;
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

//# sourceMappingURL=%5Broot-of-the-server%5D__a813a450._.js.map