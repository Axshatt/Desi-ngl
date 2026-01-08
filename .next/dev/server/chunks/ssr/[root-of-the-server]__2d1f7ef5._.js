module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/Desi-Ngl/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$axios$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import, [project]/Desi-Ngl/node_modules/axios)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__ = __turbopack_context__.i("[externals]/react-hot-toast [external] (react-hot-toast, esm_import, [project]/Desi-Ngl/node_modules/react-hot-toast)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/zap.js [ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/shield.js [ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ghost$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ghost$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/ghost.js [ssr] (ecmascript) <export default as Ghost>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/sparkles.js [ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/chevron-down.js [ssr] (ecmascript) <export default as ChevronDown>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$axios$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$axios$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
function Home() {
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [faqOpen, setFaqOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    async function usernameSend() {
        const name = username.trim();
        if (!name) return __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].error('Please enter a username.');
        setLoading(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$axios$29$__["default"].post('/api/username', {
                username: name
            });
            if (res?.data?.token) {
                localStorage.setItem('username', name);
                localStorage.setItem('token', res.data.token);
                router.push(`/link/${encodeURIComponent(name)}`);
                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].success('Link created successfully!');
            }
        } catch (e) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].error('Error: ' + (e?.response?.data?.error || e.message));
        } finally{
            setLoading(false);
        }
    }
    const features = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ghost$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ghost$3e$__["Ghost"], {
                size: 32,
                className: "text-gradient-primary"
            }, void 0, false, {
                fileName: "[project]/Desi-Ngl/pages/index.js",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            title: '100% Anonymous',
            desc: 'No trackers, no leaks. Your identity is completely hidden.'
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                size: 32,
                className: "text-gradient-primary"
            }, void 0, false, {
                fileName: "[project]/Desi-Ngl/pages/index.js",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            title: 'Safe Space',
            desc: 'Built-in filters to prevent bullying and harassment.'
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                size: 32,
                className: "text-gradient-primary"
            }, void 0, false, {
                fileName: "[project]/Desi-Ngl/pages/index.js",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            title: 'Gen Z Aesthetics',
            desc: 'Clean, dark mode design that looks great on your Story.'
        }
    ];
    const faqs = [
        {
            q: 'Is it really anonymous?',
            a: 'Yes! We do not store IP addresses or any identifiable data of the sender.'
        },
        {
            q: 'How do I share on Instagram?',
            a: 'Copy your unique link and use the "Link" sticker in your Instagram Story.'
        },
        {
            q: 'Can I reply to messages?',
            a: 'Currently, you can screenshot the message and reply on your Story, typical NGL style.'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "grid-bg",
                style: {
                    position: 'fixed',
                    inset: 0,
                    zIndex: -1
                }
            }, void 0, false, {
                fileName: "[project]/Desi-Ngl/pages/index.js",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                className: "container",
                style: {
                    padding: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        fontWeight: 800,
                        fontSize: '24px',
                        letterSpacing: '-1px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                            size: 24,
                            className: "text-gradient-primary"
                        }, void 0, false, {
                            fileName: "[project]/Desi-Ngl/pages/index.js",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        "Desi",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "text-gradient-primary",
                            children: "NGL"
                        }, void 0, false, {
                            fileName: "[project]/Desi-Ngl/pages/index.js",
                            lineNumber: 53,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desi-Ngl/pages/index.js",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desi-Ngl/pages/index.js",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                className: "container",
                style: {
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    gap: '40px',
                    padding: '60px 20px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "animate-fade-in",
                        style: {
                            maxWidth: '800px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'inline-block',
                                    padding: '8px 16px',
                                    borderRadius: '100px',
                                    background: 'var(--glass-bg)',
                                    border: '1px solid var(--glass-border)',
                                    fontSize: '14px',
                                    marginBottom: '20px',
                                    fontWeight: 600
                                },
                                children: "✨ The #1 Anonymous Messaging App"
                            }, void 0, false, {
                                fileName: "[project]/Desi-Ngl/pages/index.js",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: 'clamp(48px, 8vw, 84px)',
                                    lineHeight: 1.1,
                                    margin: '0 0 24px 0',
                                    fontWeight: 800
                                },
                                children: [
                                    "Unleash the ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Desi-Ngl/pages/index.js",
                                        lineNumber: 74,
                                        columnNumber: 25
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "text-gradient-primary",
                                        children: "Untold Stories"
                                    }, void 0, false, {
                                        fileName: "[project]/Desi-Ngl/pages/index.js",
                                        lineNumber: 74,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desi-Ngl/pages/index.js",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '20px',
                                    color: 'var(--text-secondary)',
                                    margin: '0 auto 40px',
                                    maxWidth: '600px',
                                    lineHeight: 1.6
                                },
                                children: "Get honest feedback, confessions, and burning questions from your friends and followers. Simple, secure, and aesthetic."
                            }, void 0, false, {
                                fileName: "[project]/Desi-Ngl/pages/index.js",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desi-Ngl/pages/index.js",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "animate-fade-in",
                        style: {
                            background: 'var(--glass-bg)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '32px',
                            padding: '40px',
                            width: '100%',
                            maxWidth: '500px',
                            boxShadow: '0 20px 40px var(--shadow-color)',
                            animationDelay: '0.2s',
                            position: 'relative'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "animate-float",
                                style: {
                                    position: 'absolute',
                                    top: '-30px',
                                    right: '-20px',
                                    background: '#FF4500',
                                    padding: '10px 20px',
                                    borderRadius: '12px',
                                    transform: 'rotate(10deg)',
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                                    fontWeight: 'bold'
                                },
                                children: "🔥 It's Viral"
                            }, void 0, false, {
                                fileName: "[project]/Desi-Ngl/pages/index.js",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                style: {
                                    margin: '0 0 24px 0',
                                    fontSize: '24px'
                                },
                                children: "Claim your unique link"
                            }, void 0, false, {
                                fileName: "[project]/Desi-Ngl/pages/index.js",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '15px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'relative'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                style: {
                                                    position: 'absolute',
                                                    left: '16px',
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    color: 'var(--text-secondary)'
                                                },
                                                children: "@"
                                            }, void 0, false, {
                                                fileName: "[project]/Desi-Ngl/pages/index.js",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                value: username,
                                                onChange: (e)=>setUsername(e.target.value),
                                                placeholder: "instagram_handle",
                                                style: {
                                                    width: '100%',
                                                    padding: '18px 18px 18px 40px',
                                                    borderRadius: '16px',
                                                    border: '1px solid var(--glass-border)',
                                                    background: 'var(--surface-color)',
                                                    color: 'var(--text-primary)',
                                                    fontSize: '16px',
                                                    outline: 'none',
                                                    fontFamily: 'var(--font-main)',
                                                    transition: 'border-color 0.2s'
                                                },
                                                onFocus: (e)=>e.target.style.borderColor = 'var(--accent-purple)',
                                                onBlur: (e)=>e.target.style.borderColor = 'var(--glass-border)'
                                            }, void 0, false, {
                                                fileName: "[project]/Desi-Ngl/pages/index.js",
                                                lineNumber: 102,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desi-Ngl/pages/index.js",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: usernameSend,
                                        disabled: loading,
                                        style: {
                                            padding: '18px',
                                            width: '100%',
                                            background: 'var(--accent-purple)',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '16px',
                                            fontSize: '18px',
                                            fontWeight: 700,
                                            opacity: loading ? 0.7 : 1,
                                            transition: 'all 0.2s',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '10px',
                                            boxShadow: '0 10px 20px rgba(138, 43, 226, 0.3)'
                                        },
                                        onMouseEnter: (e)=>!loading && (e.currentTarget.style.transform = 'translateY(-2px)'),
                                        onMouseLeave: (e)=>!loading && (e.currentTarget.style.transform = 'translateY(0)'),
                                        onMouseDown: (e)=>!loading && (e.currentTarget.style.transform = 'scale(0.98)'),
                                        children: loading ? 'Creating...' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                            children: [
                                                "Get My Link ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                    size: 20,
                                                    fill: "currentColor"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desi-Ngl/pages/index.js",
                                                    lineNumber: 146,
                                                    columnNumber: 56
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/Desi-Ngl/pages/index.js",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desi-Ngl/pages/index.js",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desi-Ngl/pages/index.js",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desi-Ngl/pages/index.js",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                style: {
                    padding: '80px 20px',
                    background: 'var(--surface-color)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "container",
                    style: {
                        maxWidth: '1000px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            style: {
                                fontSize: '36px',
                                textAlign: 'center',
                                marginBottom: '60px',
                                fontWeight: 800
                            },
                            children: [
                                "Why ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "text-gradient-primary",
                                    children: "DesiNGL"
                                }, void 0, false, {
                                    fileName: "[project]/Desi-Ngl/pages/index.js",
                                    lineNumber: 156,
                                    columnNumber: 108
                                }, this),
                                "?"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desi-Ngl/pages/index.js",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                gap: '40px'
                            },
                            children: features.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '30px',
                                        borderRadius: '24px',
                                        background: 'var(--bg-color)',
                                        border: '1px solid var(--glass-border)',
                                        transition: 'transform 0.3s'
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.transform = 'translateY(-5px)',
                                    onMouseLeave: (e)=>e.currentTarget.style.transform = 'translateY(0)',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: '20px',
                                                display: 'inline-flex',
                                                padding: '15px',
                                                borderRadius: '50%',
                                                background: 'rgba(138, 43, 226, 0.1)'
                                            },
                                            children: f.icon
                                        }, void 0, false, {
                                            fileName: "[project]/Desi-Ngl/pages/index.js",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '24px',
                                                marginBottom: '10px'
                                            },
                                            children: f.title
                                        }, void 0, false, {
                                            fileName: "[project]/Desi-Ngl/pages/index.js",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: 'var(--text-secondary)',
                                                lineHeight: 1.6
                                            },
                                            children: f.desc
                                        }, void 0, false, {
                                            fileName: "[project]/Desi-Ngl/pages/index.js",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/Desi-Ngl/pages/index.js",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desi-Ngl/pages/index.js",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desi-Ngl/pages/index.js",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desi-Ngl/pages/index.js",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                style: {
                    padding: '80px 20px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "animate-fade-in",
                    style: {
                        maxWidth: '600px',
                        margin: '0 auto'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            style: {
                                fontSize: '36px',
                                textAlign: 'center',
                                marginBottom: '40px',
                                fontWeight: 800
                            },
                            children: "FAQs"
                        }, void 0, false, {
                            fileName: "[project]/Desi-Ngl/pages/index.js",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '15px'
                            },
                            children: faqs.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: 'var(--surface-color)',
                                        borderRadius: '16px',
                                        border: '1px solid var(--glass-border)',
                                        overflow: 'hidden'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setFaqOpen(faqOpen === i ? null : i),
                                            style: {
                                                width: '100%',
                                                padding: '20px',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                background: 'transparent',
                                                border: 'none',
                                                color: 'var(--text-primary)',
                                                fontSize: '18px',
                                                fontWeight: 600,
                                                textAlign: 'left'
                                            },
                                            children: [
                                                f.q,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    size: 20,
                                                    style: {
                                                        transition: 'transform 0.3s',
                                                        transform: faqOpen === i ? 'rotate(180deg)' : 'rotate(0)'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desi-Ngl/pages/index.js",
                                                    lineNumber: 209,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desi-Ngl/pages/index.js",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this),
                                        faqOpen === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: '0 20px 20px',
                                                color: 'var(--text-secondary)',
                                                lineHeight: 1.6
                                            },
                                            children: f.a
                                        }, void 0, false, {
                                            fileName: "[project]/Desi-Ngl/pages/index.js",
                                            lineNumber: 212,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/Desi-Ngl/pages/index.js",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desi-Ngl/pages/index.js",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desi-Ngl/pages/index.js",
                    lineNumber: 182,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desi-Ngl/pages/index.js",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
                style: {
                    padding: '60px 0 30px',
                    textAlign: 'center',
                    color: 'var(--text-secondary)',
                    fontSize: '14px',
                    borderTop: '1px solid var(--glass-border)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            fontWeight: 800,
                            fontSize: '24px',
                            letterSpacing: '-1px',
                            marginBottom: '10px'
                        },
                        children: [
                            "Desi",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "text-gradient-primary",
                                children: "NGL"
                            }, void 0, false, {
                                fileName: "[project]/Desi-Ngl/pages/index.js",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desi-Ngl/pages/index.js",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            "Built for ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'var(--text-primary)'
                                },
                                children: "Gen Z"
                            }, void 0, false, {
                                fileName: "[project]/Desi-Ngl/pages/index.js",
                                lineNumber: 226,
                                columnNumber: 22
                            }, this),
                            " • Secure • Anonymous"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desi-Ngl/pages/index.js",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desi-Ngl/pages/index.js",
                lineNumber: 222,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desi-Ngl/pages/index.js",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2d1f7ef5._.js.map