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
"[project]/Desi-Ngl/pages/[username].js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>MessagePage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$axios$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import, [project]/Desi-Ngl/node_modules/axios)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__ = __turbopack_context__.i("[externals]/react-hot-toast [external] (react-hot-toast, esm_import, [project]/Desi-Ngl/node_modules/react-hot-toast)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/send.js [ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/flame.js [ssr] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/heart.js [ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/smile.js [ssr] (ecmascript) <export default as Smile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/circle-alert.js [ssr] (ecmascript) <export default as AlertCircle>");
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
function MessagePage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { username } = router.query;
    const [msg, setMsg] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [mood, setMood] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('Serious');
    const [sending, setSending] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const moods = [
        {
            id: 'Serious',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/Desi-Ngl/pages/[username].js",
                lineNumber: 15,
                columnNumber: 28
            }, this),
            color: '#666'
        },
        {
            id: 'Fun',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/Desi-Ngl/pages/[username].js",
                lineNumber: 16,
                columnNumber: 24
            }, this),
            color: '#FFD700'
        },
        {
            id: 'Advice',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/Desi-Ngl/pages/[username].js",
                lineNumber: 17,
                columnNumber: 27
            }, this),
            color: '#FF69B4'
        },
        {
            id: 'Roast',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/Desi-Ngl/pages/[username].js",
                lineNumber: 18,
                columnNumber: 26
            }, this),
            color: '#FF4500'
        }
    ];
    async function sendMessage() {
        if (!msg.trim()) return __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].error('Please enter a message.');
        const u = username || '';
        setSending(true);
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$axios$29$__["default"].post(`/api/${encodeURIComponent(u)}`, {
                message: msg,
                mood
            });
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].success('Message Sent!');
            setMsg('');
        } catch (e) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].error('Error: ' + (e?.response?.data?.error || e.message));
        } finally{
            setSending(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "container",
        style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '20px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '24px',
                    padding: '30px',
                    width: '100%',
                    maxWidth: '500px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginBottom: '30px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'var(--text-secondary)',
                                    fontSize: '14px',
                                    margin: 0
                                },
                                children: "Send a text to"
                            }, void 0, false, {
                                fileName: "[project]/Desi-Ngl/pages/[username].js",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: '32px',
                                    margin: '5px 0 0 0',
                                    fontWeight: 800
                                },
                                children: [
                                    "@",
                                    username
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desi-Ngl/pages/[username].js",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desi-Ngl/pages/[username].js",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                        value: msg,
                        onChange: (e)=>setMsg(e.target.value),
                        placeholder: "Send me an anonymous message...",
                        style: {
                            width: '100%',
                            height: '150px',
                            padding: '16px',
                            borderRadius: '16px',
                            border: '1px solid var(--glass-border)',
                            background: 'var(--surface-color)',
                            color: '#fff',
                            fontSize: '16px',
                            fontFamily: 'inherit',
                            resize: 'none',
                            outline: 'none',
                            marginBottom: '20px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desi-Ngl/pages/[username].js",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '8px',
                            marginBottom: '20px',
                            flexWrap: 'wrap',
                            justifyContent: 'center'
                        },
                        children: moods.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMood(m.id),
                                style: {
                                    background: mood === m.id ? 'var(--text-primary)' : 'rgba(255,255,255,0.05)',
                                    color: mood === m.id ? 'var(--bg-color)' : 'var(--text-secondary)',
                                    border: `1px solid ${mood === m.id ? 'var(--text-primary)' : 'var(--glass-border)'}`,
                                    padding: '8px 16px',
                                    borderRadius: '100px',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    transition: 'all 0.2s'
                                },
                                children: [
                                    m.icon,
                                    " ",
                                    m.id
                                ]
                            }, m.id, true, {
                                fileName: "[project]/Desi-Ngl/pages/[username].js",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desi-Ngl/pages/[username].js",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: sendMessage,
                        disabled: sending,
                        style: {
                            padding: '16px',
                            width: '100%',
                            background: 'var(--text-primary)',
                            color: '#000',
                            border: 'none',
                            borderRadius: '12px',
                            fontSize: '16px',
                            fontWeight: 800,
                            opacity: sending ? 0.7 : 1,
                            transition: 'transform 0.1s',
                            cursor: sending ? 'wait' : 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px'
                        },
                        onMouseDown: (e)=>!sending && (e.currentTarget.style.transform = 'scale(0.98)'),
                        onMouseUp: (e)=>!sending && (e.currentTarget.style.transform = 'scale(1)'),
                        children: sending ? 'Sending...' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                            children: [
                                "Send Message ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/Desi-Ngl/pages/[username].js",
                                    lineNumber: 122,
                                    columnNumber: 52
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/Desi-Ngl/pages/[username].js",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desi-Ngl/pages/[username].js",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                style: {
                    marginTop: '30px',
                    color: 'var(--text-secondary)',
                    fontSize: '13px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                    href: "/",
                    style: {
                        textDecoration: 'underline'
                    },
                    children: "Get your own messages"
                }, void 0, false, {
                    fileName: "[project]/Desi-Ngl/pages/[username].js",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desi-Ngl/pages/[username].js",
                lineNumber: 126,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desi-Ngl/pages/[username].js",
        lineNumber: 37,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__62c70156._.js.map