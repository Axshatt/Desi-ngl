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
"[project]/Desi-Ngl/pages/admin/super.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>SuperAdmin
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$axios$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import, [project]/Desi-Ngl/node_modules/axios)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__ = __turbopack_context__.i("[externals]/react-hot-toast [external] (react-hot-toast, esm_import, [project]/Desi-Ngl/node_modules/react-hot-toast)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/chart-column.js [ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/users.js [ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/message-square.js [ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$reply$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Reply$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/reply.js [ssr] (ecmascript) <export default as Reply>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/shield.js [ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/trash-2.js [ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/search.js [ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/log-out.js [ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/heart.js [ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/flame.js [ssr] (ecmascript) <export default as Flame>");
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
function SuperAdmin() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [authenticated, setAuthenticated] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [authToken, setAuthToken] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('dashboard');
    const [usersPage, setUsersPage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(1);
    const [messagesPage, setMessagesPage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(1);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        // Check if already authenticated
        const token = localStorage.getItem('superAdminToken');
        if (token) {
            setAuthToken(token);
            setAuthenticated(true);
            fetchStats(token);
        }
    }, []);
    async function handleLogin() {
        if (!password.trim()) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].error('Please enter password');
            return;
        }
        setLoading(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$axios$29$__["default"].post('/api/admin/auth', {
                password
            });
            if (res.data.success) {
                localStorage.setItem('superAdminToken', res.data.token);
                setAuthToken(res.data.token);
                setAuthenticated(true);
                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].success('Welcome, Super Admin!');
                fetchStats(res.data.token);
            }
        } catch (e) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].error('Invalid password');
        } finally{
            setLoading(false);
        }
    }
    function handleLogout() {
        localStorage.removeItem('superAdminToken');
        setAuthenticated(false);
        setAuthToken(null);
        setStats(null);
        setPassword('');
        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].success('Logged out');
    }
    async function fetchStats(token) {
        try {
            const res = await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$axios$29$__["default"].get('/api/admin/stats', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setStats(res.data.stats);
        } catch (e) {
            console.error('Failed to fetch stats:', e);
        }
    }
    async function fetchUsers(token, page = 1, search = '') {
        try {
            const res = await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$axios$29$__["default"].get('/api/admin/users', {
                params: {
                    page,
                    limit: 50,
                    search
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUsers(res.data.users);
        } catch (e) {
            console.error('Failed to fetch users:', e);
        }
    }
    async function fetchMessages(token, page = 1, search = '') {
        try {
            const res = await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$axios$29$__["default"].get('/api/admin/messages', {
                params: {
                    page,
                    limit: 50,
                    search
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setMessages(res.data.messages);
        } catch (e) {
            console.error('Failed to fetch messages:', e);
        }
    }
    async function deleteUser(userId) {
        if (!confirm('Are you sure you want to delete this user and all their messages?')) return;
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$axios$29$__["default"].delete('/api/admin/users', {
                data: {
                    userId
                },
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].success('User deleted');
            fetchUsers(authToken, usersPage, searchQuery);
            fetchStats(authToken);
        } catch (e) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].error('Failed to delete user');
        }
    }
    async function deleteMessage(messageId) {
        if (!confirm('Are you sure you want to delete this message?')) return;
        try {
            await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$axios$29$__["default"].delete('/api/admin/messages', {
                data: {
                    messageId
                },
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].success('Message deleted');
            fetchMessages(authToken, messagesPage, searchQuery);
            fetchStats(authToken);
        } catch (e) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].error('Failed to delete message');
        }
    }
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (authenticated && authToken) {
            if (activeTab === 'users') {
                fetchUsers(authToken, usersPage, searchQuery);
            } else if (activeTab === 'messages') {
                fetchMessages(authToken, messagesPage, searchQuery);
            }
        }
    }, [
        activeTab,
        usersPage,
        messagesPage,
        searchQuery,
        authenticated,
        authToken
    ]);
    if (!authenticated) {
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
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '24px',
                    padding: '40px',
                    maxWidth: '400px',
                    width: '100%',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginBottom: '30px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                size: 48,
                                color: "var(--accent-purple)",
                                style: {
                                    marginBottom: '16px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: '28px',
                                    margin: 0,
                                    fontWeight: 800
                                },
                                children: "Super Admin"
                            }, void 0, false, {
                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'var(--text-secondary)',
                                    marginTop: '8px'
                                },
                                children: "Founder Access Only"
                            }, void 0, false, {
                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                        type: "password",
                        value: password,
                        onChange: (e)=>setPassword(e.target.value),
                        onKeyPress: (e)=>e.key === 'Enter' && handleLogin(),
                        placeholder: "Enter admin password",
                        style: {
                            width: '100%',
                            padding: '14px',
                            borderRadius: '12px',
                            border: '1px solid var(--glass-border)',
                            background: 'var(--surface-color)',
                            color: '#fff',
                            fontSize: '16px',
                            marginBottom: '20px',
                            outline: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: handleLogin,
                        disabled: loading,
                        style: {
                            width: '100%',
                            padding: '14px',
                            borderRadius: '12px',
                            border: 'none',
                            background: 'var(--accent-purple)',
                            color: '#fff',
                            fontSize: '16px',
                            fontWeight: 700,
                            cursor: loading ? 'wait' : 'pointer',
                            opacity: loading ? 0.7 : 1
                        },
                        children: loading ? 'Authenticating...' : 'Login'
                    }, void 0, false, {
                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                        lineNumber: 191,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                lineNumber: 154,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desi-Ngl/pages/admin/super.js",
            lineNumber: 146,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            minHeight: '100vh',
            background: 'var(--bg-color)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    width: '280px',
                    background: 'var(--surface-color)',
                    borderRight: '1px solid var(--glass-border)',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '32px',
                    position: 'fixed',
                    height: '100vh',
                    overflowY: 'auto',
                    zIndex: 100
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: '20px',
                                    fontWeight: 800,
                                    margin: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                        size: 24,
                                        color: "var(--accent-purple)"
                                    }, void 0, false, {
                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this),
                                    "Admin"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'var(--text-secondary)',
                                    fontSize: '12px',
                                    marginTop: '6px'
                                },
                                children: "v1.0"
                            }, void 0, false, {
                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px'
                        },
                        children: [
                            {
                                id: 'dashboard',
                                label: 'Dashboard',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
                            },
                            {
                                id: 'users',
                                label: 'Users Management',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
                            },
                            {
                                id: 'messages',
                                label: 'Messages',
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"]
                            }
                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(tab.id),
                                style: {
                                    padding: '12px 16px',
                                    borderRadius: '12px',
                                    border: 'none',
                                    background: activeTab === tab.id ? 'var(--accent-purple)' : 'transparent',
                                    color: activeTab === tab.id ? '#fff' : 'var(--text-secondary)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    fontWeight: 600,
                                    transition: 'all 0.2s',
                                    fontSize: '14px',
                                    textAlign: 'left'
                                },
                                onMouseEnter: (e)=>{
                                    if (activeTab !== tab.id) {
                                        e.currentTarget.style.background = 'rgba(138, 43, 226, 0.1)';
                                        e.currentTarget.style.color = '#fff';
                                    }
                                },
                                onMouseLeave: (e)=>{
                                    if (activeTab !== tab.id) {
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.color = 'var(--text-secondary)';
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(tab.icon, {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                        lineNumber: 275,
                                        columnNumber: 15
                                    }, this),
                                    tab.label
                                ]
                            }, tab.id, true, {
                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                lineNumber: 244,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 'auto',
                            paddingTop: '24px',
                            borderTop: '1px solid var(--glass-border)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: handleLogout,
                            style: {
                                width: '100%',
                                padding: '12px 16px',
                                borderRadius: '12px',
                                border: '1px solid rgba(255, 68, 68, 0.3)',
                                background: 'rgba(255, 68, 68, 0.1)',
                                color: '#ff6b6b',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                fontWeight: 600,
                                fontSize: '14px',
                                transition: 'all 0.2s'
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.background = 'rgba(255, 68, 68, 0.2)';
                                e.currentTarget.style.borderColor = 'rgba(255, 68, 68, 0.5)';
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.background = 'rgba(255, 68, 68, 0.1)';
                                e.currentTarget.style.borderColor = 'rgba(255, 68, 68, 0.3)';
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this),
                                " Logout"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    marginLeft: '280px',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '24px 40px',
                            background: 'var(--surface-color)',
                            borderBottom: '1px solid var(--glass-border)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                    style: {
                                        fontSize: '28px',
                                        margin: 0,
                                        fontWeight: 800
                                    },
                                    children: activeTab === 'dashboard' ? 'Dashboard' : activeTab === 'users' ? 'Users Management' : 'Messages'
                                }, void 0, false, {
                                    fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                    lineNumber: 326,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: 'var(--text-secondary)',
                                        marginTop: '6px',
                                        fontSize: '14px'
                                    },
                                    children: activeTab === 'dashboard' ? 'Analytics & Overview' : activeTab === 'users' ? 'Manage all users' : 'Review & manage messages'
                                }, void 0, false, {
                                    fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                            lineNumber: 325,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            padding: '40px',
                            overflowY: 'auto'
                        },
                        children: [
                            activeTab === 'dashboard' && stats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                            gap: '24px',
                                            marginBottom: '40px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatCard, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                                                label: "Total Users",
                                                value: stats.overview.totalUsers,
                                                change: `+${stats.growth.usersLast7Days} this week`,
                                                color: "#8A2BE2"
                                            }, void 0, false, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                lineNumber: 348,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatCard, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
                                                label: "Total Messages",
                                                value: stats.overview.totalMessages,
                                                change: `+${stats.growth.messagesLast7Days} this week`,
                                                color: "#CCFF00"
                                            }, void 0, false, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                lineNumber: 355,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(StatCard, {
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$reply$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Reply$3e$__["Reply"],
                                                label: "Total Replies",
                                                value: stats.overview.totalReplies,
                                                change: `${stats.overview.avgRepliesPerMessage} avg per message`,
                                                color: "#FF69B4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                lineNumber: 362,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                        lineNumber: 342,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: '2fr 1.5fr',
                                            gap: '24px',
                                            marginBottom: '40px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: 'var(--surface-color)',
                                                    border: '1px solid var(--glass-border)',
                                                    borderRadius: '16px',
                                                    padding: '28px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            marginTop: 0,
                                                            marginBottom: '20px',
                                                            fontSize: '18px',
                                                            fontWeight: 700
                                                        },
                                                        children: "Messages Per Day (Last 7 Days)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                        lineNumber: 385,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'flex-end',
                                                            gap: '10px',
                                                            height: '220px'
                                                        },
                                                        children: stats.messagesPerDay.map((day, idx)=>{
                                                            const maxCount = Math.max(...stats.messagesPerDay.map((d)=>d.count));
                                                            const height = maxCount > 0 ? day.count / maxCount * 100 : 0;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    flex: 1,
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    alignItems: 'center',
                                                                    gap: '10px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            width: '100%',
                                                                            background: 'linear-gradient(to top, var(--accent-purple), rgba(138, 43, 226, 0.5))',
                                                                            borderRadius: '6px 6px 0 0',
                                                                            height: `${height}%`,
                                                                            minHeight: day.count > 0 ? '4px' : '0',
                                                                            display: 'flex',
                                                                            alignItems: 'flex-end',
                                                                            justifyContent: 'center',
                                                                            paddingBottom: '4px',
                                                                            color: '#fff',
                                                                            fontSize: '12px',
                                                                            fontWeight: 700,
                                                                            transition: 'all 0.2s'
                                                                        },
                                                                        children: day.count > 0 && day.count
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                        lineNumber: 394,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '12px',
                                                                            color: 'var(--text-secondary)',
                                                                            fontWeight: 500
                                                                        },
                                                                        children: new Date(day.date).toLocaleDateString('en-US', {
                                                                            month: 'short',
                                                                            day: 'numeric'
                                                                        })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                        lineNumber: 411,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                lineNumber: 393,
                                                                columnNumber: 21
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                        lineNumber: 388,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                lineNumber: 379,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: 'var(--surface-color)',
                                                    border: '1px solid var(--glass-border)',
                                                    borderRadius: '16px',
                                                    padding: '28px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            marginTop: 0,
                                                            marginBottom: '20px',
                                                            fontSize: '18px',
                                                            fontWeight: 700
                                                        },
                                                        children: "Messages By Mood"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                        lineNumber: 427,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: '14px'
                                                        },
                                                        children: stats.messagesByMood.map((mood, idx)=>{
                                                            const total = stats.messagesByMood.reduce((sum, m)=>sum + m.count, 0);
                                                            const percentage = total > 0 ? (mood.count / total * 100).toFixed(1) : 0;
                                                            const moodIcons = {
                                                                'Serious': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                    lineNumber: 435,
                                                                    columnNumber: 32
                                                                }, this),
                                                                'Fun': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                    lineNumber: 436,
                                                                    columnNumber: 28
                                                                }, this),
                                                                'Advice': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                    lineNumber: 437,
                                                                    columnNumber: 31
                                                                }, this),
                                                                'Roast': /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                                                    size: 16
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                    lineNumber: 438,
                                                                    columnNumber: 30
                                                                }, this)
                                                            };
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            justifyContent: 'space-between',
                                                                            marginBottom: '8px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    display: 'flex',
                                                                                    alignItems: 'center',
                                                                                    gap: '8px',
                                                                                    fontWeight: 600,
                                                                                    fontSize: '14px'
                                                                                },
                                                                                children: [
                                                                                    moodIcons[mood._id] || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                                                        size: 16
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                                        lineNumber: 444,
                                                                                        columnNumber: 51
                                                                                    }, this),
                                                                                    mood._id || 'Unknown'
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                                lineNumber: 443,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: 'var(--text-secondary)',
                                                                                    fontSize: '13px',
                                                                                    fontWeight: 500
                                                                                },
                                                                                children: [
                                                                                    mood.count,
                                                                                    " (",
                                                                                    percentage,
                                                                                    "%)"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                                lineNumber: 447,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                        lineNumber: 442,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            height: '10px',
                                                                            background: 'rgba(255,255,255,0.08)',
                                                                            borderRadius: '6px',
                                                                            overflow: 'hidden'
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                height: '100%',
                                                                                background: 'linear-gradient(to right, var(--accent-purple), var(--accent-lime))',
                                                                                width: `${percentage}%`,
                                                                                transition: 'width 0.3s'
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                            lineNumber: 457,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                        lineNumber: 451,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                lineNumber: 441,
                                                                columnNumber: 21
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                        lineNumber: 430,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                lineNumber: 421,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                        lineNumber: 372,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: 'var(--surface-color)',
                                            border: '1px solid var(--glass-border)',
                                            borderRadius: '16px',
                                            padding: '28px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    marginTop: 0,
                                                    marginBottom: '24px',
                                                    fontSize: '18px',
                                                    fontWeight: 700
                                                },
                                                children: "🔥 Most Active Users"
                                            }, void 0, false, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                lineNumber: 478,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '12px'
                                                },
                                                children: stats.mostActiveUsers.map((user, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'space-between',
                                                            padding: '14px 16px',
                                                            background: 'rgba(255,255,255,0.03)',
                                                            borderRadius: '12px',
                                                            border: '1px solid rgba(255,255,255,0.05)',
                                                            transition: 'all 0.2s',
                                                            cursor: 'default'
                                                        },
                                                        onMouseEnter: (e)=>{
                                                            e.currentTarget.style.background = 'rgba(138,43,226,0.08)';
                                                            e.currentTarget.style.borderColor = 'rgba(138,43,226,0.2)';
                                                        },
                                                        onMouseLeave: (e)=>{
                                                            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '14px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            width: '38px',
                                                                            height: '38px',
                                                                            borderRadius: '10px',
                                                                            background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-lime))',
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            justifyContent: 'center',
                                                                            color: '#000',
                                                                            fontWeight: 800,
                                                                            fontSize: '16px'
                                                                        },
                                                                        children: idx + 1
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                        lineNumber: 504,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    fontWeight: 600,
                                                                                    fontSize: '14px'
                                                                                },
                                                                                children: [
                                                                                    "@",
                                                                                    user.username
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                                lineNumber: 519,
                                                                                columnNumber: 23
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                style: {
                                                                                    color: 'var(--text-secondary)',
                                                                                    fontSize: '12px',
                                                                                    marginTop: '2px'
                                                                                },
                                                                                children: [
                                                                                    "Rank #",
                                                                                    idx + 1
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                                lineNumber: 520,
                                                                                columnNumber: 23
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                        lineNumber: 518,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                lineNumber: 503,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: 'var(--accent-lime)',
                                                                    fontWeight: 700,
                                                                    fontSize: '14px'
                                                                },
                                                                children: [
                                                                    user.messageCount,
                                                                    " msg"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                lineNumber: 523,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                        lineNumber: 483,
                                                        columnNumber: 17
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                lineNumber: 481,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                        lineNumber: 472,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                lineNumber: 340,
                                columnNumber: 9
                            }, this),
                            activeTab === 'users' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '16px',
                                            marginBottom: '28px',
                                            alignItems: 'center'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1,
                                                    maxWidth: '400px',
                                                    position: 'relative'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                        size: 18,
                                                        style: {
                                                            position: 'absolute',
                                                            left: '14px',
                                                            top: '50%',
                                                            transform: 'translateY(-50%)',
                                                            color: 'var(--text-secondary)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                        lineNumber: 539,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: searchQuery,
                                                        onChange: (e)=>{
                                                            setSearchQuery(e.target.value);
                                                            setUsersPage(1);
                                                        },
                                                        placeholder: "Search users by username...",
                                                        style: {
                                                            width: '100%',
                                                            padding: '12px 12px 12px 44px',
                                                            borderRadius: '12px',
                                                            border: '1px solid var(--glass-border)',
                                                            background: 'var(--surface-color)',
                                                            color: '#fff',
                                                            fontSize: '14px',
                                                            outline: 'none',
                                                            transition: 'all 0.2s'
                                                        },
                                                        onFocus: (e)=>e.target.style.borderColor = 'var(--accent-purple)',
                                                        onBlur: (e)=>e.target.style.borderColor = 'var(--glass-border)'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                        lineNumber: 540,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                lineNumber: 538,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>fetchUsers(authToken, usersPage, searchQuery),
                                                style: {
                                                    padding: '12px 20px',
                                                    borderRadius: '12px',
                                                    border: '1px solid var(--glass-border)',
                                                    background: 'rgba(138, 43, 226, 0.1)',
                                                    color: '#fff',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    fontWeight: 600,
                                                    fontSize: '14px',
                                                    transition: 'all 0.2s'
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.background = 'rgba(138, 43, 226, 0.2)';
                                                    e.currentTarget.style.borderColor = 'var(--accent-purple)';
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.background = 'rgba(138, 43, 226, 0.1)';
                                                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                        lineNumber: 588,
                                                        columnNumber: 15
                                                    }, this),
                                                    " Refresh"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                lineNumber: 563,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                        lineNumber: 537,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: 'var(--surface-color)',
                                            border: '1px solid var(--glass-border)',
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("table", {
                                                style: {
                                                    width: '100%',
                                                    borderCollapse: 'collapse'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("thead", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                                            style: {
                                                                background: 'rgba(138, 43, 226, 0.08)',
                                                                borderBottom: '2px solid var(--glass-border)'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        padding: '16px 20px',
                                                                        textAlign: 'left',
                                                                        fontWeight: 700,
                                                                        fontSize: '13px',
                                                                        textTransform: 'uppercase',
                                                                        color: 'var(--text-secondary)',
                                                                        letterSpacing: '0.5px'
                                                                    },
                                                                    children: "Username"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                    lineNumber: 603,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        padding: '16px 20px',
                                                                        textAlign: 'left',
                                                                        fontWeight: 700,
                                                                        fontSize: '13px',
                                                                        textTransform: 'uppercase',
                                                                        color: 'var(--text-secondary)',
                                                                        letterSpacing: '0.5px'
                                                                    },
                                                                    children: "Messages"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                    lineNumber: 604,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        padding: '16px 20px',
                                                                        textAlign: 'left',
                                                                        fontWeight: 700,
                                                                        fontSize: '13px',
                                                                        textTransform: 'uppercase',
                                                                        color: 'var(--text-secondary)',
                                                                        letterSpacing: '0.5px'
                                                                    },
                                                                    children: "Joined Date"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                    lineNumber: 605,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                                                    style: {
                                                                        padding: '16px 20px',
                                                                        textAlign: 'right',
                                                                        fontWeight: 700,
                                                                        fontSize: '13px',
                                                                        textTransform: 'uppercase',
                                                                        color: 'var(--text-secondary)',
                                                                        letterSpacing: '0.5px'
                                                                    },
                                                                    children: "Actions"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                    lineNumber: 606,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                            lineNumber: 602,
                                                            columnNumber: 17
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                        lineNumber: 601,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tbody", {
                                                        children: users.map((user, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                                                style: {
                                                                    borderTop: '1px solid var(--glass-border)',
                                                                    transition: 'all 0.2s',
                                                                    background: 'transparent'
                                                                },
                                                                onMouseEnter: (e)=>{
                                                                    e.currentTarget.style.background = 'rgba(138, 43, 226, 0.05)';
                                                                },
                                                                onMouseLeave: (e)=>{
                                                                    e.currentTarget.style.background = 'transparent';
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            padding: '16px 20px',
                                                                            fontWeight: 600,
                                                                            fontSize: '14px'
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                gap: '10px'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        width: '32px',
                                                                                        height: '32px',
                                                                                        borderRadius: '8px',
                                                                                        background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-lime))',
                                                                                        display: 'flex',
                                                                                        alignItems: 'center',
                                                                                        justifyContent: 'center',
                                                                                        color: '#000',
                                                                                        fontWeight: 700,
                                                                                        fontSize: '12px'
                                                                                    },
                                                                                    children: user.username.charAt(0).toUpperCase()
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                                    lineNumber: 625,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                "@",
                                                                                user.username
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                            lineNumber: 624,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                        lineNumber: 623,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            padding: '16px 20px',
                                                                            color: 'var(--accent-lime)',
                                                                            fontWeight: 600,
                                                                            fontSize: '14px'
                                                                        },
                                                                        children: user.messageCount || 0
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                        lineNumber: 642,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            padding: '16px 20px',
                                                                            color: 'var(--text-secondary)',
                                                                            fontSize: '13px'
                                                                        },
                                                                        children: new Date(user.createdAt).toLocaleDateString('en-US', {
                                                                            year: 'numeric',
                                                                            month: 'short',
                                                                            day: 'numeric'
                                                                        })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                        lineNumber: 645,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                                        style: {
                                                                            padding: '16px 20px',
                                                                            textAlign: 'right'
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>deleteUser(user._id),
                                                                            style: {
                                                                                padding: '8px 12px',
                                                                                borderRadius: '8px',
                                                                                border: 'none',
                                                                                background: 'rgba(255, 68, 68, 0.15)',
                                                                                color: '#ff6b6b',
                                                                                cursor: 'pointer',
                                                                                display: 'inline-flex',
                                                                                alignItems: 'center',
                                                                                gap: '6px',
                                                                                fontSize: '12px',
                                                                                fontWeight: 600,
                                                                                transition: 'all 0.2s'
                                                                            },
                                                                            onMouseEnter: (e)=>{
                                                                                e.currentTarget.style.background = 'rgba(255, 68, 68, 0.25)';
                                                                                e.currentTarget.style.color = '#ff8787';
                                                                            },
                                                                            onMouseLeave: (e)=>{
                                                                                e.currentTarget.style.background = 'rgba(255, 68, 68, 0.15)';
                                                                                e.currentTarget.style.color = '#ff6b6b';
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                    size: 14
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                                    lineNumber: 674,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                " Delete"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                            lineNumber: 649,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                        lineNumber: 648,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                lineNumber: 611,
                                                                columnNumber: 19
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                        lineNumber: 609,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                lineNumber: 600,
                                                columnNumber: 13
                                            }, this),
                                            users.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    padding: '40px',
                                                    textAlign: 'center',
                                                    color: 'var(--text-secondary)'
                                                },
                                                children: "No users found"
                                            }, void 0, false, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                lineNumber: 682,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                        lineNumber: 593,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                lineNumber: 535,
                                columnNumber: 9
                            }, this),
                            activeTab === 'messages' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '16px',
                                            marginBottom: '28px',
                                            alignItems: 'center'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1,
                                                    maxWidth: '400px',
                                                    position: 'relative'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                        size: 18,
                                                        style: {
                                                            position: 'absolute',
                                                            left: '14px',
                                                            top: '50%',
                                                            transform: 'translateY(-50%)',
                                                            color: 'var(--text-secondary)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                        lineNumber: 696,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: searchQuery,
                                                        onChange: (e)=>{
                                                            setSearchQuery(e.target.value);
                                                            setMessagesPage(1);
                                                        },
                                                        placeholder: "Search messages...",
                                                        style: {
                                                            width: '100%',
                                                            padding: '12px 12px 12px 44px',
                                                            borderRadius: '12px',
                                                            border: '1px solid var(--glass-border)',
                                                            background: 'var(--surface-color)',
                                                            color: '#fff',
                                                            fontSize: '14px',
                                                            outline: 'none',
                                                            transition: 'all 0.2s'
                                                        },
                                                        onFocus: (e)=>e.target.style.borderColor = 'var(--accent-purple)',
                                                        onBlur: (e)=>e.target.style.borderColor = 'var(--glass-border)'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                        lineNumber: 697,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                lineNumber: 695,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>fetchMessages(authToken, messagesPage, searchQuery),
                                                style: {
                                                    padding: '12px 20px',
                                                    borderRadius: '12px',
                                                    border: '1px solid var(--glass-border)',
                                                    background: 'rgba(138, 43, 226, 0.1)',
                                                    color: '#fff',
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    fontWeight: 600,
                                                    fontSize: '14px',
                                                    transition: 'all 0.2s'
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.background = 'rgba(138, 43, 226, 0.2)';
                                                    e.currentTarget.style.borderColor = 'var(--accent-purple)';
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.background = 'rgba(138, 43, 226, 0.1)';
                                                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                        lineNumber: 745,
                                                        columnNumber: 15
                                                    }, this),
                                                    " Refresh"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                lineNumber: 720,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                        lineNumber: 694,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))',
                                            gap: '20px'
                                        },
                                        children: messages.map((msg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: 'var(--surface-color)',
                                                    border: '1px solid var(--glass-border)',
                                                    borderRadius: '16px',
                                                    padding: '20px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '16px',
                                                    transition: 'all 0.2s',
                                                    cursor: 'default'
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.borderColor = 'var(--accent-purple)';
                                                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(138, 43, 226, 0.15)';
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                                                    e.currentTarget.style.boxShadow = 'none';
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'flex-start',
                                                            gap: '12px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        gap: '10px',
                                                                        marginBottom: '8px'
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                width: '32px',
                                                                                height: '32px',
                                                                                borderRadius: '8px',
                                                                                background: 'linear-gradient(135deg, var(--accent-purple), var(--accent-lime))',
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                justifyContent: 'center',
                                                                                color: '#000',
                                                                                fontWeight: 700,
                                                                                fontSize: '12px'
                                                                            },
                                                                            children: (msg.userId?.username || 'U').charAt(0).toUpperCase()
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                            lineNumber: 776,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        fontWeight: 600,
                                                                                        fontSize: '14px'
                                                                                    },
                                                                                    children: [
                                                                                        "@",
                                                                                        msg.userId?.username || 'Unknown'
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                                    lineNumber: 791,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                    style: {
                                                                                        fontSize: '12px',
                                                                                        color: 'var(--text-secondary)'
                                                                                    },
                                                                                    children: new Date(msg.createdAt).toLocaleDateString('en-US', {
                                                                                        month: 'short',
                                                                                        day: 'numeric',
                                                                                        hour: '2-digit',
                                                                                        minute: '2-digit'
                                                                                    })
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                                    lineNumber: 792,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                            lineNumber: 790,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                    lineNumber: 775,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                lineNumber: 774,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    padding: '4px 10px',
                                                                    borderRadius: '8px',
                                                                    fontSize: '11px',
                                                                    fontWeight: 700,
                                                                    background: 'rgba(138, 43, 226, 0.2)',
                                                                    color: 'var(--accent-lime)',
                                                                    textTransform: 'uppercase',
                                                                    letterSpacing: '0.5px'
                                                                },
                                                                children: msg.mood || 'Serious'
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                lineNumber: 798,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                        lineNumber: 773,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            padding: '12px 16px',
                                                            background: 'rgba(255,255,255,0.05)',
                                                            borderRadius: '12px',
                                                            lineHeight: '1.6',
                                                            color: 'var(--text-primary)',
                                                            fontSize: '14px',
                                                            borderLeft: '3px solid var(--accent-lime)'
                                                        },
                                                        children: msg.message
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                        lineNumber: 813,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                            paddingTop: '12px',
                                                            borderTop: '1px solid rgba(255,255,255,0.05)'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    gap: '16px',
                                                                    fontSize: '12px',
                                                                    color: 'var(--text-secondary)'
                                                                },
                                                                children: [
                                                                    msg.replies?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            gap: '4px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                                lineNumber: 836,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            " ",
                                                                            msg.replies.length
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                        lineNumber: 835,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    msg.reactions && Object.keys(msg.reactions).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            gap: '4px'
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                                lineNumber: 841,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            " ",
                                                                            Object.keys(msg.reactions).length
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                        lineNumber: 840,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                lineNumber: 833,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>deleteMessage(msg._id),
                                                                style: {
                                                                    padding: '8px 12px',
                                                                    borderRadius: '8px',
                                                                    border: 'none',
                                                                    background: 'rgba(255, 68, 68, 0.15)',
                                                                    color: '#ff6b6b',
                                                                    cursor: 'pointer',
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '6px',
                                                                    fontSize: '12px',
                                                                    fontWeight: 600,
                                                                    transition: 'all 0.2s'
                                                                },
                                                                onMouseEnter: (e)=>{
                                                                    e.currentTarget.style.background = 'rgba(255, 68, 68, 0.25)';
                                                                    e.currentTarget.style.color = '#ff8787';
                                                                },
                                                                onMouseLeave: (e)=>{
                                                                    e.currentTarget.style.background = 'rgba(255, 68, 68, 0.15)';
                                                                    e.currentTarget.style.color = '#ff6b6b';
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                        lineNumber: 870,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    " Delete"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                                lineNumber: 845,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                        lineNumber: 826,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                lineNumber: 752,
                                                columnNumber: 15
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                        lineNumber: 750,
                                        columnNumber: 11
                                    }, this),
                                    messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '60px 40px',
                                            textAlign: 'center',
                                            color: 'var(--text-secondary)',
                                            background: 'var(--surface-color)',
                                            borderRadius: '16px',
                                            border: '1px dashed var(--glass-border)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                size: 48,
                                                style: {
                                                    opacity: 0.3,
                                                    marginBottom: '16px'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                lineNumber: 886,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: '16px',
                                                    margin: 0
                                                },
                                                children: "No messages found"
                                            }, void 0, false, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                                lineNumber: 887,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                        lineNumber: 878,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                                lineNumber: 692,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                lineNumber: 315,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
        lineNumber: 215,
        columnNumber: 5
    }, this);
}
function StatCard({ icon: Icon, label, value, change, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: {
            background: 'var(--surface-color)',
            border: '1px solid var(--glass-border)',
            borderRadius: '16px',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            transition: 'all 0.2s',
            cursor: 'default'
        },
        onMouseEnter: (e)=>{
            e.currentTarget.style.borderColor = color;
            e.currentTarget.style.boxShadow = `0 15px 35px ${color}20`;
            e.currentTarget.style.transform = 'translateY(-4px)';
        },
        onMouseLeave: (e)=>{
            e.currentTarget.style.borderColor = 'var(--glass-border)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        width: '56px',
                        height: '56px',
                        borderRadius: '14px',
                        background: `${color}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1.5px solid ${color}40`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                        size: 28,
                        color: color
                    }, void 0, false, {
                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                        lineNumber: 933,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                    lineNumber: 923,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                lineNumber: 922,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '14px',
                            color: 'var(--text-secondary)',
                            marginBottom: '6px',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                        },
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                        lineNumber: 937,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '36px',
                            fontWeight: 800,
                            marginBottom: '8px',
                            color: '#fff'
                        },
                        children: value.toLocaleString()
                    }, void 0, false, {
                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                        lineNumber: 940,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '13px',
                            color: color,
                            fontWeight: 600
                        },
                        children: [
                            "📈 ",
                            change
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                        lineNumber: 943,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desi-Ngl/pages/admin/super.js",
                lineNumber: 936,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desi-Ngl/pages/admin/super.js",
        lineNumber: 900,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__a57f4c9c._.js.map