module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desi-Ngl/pages/api/admin/auth.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Super Admin Authentication
// Only accessible with the correct password from environment variables
__turbopack_context__.s([
    "default",
    ()=>handler
]);
async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }
    const { password } = req.body;
    if (!password) {
        return res.status(400).json({
            error: 'Password required'
        });
    }
    // Check against environment variable
    const adminPassword = process.env.SUPER_ADMIN_PASSWORD || 'admin123' // Default for development
    ;
    if (password === adminPassword) {
        // Generate a simple session token
        const token = Buffer.from(`superadmin:${Date.now()}`).toString('base64');
        return res.status(200).json({
            success: true,
            token,
            message: 'Authentication successful'
        });
    } else {
        return res.status(401).json({
            error: 'Invalid password'
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e2746114._.js.map