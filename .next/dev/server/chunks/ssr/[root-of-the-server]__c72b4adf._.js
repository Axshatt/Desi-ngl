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
"[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("styled-jsx/style.js", () => require("styled-jsx/style.js"));

module.exports = mod;
}),
"[project]/Desi-Ngl/components/EmojiPicker.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmojiPicker
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/smile.js [ssr] (ecmascript) <export default as Smile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/heart.js [ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [ssr] (ecmascript) <export default as ThumbsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/star.js [ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/zap.js [ssr] (ecmascript) <export default as Zap>");
;
;
;
;
const EMOJI_CATEGORIES = {
    'Smileys & People': {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/Desi-Ngl/components/EmojiPicker.js",
            lineNumber: 6,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        emojis: [
            '😀',
            '😃',
            '😄',
            '😁',
            '😆',
            '😅',
            '🤣',
            '😂',
            '🙂',
            '🙃',
            '😉',
            '😊',
            '😇',
            '🥰',
            '😍',
            '🤩',
            '😘',
            '😗',
            '😚',
            '😙',
            '😋',
            '😛',
            '😜',
            '🤪',
            '😝',
            '🤑',
            '🤗',
            '🤭',
            '🤫',
            '🤔',
            '🤐',
            '🤨',
            '😐',
            '😑',
            '😶',
            '😏',
            '😒',
            '🙄',
            '😬',
            '🤥',
            '😌',
            '😔',
            '😪',
            '🤤',
            '😴',
            '😷',
            '🤒',
            '🤕',
            '🤢',
            '🤮',
            '🤧',
            '🥵',
            '🥶',
            '😵',
            '🤯',
            '🤠',
            '🥳',
            '😎',
            '🤓',
            '🧐',
            '😕',
            '😟',
            '🙁',
            '☹️',
            '😮',
            '😯',
            '😲',
            '😳',
            '🥺',
            '😦',
            '😧',
            '😨',
            '😰',
            '😥',
            '😢',
            '😭',
            '😱',
            '😖',
            '😣',
            '😞',
            '😓',
            '😩',
            '😫',
            '🥱',
            '😤',
            '😡',
            '😠',
            '🤬',
            '😈',
            '👿',
            '💀',
            '☠️',
            '💩',
            '🤡',
            '👹',
            '👺',
            '👻',
            '👽',
            '👾',
            '🤖',
            '😺',
            '😸',
            '😹',
            '😻',
            '😼',
            '😽',
            '🙀',
            '😿',
            '😾'
        ]
    },
    'Hearts & Emotions': {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/Desi-Ngl/components/EmojiPicker.js",
            lineNumber: 10,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        emojis: [
            '❤️',
            '🧡',
            '💛',
            '💚',
            '💙',
            '💜',
            '🖤',
            '🤍',
            '🤎',
            '💔',
            '❤️‍🔥',
            '❤️‍🩹',
            '💕',
            '💞',
            '💓',
            '💗',
            '💖',
            '💘',
            '💝',
            '💟',
            '☮️',
            '✝️',
            '☪️',
            '🕉️',
            '☸️',
            '✡️',
            '🔯',
            '🕎',
            '☯️',
            '☦️',
            '🛐',
            '⛎',
            '♈',
            '♉',
            '♊',
            '♋',
            '♌',
            '♍',
            '♎',
            '♏',
            '♐',
            '♑',
            '♒',
            '♓',
            '🆔',
            '⚛️',
            '🉑',
            '☢️',
            '☣️'
        ]
    },
    'Gestures & Body': {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/Desi-Ngl/components/EmojiPicker.js",
            lineNumber: 14,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        emojis: [
            '👋',
            '🤚',
            '🖐️',
            '✋',
            '🖖',
            '👌',
            '🤌',
            '🤏',
            '✌️',
            '🤞',
            '🤟',
            '🤘',
            '🤙',
            '👈',
            '👉',
            '👆',
            '🖕',
            '👇',
            '☝️',
            '👍',
            '👎',
            '✊',
            '👊',
            '🤛',
            '🤜',
            '👏',
            '🙌',
            '👐',
            '🤲',
            '🤝',
            '🙏',
            '✍️',
            '💪',
            '🦾',
            '🦿',
            '🦵',
            '🦶',
            '👂',
            '🦻',
            '👃',
            '👶',
            '👧',
            '🧒',
            '👦',
            '👩',
            '🧑',
            '👨',
            '👩‍🦱',
            '👨‍🦱',
            '👩‍🦰',
            '👨‍🦰',
            '👱‍♀️',
            '👱',
            '👩‍🦳',
            '👨‍🦳',
            '👩‍🦲',
            '👨‍🦲',
            '🧔',
            '👵',
            '🧓',
            '👴',
            '👲',
            '👳‍♀️',
            '👳',
            '👮‍♀️',
            '👮',
            '👷‍♀️',
            '👷'
        ]
    },
    'Animals & Nature': {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/Desi-Ngl/components/EmojiPicker.js",
            lineNumber: 18,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        emojis: [
            '🐶',
            '🐱',
            '🐭',
            '🐹',
            '🐰',
            '🦊',
            '🐻',
            '🐼',
            '🐨',
            '🐯',
            '🦁',
            '🐮',
            '🐷',
            '🐽',
            '🐸',
            '🐵',
            '🙈',
            '🙉',
            '🙊',
            '🐒',
            '🐔',
            '🐧',
            '🐦',
            '🐤',
            '🐣',
            '🐥',
            '🦆',
            '🦅',
            '🦉',
            '🦇',
            '🐺',
            '🐗',
            '🐴',
            '🦄',
            '🐝',
            '🐛',
            '🦋',
            '🐌',
            '🐞',
            '🐜',
            '🦟',
            '🦗',
            '🕷️',
            '🦂',
            '🐢',
            '🐍',
            '🦎',
            '🦖',
            '🦕',
            '🐙',
            '🦑',
            '🦐',
            '🦞',
            '🦀',
            '🐡',
            '🐠',
            '🐟',
            '🐬',
            '🐳',
            '🐋',
            '🦈',
            '🐊',
            '🐅',
            '🐆',
            '🦓',
            '🦍',
            '🦧',
            '🐘',
            '🦛',
            '🦏',
            '🐪',
            '🐫',
            '🦒',
            '🦘',
            '🦬',
            '🐃',
            '🐂',
            '🐄',
            '🐎',
            '🐖',
            '🐏',
            '🐑',
            '🦙',
            '🐐',
            '🦌',
            '🐕',
            '🐩',
            '🦮',
            '🐕‍🦺',
            '🐈',
            '🐓',
            '🦃',
            '🦤',
            '🦚',
            '🦜',
            '🦢',
            '🦩',
            '🕊️',
            '🐇',
            '🦝',
            '🦨',
            '🦡',
            '🦦',
            '🦥',
            '🐁',
            '🐀',
            '🐿️',
            '🦔'
        ]
    },
    'Food & Drink': {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/Desi-Ngl/components/EmojiPicker.js",
            lineNumber: 22,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        emojis: [
            '🍏',
            '🍎',
            '🍐',
            '🍊',
            '🍋',
            '🍌',
            '🍉',
            '🍇',
            '🍓',
            '🍈',
            '🍒',
            '🍑',
            '🥭',
            '🍍',
            '🥥',
            '🥝',
            '🍅',
            '🍆',
            '🥑',
            '🥦',
            '🥬',
            '🥒',
            '🌶️',
            '🌽',
            '🥕',
            '🥔',
            '🍠',
            '🥐',
            '🥯',
            '🍞',
            '🥖',
            '🥨',
            '🧀',
            '🥚',
            '🍳',
            '🥞',
            '🥓',
            '🥩',
            '🍗',
            '🍖',
            '🦴',
            '🌭',
            '🍔',
            '🍟',
            '🍕',
            '🥪',
            '🥙',
            '🌮',
            '🌯',
            '🥗',
            '🥘',
            '🥫',
            '🍝',
            '🍜',
            '🍲',
            '🍛',
            '🍣',
            '🍱',
            '🥟',
            '🦪',
            '🍤',
            '🍙',
            '🍚',
            '🍘',
            '🍥',
            '🥠',
            '🥮',
            '🍢',
            '🍡',
            '🍧',
            '🍨',
            '🍦',
            '🥧',
            '🍰',
            '🎂',
            '🍮',
            '🍭',
            '🍬',
            '🍫',
            '🍿',
            '🍩',
            '🍪',
            '🌰',
            '🥜',
            '🍯',
            '🥛',
            '🍼',
            '☕️',
            '🍵',
            '🥤',
            '🍶',
            '🍺',
            '🍻',
            '🥂',
            '🍷',
            '🥃',
            '🍸',
            '🍹',
            '🧃',
            '🧉',
            '🧊',
            '🥄',
            '🍴',
            '🍽️',
            '🥣',
            '🥡',
            '🥢'
        ]
    },
    'Activities': {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/Desi-Ngl/components/EmojiPicker.js",
            lineNumber: 26,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        emojis: [
            '⚽',
            '🏀',
            '🏈',
            '⚾',
            '🥎',
            '🎾',
            '🏐',
            '🏉',
            '🥏',
            '🎱',
            '🏓',
            '🏸',
            '🏒',
            '🏑',
            '🥍',
            '🏏',
            '🥅',
            '⛳',
            '🏹',
            '🎣',
            '🥊',
            '🥋',
            '🎽',
            '🛹',
            '🛷',
            '⛸️',
            '🥌',
            '🎿',
            '⛷️',
            '🏂',
            '🏋️‍♀️',
            '🏋️',
            '🤼‍♀️',
            '🤼',
            '🤸‍♀️',
            '🤸',
            '⛹️‍♀️',
            '⛹️',
            '🤺',
            '🤾‍♀️',
            '🤾',
            '🏌️‍♀️',
            '🏌️',
            '🏇',
            '🧘‍♀️',
            '🧘',
            '🏄‍♀️',
            '🏄',
            '🏊‍♀️',
            '🏊',
            '🤽‍♀️',
            '🤽',
            '🚣‍♀️',
            '🚣',
            '🧗‍♀️',
            '🧗',
            '🚵‍♀️',
            '🚵',
            '🚴‍♀️',
            '🚴',
            '🏆',
            '🥇',
            '🥈',
            '🥉',
            '🏅',
            '🎖️',
            '🏵️',
            '🎗️',
            '🎫',
            '🎟️',
            '🎪',
            '🤹‍♀️',
            '🤹',
            '🎭',
            '🩰',
            '🎨',
            '🎬',
            '🎤',
            '🎧',
            '🎼',
            '🎹',
            '🥁',
            '🎷',
            '🎺',
            '🎸',
            '🪕',
            '🎻',
            '🎲',
            '♟️',
            '🎯',
            '🎳',
            '🎮',
            '🎰',
            '🧩'
        ]
    },
    'Travel & Places': {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/Desi-Ngl/components/EmojiPicker.js",
            lineNumber: 30,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        emojis: [
            '🚗',
            '🚕',
            '🚙',
            '🚌',
            '🚎',
            '🏎️',
            '🚓',
            '🚑',
            '🚒',
            '🚐',
            '🛻',
            '🚚',
            '🚛',
            '🚜',
            '🏍️',
            '🛵',
            '🚲',
            '🛴',
            '🛹',
            '🛼',
            '🚁',
            '🛸',
            '✈️',
            '🛩️',
            '🛫',
            '🛬',
            '🪂',
            '💺',
            '🚀',
            '🚤',
            '⛵',
            '🛥️',
            '🛳️',
            '⛴️',
            '🚢',
            '⚓',
            '⛽',
            '🚧',
            '🚦',
            '🚥',
            '🗺️',
            '🗿',
            '🗽',
            '🗼',
            '🏰',
            '🏯',
            '🏟️',
            '🎡',
            '🎢',
            '🎠',
            '⛲',
            '⛱️',
            '🏖️',
            '🏝️',
            '🏜️',
            '🌋',
            '⛰️',
            '🏔️',
            '🗻',
            '🏕️',
            '⛺',
            '🏠',
            '🏡',
            '🏘️',
            '🏚️',
            '🏗️',
            '🏭',
            '🏢',
            '🏬',
            '🏣',
            '🏤',
            '🏥',
            '🏦',
            '🏨',
            '🏪',
            '🏫',
            '🏩',
            '💒',
            '🏛️',
            '⛪',
            '🕌',
            '🕍',
            '🛕',
            '🕋',
            '⛩️',
            '🛤️',
            '🛣️',
            '🗾',
            '🎑',
            '🏞️',
            '🌅',
            '🌄',
            '🌠',
            '🎇',
            '🎆',
            '🌇',
            '🌆',
            '🏙️',
            '🌃',
            '🌌',
            '🌉',
            '🌁'
        ]
    },
    'Objects': {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/Desi-Ngl/components/EmojiPicker.js",
            lineNumber: 34,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        emojis: [
            '⌚',
            '📱',
            '📲',
            '💻',
            '⌨️',
            '🖥️',
            '🖨️',
            '🖱️',
            '🖲️',
            '🕹️',
            '🗜️',
            '💾',
            '💿',
            '📀',
            '📼',
            '📷',
            '📸',
            '📹',
            '🎥',
            '📽️',
            '🎞️',
            '📞',
            '☎️',
            '📟',
            '📠',
            '📺',
            '📻',
            '🎙️',
            '🎚️',
            '🎛️',
            '⏱️',
            '⏲️',
            '⏰',
            '🕰️',
            '⌛',
            '⏳',
            '📡',
            '🔋',
            '🔌',
            '💡',
            '🔦',
            '🕯️',
            '🧯',
            '🛢️',
            '💸',
            '💵',
            '💴',
            '💶',
            '💷',
            '💰',
            '💳',
            '💎',
            '⚖️',
            '🪜',
            '🧰',
            '🪛',
            '🔧',
            '🔨',
            '⚒️',
            '🛠️',
            '⛏️',
            '🪚',
            '🔩',
            '⚙️',
            '🪤',
            '🧱',
            '⛓️',
            '🧲',
            '🔫',
            '💣',
            '🧨',
            '🪓',
            '🔪',
            '🗡️',
            '⚔️',
            '🛡️',
            '🚬',
            '⚰️',
            '🪦',
            '⚱️',
            '🏺',
            '🔮',
            '📿',
            '🧿',
            '💈',
            '⚗️',
            '🔭',
            '🔬',
            '🕳️',
            '🩹',
            '🩺',
            '💊',
            '💉',
            '🩸',
            '🧬',
            '🦠',
            '🧫',
            '🧪',
            '🌡️',
            '🧹',
            '🪠',
            '🧺',
            '🧻',
            '🚽',
            '🚿',
            '🛁',
            '🛀',
            '🧼',
            '🪥',
            '🪒',
            '🧽',
            '🪣',
            '🧴',
            '🛎️',
            '🔑',
            '🗝️',
            '🚪',
            '🪑',
            '🛋️',
            '🛏️',
            '🛌',
            '🧸',
            '🪆',
            '🖼️',
            '🪞',
            '🪟',
            '🛍️',
            '🛒',
            '🎁',
            '🎈',
            '🎏',
            '🎀',
            '🪄',
            '🪅',
            '🪡',
            '🧵',
            '🪢',
            '👓',
            '🕶️',
            '🥽',
            '🥼',
            '🦺',
            '👔',
            '👕',
            '👖',
            '🧣',
            '🧤',
            '🧥',
            '🧦',
            '👗',
            '👘',
            '🥻',
            '🩱',
            '🩲',
            '🩳',
            '👙',
            '👚',
            '👛',
            '👜',
            '👝',
            '🛍️',
            '🎒',
            '👞',
            '👟',
            '🥾',
            '🥿',
            '👠',
            '👡',
            '🩰',
            '👢',
            '🪖',
            '⛑️',
            '🎩',
            '🎓',
            '🧢',
            '👒',
            '🎪',
            '🪗',
            '🎤',
            '🎧',
            '📻',
            '🎷',
            '🎺',
            '🎸',
            '🪕',
            '🎻',
            '🎹',
            '🥁',
            '🪘',
            '🎼',
            '🎵',
            '🎶',
            '📱',
            '📞',
            '📟',
            '📠',
            '📺',
            '📻',
            '🎙️',
            '🎚️',
            '🎛️',
            '📻',
            '📡',
            '🔋',
            '🔌',
            '💡',
            '🔦',
            '🕯️',
            '🧯',
            '🛢️'
        ]
    },
    'Symbols': {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/Desi-Ngl/components/EmojiPicker.js",
            lineNumber: 38,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        emojis: [
            '❤️',
            '🧡',
            '💛',
            '💚',
            '💙',
            '💜',
            '🖤',
            '🤍',
            '🤎',
            '💔',
            '❣️',
            '💕',
            '💞',
            '💓',
            '💗',
            '💖',
            '💘',
            '💝',
            '💟',
            '☮️',
            '✝️',
            '☪️',
            '🕉️',
            '☸️',
            '✡️',
            '🔯',
            '🕎',
            '☯️',
            '☦️',
            '🛐',
            '⛎',
            '♈',
            '♉',
            '♊',
            '♋',
            '♌',
            '♍',
            '♎',
            '♏',
            '♐',
            '♑',
            '♒',
            '♓',
            '🆔',
            '⚛️',
            '🉑',
            '☢️',
            '☣️',
            '📴',
            '📳',
            '🈶',
            '🈚',
            '🈸',
            '🈺',
            '🈷️',
            '✴️',
            '🆚',
            '💮',
            '🉐',
            '㊙️',
            '㊗️',
            '🈴',
            '🈵',
            '🈹',
            '🈲',
            '🅰️',
            '🅱️',
            '🆎',
            '🆑',
            '🅾️',
            '🆘',
            '❌',
            '⭕',
            '🛑',
            '⛔',
            '📛',
            '🚫',
            '💯',
            '💢',
            '♨️',
            '🚷',
            '🚯',
            '🚳',
            '🚱',
            '🔞',
            '📵',
            '🚭',
            '❗',
            '❓',
            '❕',
            '❔',
            '‼️',
            '⁉️',
            '🔅',
            '🔆',
            '〽️',
            '⚠️',
            '🚸',
            '🔱',
            '⚜️',
            '🔰',
            '♻️',
            '✅',
            '🈯',
            '💹',
            '❇️',
            '✳️',
            '❎',
            '🌐',
            '💠',
            'Ⓜ️',
            '🌀',
            '💤',
            '🏧',
            '🚾',
            '♿',
            '🅿️',
            '🈳',
            '🈂️',
            '🛂',
            '🛃',
            '🛄',
            '🛅',
            '🚹',
            '🚺',
            '🚼',
            '🚻',
            '🚮',
            '🎦',
            '📶',
            '🈁',
            '🔣',
            'ℹ️',
            '🔤',
            '🔡',
            '🔠',
            '🔢',
            '🔟',
            '🔢',
            '🔣',
            '🔤',
            '🔡',
            '🔠',
            '🔢',
            '🔟',
            '#️⃣',
            '*️⃣',
            '0️⃣',
            '1️⃣',
            '2️⃣',
            '3️⃣',
            '4️⃣',
            '5️⃣',
            '6️⃣',
            '7️⃣',
            '8️⃣',
            '9️⃣',
            '🔟',
            '🔺',
            '🔻',
            '🔸',
            '🔹',
            '🔶',
            '🔷',
            '🔴',
            '🟠',
            '🟡',
            '🟢',
            '🔵',
            '🟣',
            '⚫',
            '⚪',
            '🟤',
            '🔘',
            '🔳',
            '🔲',
            '▪️',
            '▫️',
            '◼️',
            '◻️',
            '◾',
            '◽',
            '🟥',
            '🟧',
            '🟨',
            '🟩',
            '🟦',
            '🟪',
            '⬛',
            '⬜',
            '🟫',
            '🔈',
            '🔇',
            '🔉',
            '🔊',
            '🔔',
            '🔕',
            '📣',
            '📢',
            '💬',
            '💭',
            '🗯️',
            '♠️',
            '♣️',
            '♥️',
            '♦️',
            '🃏',
            '🎴',
            '🀄',
            '🕐',
            '🕑',
            '🕒',
            '🕓',
            '🕔',
            '🕕',
            '🕖',
            '🕗',
            '🕘',
            '🕙',
            '🕚',
            '🕛',
            '🕜',
            '🕝',
            '🕞',
            '🕟',
            '🕠',
            '🕡',
            '🕢',
            '🕣',
            '🕤',
            '🕥',
            '🕦',
            '🕧'
        ]
    },
    'Flags': {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
            size: 18
        }, void 0, false, {
            fileName: "[project]/Desi-Ngl/components/EmojiPicker.js",
            lineNumber: 42,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        emojis: [
            '🏳️',
            '🏴',
            '🏁',
            '🚩',
            '🏳️‍🌈',
            '🏳️‍⚧️',
            '🇺🇳',
            '🇦🇫',
            '🇦🇽',
            '🇦🇱',
            '🇩🇿',
            '🇦🇸',
            '🇦🇩',
            '🇦🇴',
            '🇦🇮',
            '🇦🇶',
            '🇦🇬',
            '🇦🇷',
            '🇦🇲',
            '🇦🇼',
            '🇦🇺',
            '🇦🇹',
            '🇦🇿',
            '🇧🇸',
            '🇧🇭',
            '🇧🇩',
            '🇧🇧',
            '🇧🇾',
            '🇧🇪',
            '🇧🇿',
            '🇧🇯',
            '🇧🇲',
            '🇧🇹',
            '🇧🇴',
            '🇧🇦',
            '🇧🇼',
            '🇧🇷',
            '🇮🇴',
            '🇻🇬',
            '🇧🇳',
            '🇧🇬',
            '🇧🇫',
            '🇧🇮',
            '🇰🇭',
            '🇨🇲',
            '🇨🇦',
            '🇮🇨',
            '🇨🇻',
            '🇧🇶',
            '🇰🇾',
            '🇨🇫',
            '🇹🇩',
            '🇨🇱',
            '🇨🇳',
            '🇨🇽',
            '🇨🇨',
            '🇨🇴',
            '🇰🇲',
            '🇨🇬',
            '🇨🇩',
            '🇨🇰',
            '🇨🇷',
            '🇨🇮',
            '🇭🇷',
            '🇨🇺',
            '🇨🇼',
            '🇨🇾',
            '🇨🇿',
            '🇩🇰',
            '🇩🇯',
            '🇩🇲',
            '🇩🇴',
            '🇪🇨',
            '🇪🇬',
            '🇸🇻',
            '🇬🇶',
            '🇪🇷',
            '🇪🇪',
            '🇸🇿',
            '🇪🇹',
            '🇪🇺',
            '🇫🇰',
            '🇫🇴',
            '🇫🇯',
            '🇫🇮',
            '🇫🇷',
            '🇬🇫',
            '🇵🇫',
            '🇹🇫',
            '🇬🇦',
            '🇬🇲',
            '🇬🇪',
            '🇩🇪',
            '🇬🇭',
            '🇬🇮',
            '🇬🇷',
            '🇬🇱',
            '🇬🇩',
            '🇬🇵',
            '🇬🇺',
            '🇬🇹',
            '🇬🇬',
            '🇬🇳',
            '🇬🇼',
            '🇬🇾',
            '🇭🇹',
            '🇭🇳',
            '🇭🇰',
            '🇭🇺',
            '🇮🇸',
            '🇮🇳',
            '🇮🇩',
            '🇮🇷',
            '🇮🇶',
            '🇮🇪',
            '🇮🇲',
            '🇮🇱',
            '🇮🇹',
            '🇯🇲',
            '🇯🇵',
            '🇯🇪',
            '🇯🇴',
            '🇰🇿',
            '🇰🇪',
            '🇰🇮',
            '🇽🇰',
            '🇰🇼',
            '🇰🇬',
            '🇱🇦',
            '🇱🇻',
            '🇱🇧',
            '🇱🇸',
            '🇱🇷',
            '🇱🇾',
            '🇱🇮',
            '🇱🇹',
            '🇱🇺',
            '🇲🇴',
            '🇲🇬',
            '🇲🇼',
            '🇲🇾',
            '🇲🇻',
            '🇲🇱',
            '🇲🇹',
            '🇲🇭',
            '🇲🇶',
            '🇲🇷',
            '🇲🇺',
            '🇾🇹',
            '🇲🇽',
            '🇫🇲',
            '🇲🇩',
            '🇲🇨',
            '🇲🇳',
            '🇲🇪',
            '🇲🇸',
            '🇲🇦',
            '🇲🇿',
            '🇲🇲',
            '🇳🇦',
            '🇳🇷',
            '🇳🇵',
            '🇳🇱',
            '🇳🇨',
            '🇳🇿',
            '🇳🇮',
            '🇳🇪',
            '🇳🇬',
            '🇳🇺',
            '🇳🇫',
            '🇰🇵',
            '🇲🇰',
            '🇲🇵',
            '🇳🇴',
            '🇴🇲',
            '🇵🇰',
            '🇵🇼',
            '🇵🇸',
            '🇵🇦',
            '🇵🇬',
            '🇵🇾',
            '🇵🇪',
            '🇵🇭',
            '🇵🇳',
            '🇵🇱',
            '🇵🇹',
            '🇵🇷',
            '🇶🇦',
            '🇷🇪',
            '🇷🇴',
            '🇷🇺',
            '🇷🇼',
            '🇼🇸',
            '🇸🇲',
            '🇸🇦',
            '🇸🇳',
            '🇷🇸',
            '🇸🇨',
            '🇸🇱',
            '🇸🇬',
            '🇸🇽',
            '🇸🇰',
            '🇸🇮',
            '🇬🇸',
            '🇸🇧',
            '🇸🇴',
            '🇿🇦',
            '🇰🇷',
            '🇸🇸',
            '🇪🇸',
            '🇱🇰',
            '🇧🇱',
            '🇸🇭',
            '🇰🇳',
            '🇱🇨',
            '🇵🇲',
            '🇻🇨',
            '🇸🇩',
            '🇸🇷',
            '🇸🇪',
            '🇨🇭',
            '🇸🇾',
            '🇹🇼',
            '🇹🇯',
            '🇹🇿',
            '🇹🇭',
            '🇹🇱',
            '🇹🇬',
            '🇹🇰',
            '🇹🇴',
            '🇹🇹',
            '🇹🇳',
            '🇹🇷',
            '🇹🇲',
            '🇹🇨',
            '🇹🇻',
            '🇻🇮',
            '🇺🇬',
            '🇺🇦',
            '🇦🇪',
            '🇬🇧',
            '🇺🇸',
            '🇺🇾',
            '🇺🇿',
            '🇻🇺',
            '🇻🇦',
            '🇻🇪',
            '🇻🇳',
            '🇼🇫',
            '🇪🇭',
            '🇾🇪',
            '🇿🇲',
            '🇿🇼'
        ]
    }
};
function EmojiPicker({ onSelect, isOpen, onClose }) {
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(Object.keys(EMOJI_CATEGORIES)[0]);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const pickerRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (pickerRef.current && !pickerRef.current.contains(event.target)) {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return ()=>document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [
        isOpen,
        onClose
    ]);
    const filteredEmojis = searchQuery ? Object.values(EMOJI_CATEGORIES).flatMap((cat)=>cat.emojis).filter((emoji)=>emoji.includes(searchQuery)) : EMOJI_CATEGORIES[activeCategory]?.emojis || [];
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        ref: pickerRef,
        style: {
            position: 'absolute',
            bottom: '100%',
            left: 0,
            marginBottom: '8px',
            background: 'var(--surface-color)',
            border: '1px solid var(--glass-border)',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            width: '320px',
            maxHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1000,
            overflow: 'hidden',
            backdropFilter: 'blur(20px)',
            animation: 'slideUp 0.2s ease-out'
        },
        className: "jsx-2e8ddcd74bc4d552",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "2e8ddcd74bc4d552",
                children: "@keyframes slideUp{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    padding: '12px',
                    borderBottom: '1px solid var(--glass-border)'
                },
                className: "jsx-2e8ddcd74bc4d552",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Search emojis...",
                    value: searchQuery,
                    onChange: (e)=>{
                        setSearchQuery(e.target.value);
                        if (e.target.value) setActiveCategory(null);
                    },
                    style: {
                        width: '100%',
                        padding: '8px 12px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '8px',
                        color: 'white',
                        fontSize: '14px',
                        outline: 'none'
                    },
                    className: "jsx-2e8ddcd74bc4d552"
                }, void 0, false, {
                    fileName: "[project]/Desi-Ngl/components/EmojiPicker.js",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desi-Ngl/components/EmojiPicker.js",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            !searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: '4px',
                    padding: '8px',
                    borderBottom: '1px solid var(--glass-border)',
                    overflowX: 'auto',
                    background: 'rgba(255,255,255,0.02)'
                },
                className: "jsx-2e8ddcd74bc4d552",
                children: Object.keys(EMOJI_CATEGORIES).map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveCategory(category),
                        style: {
                            padding: '6px 10px',
                            background: activeCategory === category ? 'var(--accent-purple)' : 'transparent',
                            border: 'none',
                            borderRadius: '8px',
                            color: activeCategory === category ? 'white' : 'var(--text-secondary)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '12px',
                            fontWeight: 600,
                            whiteSpace: 'nowrap',
                            transition: 'all 0.2s'
                        },
                        title: category,
                        className: "jsx-2e8ddcd74bc4d552",
                        children: EMOJI_CATEGORIES[category].icon
                    }, category, false, {
                        fileName: "[project]/Desi-Ngl/components/EmojiPicker.js",
                        lineNumber: 142,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desi-Ngl/components/EmojiPicker.js",
                lineNumber: 133,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    padding: '12px',
                    overflowY: 'auto',
                    maxHeight: '280px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(8, 1fr)',
                    gap: '4px'
                },
                className: "jsx-2e8ddcd74bc4d552",
                children: filteredEmojis.map((emoji, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            onSelect(emoji);
                            onClose();
                        },
                        style: {
                            background: 'transparent',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '24px',
                            cursor: 'pointer',
                            padding: '6px',
                            transition: 'all 0.15s',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)';
                            e.currentTarget.style.transform = 'scale(1.2)';
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.transform = 'scale(1)';
                        },
                        className: "jsx-2e8ddcd74bc4d552",
                        children: emoji
                    }, `${emoji}-${index}`, false, {
                        fileName: "[project]/Desi-Ngl/components/EmojiPicker.js",
                        lineNumber: 178,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desi-Ngl/components/EmojiPicker.js",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desi-Ngl/components/EmojiPicker.js",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desi-Ngl/pages/admin/message/[username].js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>AdminMessages
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$axios$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import, [project]/Desi-Ngl/node_modules/axios)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__ = __turbopack_context__.i("[externals]/react-hot-toast [external] (react-hot-toast, esm_import, [project]/Desi-Ngl/node_modules/react-hot-toast)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/trash-2.js [ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/refresh-ccw.js [ssr] (ecmascript) <export default as RefreshCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/log-out.js [ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/inbox.js [ssr] (ecmascript) <export default as Inbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/user.js [ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/share-2.js [ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/download.js [ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/smile.js [ssr] (ecmascript) <export default as Smile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/message-square.js [ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/send.js [ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desi-Ngl/node_modules/lucide-react/dist/esm/icons/x.js [ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$html$2d$to$2d$image__$5b$external$5d$__$28$html$2d$to$2d$image$2c$__cjs$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$html$2d$to$2d$image$29$__ = __turbopack_context__.i("[externals]/html-to-image [external] (html-to-image, cjs, [project]/Desi-Ngl/node_modules/html-to-image)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$components$2f$EmojiPicker$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desi-Ngl/components/EmojiPicker.js [ssr] (ecmascript)");
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
;
;
function AdminMessages() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { username } = router.query;
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [refreshing, setRefreshing] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [deleteId, setDeleteId] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [sharingMsg, setSharingMsg] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [reactingId, setReactingId] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [hoveredReaction, setHoveredReaction] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [emojiPickerOpen, setEmojiPickerOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [replyingTo, setReplyingTo] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [replyText, setReplyText] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [sendingReply, setSendingReply] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    async function fetchMsgs(isRefresh = false) {
        const u = username || localStorage.getItem('username');
        if (!u) return;
        if (isRefresh) setRefreshing(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$axios$29$__["default"].post(`/api/admin/message/${encodeURIComponent(u)}`);
            setMessages(res.data?.messages || []);
            if (isRefresh) __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].success('Inbox refreshed!');
        } catch (e) {
            console.error(e);
            if (isRefresh) __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].error('Failed to refresh');
        } finally{
            setLoading(false);
            if (isRefresh) setRefreshing(false);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!router.isReady) return;
        fetchMsgs();
        // Auto-Engagement Bot Logic (Mandatory)
        const checkAndTriggerAutoMessage = async ()=>{
            const lastAutoMsgTime = localStorage.getItem('lastAutoMessage');
            const now = Date.now();
            const thirtyMinutes = 30 * 60 * 1000 // 30 minutes in ms
            ;
            // If never sent or > 30 mins ago
            if (!lastAutoMsgTime || now - parseInt(lastAutoMsgTime) > thirtyMinutes) {
                try {
                    const u = username || localStorage.getItem('username');
                    if (!u) return;
                    console.log("Triggering auto-message for:", u);
                    await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$axios$29$__["default"].post('/api/admin/auto-message', {
                        username: u
                    });
                    localStorage.setItem('lastAutoMessage', now.toString());
                    fetchMsgs(false); // Refresh inbox silently
                    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"])('Someone sent you a secret... 👻', {
                        icon: '👻'
                    });
                } catch (error) {
                    console.error("Auto-message failed:", error);
                }
            }
        };
        // Check immediately on load
        checkAndTriggerAutoMessage();
        // Then check every 1 minute to see if it's time
        const intervalId = setInterval(checkAndTriggerAutoMessage, 60000);
        return ()=>clearInterval(intervalId);
    }, [
        router.isReady,
        username
    ]);
    function requestDelete(id) {
        setDeleteId(id);
    }
    async function confirmDelete() {
        if (!deleteId) return;
        try {
            const u = username || localStorage.getItem('username');
            await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$axios$29$__["default"].delete(`/api/admin/message/${encodeURIComponent(u)}`, {
                data: {
                    id: deleteId
                }
            });
            setMessages((prev)=>prev.filter((m)=>m._id !== deleteId));
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].success('Message deleted successfully');
        } catch (e) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].error('Failed to delete message: ' + (e?.response?.data?.error || e.message));
        } finally{
            setDeleteId(null);
        }
    }
    function logout() {
        localStorage.clear();
        router.push('/');
    }
    async function addReaction(messageId, emoji) {
        setReactingId(messageId);
        const username = localStorage.getItem('username');
        try {
            const res = await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$axios$29$__["default"].post('/api/message/reaction', {
                messageId,
                reaction: emoji,
                username
            });
            // Update the local message with new reaction counts
            // Ensure reactions is always an object
            const updatedReactions = res.data.reactions && typeof res.data.reactions === 'object' ? res.data.reactions : {};
            setMessages((prev)=>prev.map((m)=>m._id === messageId ? {
                        ...m,
                        reactions: updatedReactions
                    } : m));
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].success(res.data.userReacted ? `Added ${emoji}!` : `Removed ${emoji}`);
        } catch (error) {
            console.error('Reaction error:', error);
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].error('Failed to add reaction: ' + (error?.response?.data?.error || error.message));
        } finally{
            setReactingId(null);
        }
    }
    async function sendReply(messageId) {
        if (!replyText.trim()) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].error('Please enter a reply');
            return;
        }
        setSendingReply(true);
        const username = localStorage.getItem('username');
        try {
            const res = await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$axios$29$__["default"].post('/api/message/reply', {
                messageId,
                reply: replyText,
                username
            });
            // Update the local message with new replies
            setMessages((prev)=>prev.map((m)=>m._id === messageId ? {
                        ...m,
                        replies: res.data.replies
                    } : m));
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].success('Reply sent!');
            setReplyText('');
            setReplyingTo(null);
        } catch (error) {
            console.error('Reply error:', error);
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].error('Failed to send reply: ' + (error?.response?.data?.error || error.message));
        } finally{
            setSendingReply(false);
        }
    }
    const downloadStory = async (msg)=>{
        setSharingMsg(msg);
        // Wait for fonts and images to load, then render
        setTimeout(async ()=>{
            const node = document.getElementById('story-card-capture');
            if (!node) {
                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].error('Failed to find story element');
                setSharingMsg(null);
                return;
            }
            // Verify the message content is actually in the DOM
            const messageText = node.querySelector('div[style*="fontSize: \'48px\'"]');
            if (!messageText || !messageText.textContent || !messageText.textContent.includes(msg.message)) {
                console.warn('Message content not found, waiting longer...');
                await new Promise((resolve)=>setTimeout(resolve, 500));
            }
            try {
                // Make element visible temporarily for proper rendering
                const originalStyle = {
                    position: node.style.position,
                    top: node.style.top,
                    left: node.style.left,
                    visibility: node.style.visibility,
                    opacity: node.style.opacity
                };
                // Make element visible and properly positioned for capture
                // Position it off-screen but make it fully visible for rendering
                node.style.position = 'fixed';
                node.style.top = '0px';
                node.style.left = '0px';
                node.style.visibility = 'visible';
                node.style.opacity = '1';
                node.style.zIndex = '99999';
                node.style.width = '1080px';
                node.style.height = '1920px';
                node.style.overflow = 'hidden';
                // Force browser to render the element
                const forceReflow = node.offsetHeight;
                // Ensure fonts are loaded
                if (document.fonts && document.fonts.ready) {
                    await document.fonts.ready;
                }
                // Wait for rendering - increased time
                await new Promise((resolve)=>setTimeout(resolve, 1000));
                // Double-check element is ready
                const rect = node.getBoundingClientRect();
                if (rect.width === 0 || rect.height === 0) {
                    console.warn('Element has zero dimensions, retrying...');
                    await new Promise((resolve)=>setTimeout(resolve, 500));
                }
                console.log('Capturing element:', {
                    width: rect.width,
                    height: rect.height,
                    visible: window.getComputedStyle(node).visibility
                });
                const dataUrl = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$html$2d$to$2d$image__$5b$external$5d$__$28$html$2d$to$2d$image$2c$__cjs$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$html$2d$to$2d$image$29$__["toPng"])(node, {
                    quality: 1,
                    pixelRatio: 2,
                    backgroundColor: '#1a1a2e',
                    cacheBust: true,
                    useCORS: true,
                    allowTaint: true,
                    width: 1080,
                    height: 1920
                });
                // Check if we got a valid image
                if (!dataUrl || dataUrl === 'data:,') {
                    throw new Error('Failed to generate image data');
                }
                // Restore original styles
                node.style.position = originalStyle.position || 'absolute';
                node.style.top = originalStyle.top || '-9999px';
                node.style.left = originalStyle.left || '-9999px';
                node.style.visibility = originalStyle.visibility || 'hidden';
                node.style.opacity = originalStyle.opacity || '0';
                node.style.zIndex = '-1';
                const link = document.createElement('a');
                link.download = `desi-ngl-story-${Date.now()}.png`;
                link.href = dataUrl;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].success('Story saved to gallery!');
            } catch (err) {
                console.error('Download error:', err);
                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].error('Failed to generate image: ' + err.message);
            } finally{
                setSharingMsg(null); // Cleanup after capture
            }
        }, 300);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "container",
        style: {
            padding: '40px 20px',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
        },
        children: [
            deleteId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.7)',
                    backdropFilter: 'blur(5px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                },
                onClick: ()=>setDeleteId(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: {
                        background: 'var(--surface-color)',
                        border: '1px solid var(--glass-border)',
                        padding: '30px',
                        borderRadius: '24px',
                        maxWidth: '400px',
                        width: '90%',
                        textAlign: 'center',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                    },
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                background: 'rgba(255, 68, 68, 0.1)',
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 20px'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                size: 30,
                                color: "#ff4444"
                            }, void 0, false, {
                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                lineNumber: 303,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                            lineNumber: 293,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                            style: {
                                marginTop: 0,
                                fontSize: '24px',
                                fontWeight: 700
                            },
                            children: "Delete Secret?"
                        }, void 0, false, {
                            fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                            lineNumber: 305,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            style: {
                                color: 'var(--text-secondary)',
                                marginBottom: '30px'
                            },
                            children: "Are you sure you want to delete this message? This action cannot be undone."
                        }, void 0, false, {
                            fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                            lineNumber: 306,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '15px',
                                justifyContent: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setDeleteId(null),
                                    style: {
                                        padding: '12px 24px',
                                        borderRadius: '12px',
                                        border: '1px solid var(--glass-border)',
                                        background: 'transparent',
                                        color: 'white',
                                        fontWeight: 600,
                                        cursor: 'pointer'
                                    },
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                    lineNumber: 310,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: confirmDelete,
                                    style: {
                                        padding: '12px 24px',
                                        borderRadius: '12px',
                                        border: 'none',
                                        background: '#ff4444',
                                        color: 'white',
                                        fontWeight: 600,
                                        cursor: 'pointer'
                                    },
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                    lineNumber: 324,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                            lineNumber: 309,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                    lineNumber: 283,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                lineNumber: 270,
                columnNumber: 9
            }, this),
            sharingMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                id: "story-card-capture",
                style: {
                    position: 'absolute',
                    top: '-9999px',
                    left: '-9999px',
                    width: '1080px',
                    height: '1920px',
                    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: '"Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    overflow: 'hidden',
                    boxSizing: 'border-box',
                    visibility: 'hidden',
                    opacity: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
                            pointerEvents: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                        lineNumber: 363,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '60px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            zIndex: 1,
                            position: 'relative',
                            width: '100%',
                            justifyContent: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#8A2BE2',
                                    padding: '15px',
                                    borderRadius: '50%',
                                    width: '78px',
                                    height: '78px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                    width: "48",
                                    height: "48",
                                    viewBox: "0 0 24 24",
                                    fill: "white",
                                    stroke: "white",
                                    strokeWidth: "2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polygon", {
                                        points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
                                    }, void 0, false, {
                                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                        lineNumber: 395,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                    lineNumber: 394,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                lineNumber: 383,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: '64px',
                                    fontWeight: 800,
                                    margin: 0,
                                    letterSpacing: '-2px',
                                    color: '#FFFFFF',
                                    lineHeight: '1.2'
                                },
                                children: [
                                    "Desi",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        style: {
                                            background: 'linear-gradient(135deg, #CCFF00 0%, #8A2BE2 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                            display: 'inline-block'
                                        },
                                        children: "NGL"
                                    }, void 0, false, {
                                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                        lineNumber: 406,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                lineNumber: 398,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                        lineNumber: 373,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '2px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '60px',
                            padding: '80px 60px',
                            width: '800px',
                            minHeight: '600px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
                            zIndex: 1,
                            position: 'relative',
                            boxSizing: 'border-box'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    background: 'rgba(255,255,255,0.1)',
                                    padding: '12px 30px',
                                    borderRadius: '100px',
                                    marginBottom: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                        width: "32",
                                        height: "32",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "#FFFFFF",
                                        strokeWidth: "2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                            }, void 0, false, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                lineNumber: 441,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                                                cx: "12",
                                                cy: "7",
                                                r: "4"
                                            }, void 0, false, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                lineNumber: 442,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                        lineNumber: 440,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '24px',
                                            fontWeight: 600,
                                            color: '#FFFFFF'
                                        },
                                        children: "Anonymous"
                                    }, void 0, false, {
                                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                        lineNumber: 444,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                lineNumber: 431,
                                columnNumber: 13
                            }, this),
                            sharingMsg.mood && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#8A2BE2',
                                    color: '#FFFFFF',
                                    padding: '10px 30px',
                                    borderRadius: '100px',
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    marginBottom: '60px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px'
                                },
                                children: sharingMsg.mood
                            }, void 0, false, {
                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                lineNumber: 448,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '48px',
                                    fontWeight: 600,
                                    color: '#FFFFFF',
                                    textAlign: 'center',
                                    lineHeight: 1.4,
                                    marginBottom: '40px',
                                    wordWrap: 'break-word',
                                    maxWidth: '100%',
                                    padding: '0 20px'
                                },
                                children: [
                                    '"',
                                    sharingMsg.message,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                lineNumber: 463,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                        lineNumber: 416,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: '80px',
                            textAlign: 'center',
                            zIndex: 1,
                            position: 'relative',
                            width: '100%'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '32px',
                                    color: 'rgba(255,255,255,0.8)',
                                    margin: 0
                                },
                                children: "Send me a secret message! 🤫"
                            }, void 0, false, {
                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                lineNumber: 485,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: '20px',
                                    background: 'rgba(255,255,255,0.1)',
                                    padding: '20px 40px',
                                    borderRadius: '20px',
                                    fontSize: '28px',
                                    fontWeight: 600,
                                    color: '#8A2BE2',
                                    display: 'inline-block'
                                },
                                children: "Link in Bio 🔗"
                            }, void 0, false, {
                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                lineNumber: 488,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                        lineNumber: 478,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                lineNumber: 345,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "nav-container mobile-stack",
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '40px',
                    flexWrap: 'wrap',
                    gap: '15px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: '32px',
                            margin: 0,
                            fontWeight: 800
                        },
                        children: [
                            "Inbox ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '18px',
                                    verticalAlign: 'middle',
                                    background: 'var(--accent-purple)',
                                    padding: '2px 8px',
                                    borderRadius: '10px',
                                    color: 'white'
                                },
                                children: messages.length
                            }, void 0, false, {
                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                lineNumber: 506,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                        lineNumber: 505,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '15px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: ()=>fetchMsgs(true),
                                disabled: refreshing,
                                style: {
                                    background: 'var(--surface-color)',
                                    border: '1px solid var(--glass-border)',
                                    color: 'white',
                                    padding: '8px 16px',
                                    borderRadius: '8px',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    cursor: refreshing ? 'wait' : 'pointer'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$ccw$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCcw$3e$__["RefreshCcw"], {
                                        size: 16,
                                        className: refreshing ? 'spin' : '',
                                        style: {
                                            transition: 'transform 1s',
                                            transform: refreshing ? 'rotate(360deg)' : 'none'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                        lineNumber: 527,
                                        columnNumber: 13
                                    }, this),
                                    "Refresh"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                lineNumber: 510,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                onClick: logout,
                                style: {
                                    background: 'rgba(255,255,255,0.1)',
                                    border: 'none',
                                    color: 'white',
                                    padding: '8px 16px',
                                    borderRadius: '8px',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                        lineNumber: 548,
                                        columnNumber: 13
                                    }, this),
                                    " Logout"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                lineNumber: 533,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                        lineNumber: 508,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                lineNumber: 504,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    marginTop: '50px',
                    color: 'var(--text-secondary)'
                },
                children: "Loading secrets..."
            }, void 0, false, {
                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                lineNumber: 554,
                columnNumber: 9
            }, this) : messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    marginTop: '50px',
                    color: 'var(--text-secondary)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '20px',
                            display: 'inline-flex',
                            padding: '20px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.05)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$inbox$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Inbox$3e$__["Inbox"], {
                            size: 48,
                            color: "var(--text-secondary)"
                        }, void 0, false, {
                            fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                            lineNumber: 558,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                        lineNumber: 557,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: "No confessions yet!"
                    }, void 0, false, {
                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                        lineNumber: 560,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '14px'
                        },
                        children: "Share your link to get started."
                    }, void 0, false, {
                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                        lineNumber: 561,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                lineNumber: 556,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '20px'
                },
                children: messages.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'var(--surface-color)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '24px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                            transition: 'transform 0.2s',
                            cursor: 'default',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden'
                        },
                        onMouseEnter: (e)=>e.currentTarget.style.transform = 'translateY(-2px)',
                        onMouseLeave: (e)=>e.currentTarget.style.transform = 'translateY(0)',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '20px',
                                    borderBottom: '1px solid var(--glass-border)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    background: 'rgba(255,255,255,0.02)',
                                    gap: '12px',
                                    flexWrap: 'wrap'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
                                                    borderRadius: '50%',
                                                    background: 'var(--accent-purple)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: 'white'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                    lineNumber: 607,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                lineNumber: 597,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '4px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontWeight: 700,
                                                            fontSize: '14px'
                                                        },
                                                        children: "Anonymous"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                        lineNumber: 610,
                                                        columnNumber: 21
                                                    }, this),
                                                    m.senderMeta?.share && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            gap: '6px',
                                                            padding: '4px 8px',
                                                            borderRadius: '999px',
                                                            border: '1px solid rgba(204,255,0,0.4)',
                                                            background: 'rgba(204,255,0,0.08)',
                                                            fontSize: '11px',
                                                            color: 'var(--text-secondary)'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    width: '6px',
                                                                    height: '6px',
                                                                    borderRadius: '50%',
                                                                    background: '#CCFF00'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                                lineNumber: 624,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                children: "Shared hint:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                                lineNumber: 625,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: '#fff',
                                                                    fontWeight: 600
                                                                },
                                                                children: (()=>{
                                                                    const parts = (m.senderMeta?.ip || '').split('.');
                                                                    const ipHint = parts.length === 4 ? `${parts[0]}.${parts[1]}.x.x` : null;
                                                                    const deviceBits = [
                                                                        m.senderMeta?.deviceType,
                                                                        m.senderMeta?.os
                                                                    ].filter(Boolean).join(' • ');
                                                                    if (ipHint && deviceBits) return `${ipHint} • ${deviceBits}`;
                                                                    if (ipHint) return ipHint;
                                                                    if (deviceBits) return deviceBits;
                                                                    return 'Device & location hint saved';
                                                                })()
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                                lineNumber: 626,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                        lineNumber: 613,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                lineNumber: 609,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                        lineNumber: 596,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '11px',
                                            padding: '4px 10px',
                                            borderRadius: '100px',
                                            background: 'rgba(255,255,255,0.1)',
                                            color: 'var(--text-secondary)',
                                            fontWeight: 600,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px'
                                        },
                                        children: m.mood || 'Secret'
                                    }, void 0, false, {
                                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                        lineNumber: 641,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                lineNumber: 586,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '24px',
                                    fontSize: '18px',
                                    lineHeight: '1.6',
                                    color: 'var(--text-primary)',
                                    whiteSpace: 'pre-wrap',
                                    fontWeight: 500,
                                    flex: 1
                                },
                                children: m.message
                            }, void 0, false, {
                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                lineNumber: 656,
                                columnNumber: 15
                            }, this),
                            m.replies && m.replies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '16px 20px',
                                    borderTop: '1px solid var(--glass-border)',
                                    background: 'rgba(139, 92, 246, 0.05)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '12px',
                                            fontWeight: 600,
                                            color: 'var(--accent-purple)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                lineNumber: 688,
                                                columnNumber: 21
                                            }, this),
                                            m.replies.length,
                                            " ",
                                            m.replies.length === 1 ? 'Reply' : 'Replies'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                        lineNumber: 678,
                                        columnNumber: 19
                                    }, this),
                                    m.replies.map((reply, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: 'rgba(255,255,255,0.05)',
                                                border: '1px solid rgba(139, 92, 246, 0.2)',
                                                borderRadius: '12px',
                                                padding: '12px 16px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '6px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        gap: '8px'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '12px',
                                                                fontWeight: 600,
                                                                color: 'var(--accent-purple)'
                                                            },
                                                            children: reply.repliedBy
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                            lineNumber: 707,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: '11px',
                                                                color: 'var(--text-secondary)'
                                                            },
                                                            children: [
                                                                new Date(reply.repliedAt).toLocaleDateString(),
                                                                " ",
                                                                new Date(reply.repliedAt).toLocaleTimeString([], {
                                                                    hour: '2-digit',
                                                                    minute: '2-digit'
                                                                })
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                            lineNumber: 714,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                    lineNumber: 701,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        margin: 0,
                                                        fontSize: '14px',
                                                        color: 'var(--text-primary)',
                                                        lineHeight: '1.5'
                                                    },
                                                    children: reply.reply
                                                }, void 0, false, {
                                                    fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                    lineNumber: 721,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                            lineNumber: 692,
                                            columnNumber: 21
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                lineNumber: 670,
                                columnNumber: 17
                            }, this),
                            replyingTo === m._id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '16px 20px',
                                    borderTop: '1px solid var(--glass-border)',
                                    background: 'rgba(139, 92, 246, 0.08)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginBottom: '4px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '12px',
                                                    fontWeight: 600,
                                                    color: 'var(--accent-purple)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '6px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                        lineNumber: 758,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Reply to this message"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                lineNumber: 750,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setReplyingTo(null);
                                                    setReplyText('');
                                                },
                                                style: {
                                                    background: 'transparent',
                                                    border: 'none',
                                                    color: 'var(--text-secondary)',
                                                    cursor: 'pointer',
                                                    padding: '4px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    borderRadius: '4px',
                                                    transition: 'all 0.2s'
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                                    e.currentTarget.style.color = '#fff';
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.background = 'transparent';
                                                    e.currentTarget.style.color = 'var(--text-secondary)';
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                    lineNumber: 786,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                lineNumber: 761,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                        lineNumber: 744,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                                        value: replyText,
                                        onChange: (e)=>setReplyText(e.target.value),
                                        placeholder: "Type your reply...",
                                        style: {
                                            width: '100%',
                                            minHeight: '80px',
                                            padding: '12px',
                                            borderRadius: '8px',
                                            border: '1px solid rgba(139, 92, 246, 0.3)',
                                            background: 'rgba(0,0,0,0.3)',
                                            color: '#fff',
                                            fontSize: '14px',
                                            fontFamily: 'inherit',
                                            resize: 'vertical',
                                            outline: 'none',
                                            transition: 'border 0.2s'
                                        },
                                        onFocus: (e)=>e.currentTarget.style.border = '1px solid var(--accent-purple)',
                                        onBlur: (e)=>e.currentTarget.style.border = '1px solid rgba(139, 92, 246, 0.3)'
                                    }, void 0, false, {
                                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                        lineNumber: 789,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '8px',
                                            justifyContent: 'flex-end'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setReplyingTo(null);
                                                    setReplyText('');
                                                },
                                                disabled: sendingReply,
                                                style: {
                                                    padding: '8px 16px',
                                                    borderRadius: '8px',
                                                    border: '1px solid var(--glass-border)',
                                                    background: 'transparent',
                                                    color: 'var(--text-secondary)',
                                                    fontSize: '13px',
                                                    fontWeight: 600,
                                                    cursor: sendingReply ? 'wait' : 'pointer',
                                                    transition: 'all 0.2s'
                                                },
                                                onMouseEnter: (e)=>!sendingReply && (e.currentTarget.style.background = 'rgba(255,255,255,0.05)'),
                                                onMouseLeave: (e)=>!sendingReply && (e.currentTarget.style.background = 'transparent'),
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                lineNumber: 811,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>sendReply(m._id),
                                                disabled: sendingReply || !replyText.trim(),
                                                style: {
                                                    padding: '8px 16px',
                                                    borderRadius: '8px',
                                                    border: 'none',
                                                    background: sendingReply || !replyText.trim() ? 'rgba(139, 92, 246, 0.3)' : 'var(--accent-purple)',
                                                    color: '#fff',
                                                    fontSize: '13px',
                                                    fontWeight: 600,
                                                    cursor: sendingReply || !replyText.trim() ? 'wait' : 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '6px',
                                                    transition: 'all 0.2s'
                                                },
                                                onMouseEnter: (e)=>{
                                                    if (!sendingReply && replyText.trim()) {
                                                        e.currentTarget.style.background = 'rgba(139, 92, 246, 0.9)';
                                                        e.currentTarget.style.transform = 'translateY(-1px)';
                                                    }
                                                },
                                                onMouseLeave: (e)=>{
                                                    if (!sendingReply && replyText.trim()) {
                                                        e.currentTarget.style.background = 'var(--accent-purple)';
                                                        e.currentTarget.style.transform = 'translateY(0)';
                                                    }
                                                },
                                                children: sendingReply ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                                    children: "Sending..."
                                                }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
                                                    children: [
                                                        "Send Reply ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                            lineNumber: 869,
                                                            columnNumber: 38
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                lineNumber: 833,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                        lineNumber: 810,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                lineNumber: 736,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '16px 20px',
                                    borderTop: '1px solid var(--glass-border)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    background: 'rgba(255,255,255,0.02)',
                                    flexWrap: 'wrap',
                                    gap: '12px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '8px',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                            position: 'relative'
                                        },
                                        children: [
                                            m.reactions && typeof m.reactions === 'object' && Object.entries(m.reactions).filter(([emoji, users])=>{
                                                // Handle both array format and ensure it's valid
                                                return emoji && users && Array.isArray(users) && users.length > 0;
                                            }).sort(([emojiA, usersA], [emojiB, usersB])=>{
                                                const username = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
                                                const userReactedA = Array.isArray(usersA) && usersA.includes(username);
                                                const userReactedB = Array.isArray(usersB) && usersB.includes(username);
                                                // User's reactions first, then by count (descending)
                                                if (userReactedA && !userReactedB) return -1;
                                                if (!userReactedA && userReactedB) return 1;
                                                return (usersB?.length || 0) - (usersA?.length || 0);
                                            }).map(([emoji, users])=>{
                                                const username = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
                                                const userReacted = Array.isArray(users) && users.includes(username);
                                                const reactionCount = Array.isArray(users) ? users.length : 0;
                                                const isHovered = hoveredReaction === `${m._id}-${emoji}`;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>addReaction(m._id, emoji),
                                                    onMouseEnter: ()=>setHoveredReaction(`${m._id}-${emoji}`),
                                                    onMouseLeave: ()=>setHoveredReaction(null),
                                                    disabled: reactingId === m._id,
                                                    style: {
                                                        background: userReacted ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.5) 0%, rgba(139, 92, 246, 0.3) 100%)' : isHovered ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)',
                                                        border: userReacted ? '2px solid var(--accent-purple)' : isHovered ? '2px solid rgba(139, 92, 246, 0.6)' : '2px solid rgba(255,255,255,0.15)',
                                                        cursor: reactingId === m._id ? 'wait' : 'pointer',
                                                        padding: '8px 12px',
                                                        borderRadius: '12px',
                                                        transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '6px',
                                                        color: userReacted ? 'var(--accent-purple)' : isHovered ? 'var(--accent-purple)' : '#fff',
                                                        fontWeight: 600,
                                                        fontSize: '13px',
                                                        animation: reactingId === m._id ? 'pulse-reaction 0.4s ease-out' : userReacted ? 'glow-reacted 2s ease-in-out infinite' : isHovered ? 'glow-hover 1s ease-in-out' : 'none',
                                                        boxShadow: userReacted ? '0 0 20px rgba(139, 92, 246, 0.5), inset 0 0 10px rgba(139, 92, 246, 0.2)' : isHovered ? '0 0 16px rgba(139, 92, 246, 0.3)' : '0 2px 8px rgba(0,0,0,0.1)',
                                                        transform: isHovered ? 'translateY(-2px)' : userReacted ? 'scale(1.05)' : 'translateY(0)',
                                                        position: 'relative'
                                                    },
                                                    onMouseDown: (e)=>{
                                                        if (!reactingId) {
                                                            e.currentTarget.style.transform = 'scale(0.9) translateY(-2px)';
                                                        }
                                                    },
                                                    onMouseUp: (e)=>{
                                                        if (!reactingId) {
                                                            e.currentTarget.style.transform = isHovered ? 'scale(1) translateY(-2px)' : userReacted ? 'scale(1.05)' : 'scale(1) translateY(0)';
                                                        }
                                                    },
                                                    title: `${userReacted ? '✓ You reacted - Click to remove' : 'Click to react'} ${emoji} • ${reactionCount} ${reactionCount === 1 ? 'reaction' : 'reactions'}`,
                                                    children: [
                                                        userReacted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                position: 'absolute',
                                                                top: '-4px',
                                                                right: '-4px',
                                                                background: 'var(--accent-purple)',
                                                                borderRadius: '50%',
                                                                width: '18px',
                                                                height: '18px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                fontSize: '10px',
                                                                fontWeight: 700,
                                                                color: 'white',
                                                                boxShadow: '0 2px 8px rgba(139, 92, 246, 0.6)',
                                                                border: '2px solid var(--bg-color)',
                                                                zIndex: 1
                                                            },
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                            lineNumber: 961,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: isHovered ? '22px' : userReacted ? '20px' : '18px',
                                                                transition: 'font-size 0.2s',
                                                                display: 'inline-block',
                                                                lineHeight: 1,
                                                                filter: userReacted ? 'drop-shadow(0 0 4px rgba(139, 92, 246, 0.8))' : 'none'
                                                            },
                                                            children: emoji
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                            lineNumber: 982,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                minWidth: '20px',
                                                                background: userReacted ? 'rgba(139, 92, 246, 0.4)' : 'rgba(255,255,255,0.15)',
                                                                padding: '3px 7px',
                                                                borderRadius: '10px',
                                                                fontSize: '11px',
                                                                fontWeight: 700,
                                                                color: userReacted ? 'var(--accent-purple)' : '#fff',
                                                                border: userReacted ? '1px solid rgba(139, 92, 246, 0.5)' : 'none',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '4px'
                                                            },
                                                            children: [
                                                                reactionCount,
                                                                userReacted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        fontSize: '9px',
                                                                        opacity: 0.8
                                                                    },
                                                                    children: "• You"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                                    lineNumber: 1008,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                            lineNumber: 991,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, emoji, true, {
                                                    fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                    lineNumber: 911,
                                                    columnNumber: 23
                                                }, this);
                                            }),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'relative'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setEmojiPickerOpen(emojiPickerOpen === m._id ? null : m._id),
                                                        onMouseEnter: ()=>setHoveredReaction(`${m._id}-add`),
                                                        onMouseLeave: ()=>setHoveredReaction(null),
                                                        disabled: reactingId === m._id,
                                                        style: {
                                                            background: emojiPickerOpen === m._id ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0.15) 100%)' : hoveredReaction === `${m._id}-add` ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)',
                                                            border: emojiPickerOpen === m._id ? '2px solid var(--accent-purple)' : '2px dashed rgba(255,255,255,0.2)',
                                                            cursor: reactingId === m._id ? 'wait' : 'pointer',
                                                            padding: '8px 14px',
                                                            borderRadius: '12px',
                                                            transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '6px',
                                                            color: emojiPickerOpen === m._id ? 'var(--accent-purple)' : 'var(--text-secondary)',
                                                            fontWeight: 600,
                                                            fontSize: '13px',
                                                            boxShadow: emojiPickerOpen === m._id ? '0 0 16px rgba(139, 92, 246, 0.3)' : 'none',
                                                            transform: hoveredReaction === `${m._id}-add` ? 'translateY(-2px)' : 'translateY(0)'
                                                        },
                                                        title: "Add reaction",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                                lineNumber: 1048,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                children: "React"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                                lineNumber: 1049,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                        lineNumber: 1017,
                                                        columnNumber: 21
                                                    }, this),
                                                    emojiPickerOpen === m._id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$components$2f$EmojiPicker$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        onSelect: (emoji)=>addReaction(m._id, emoji),
                                                        isOpen: true,
                                                        onClose: ()=>setEmojiPickerOpen(null)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                        lineNumber: 1053,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                lineNumber: 1016,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                        lineNumber: 888,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '10px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    if (replyingTo === m._id) {
                                                        setReplyingTo(null);
                                                        setReplyText('');
                                                    } else {
                                                        setReplyingTo(m._id);
                                                        setReplyText('');
                                                    }
                                                },
                                                style: {
                                                    background: replyingTo === m._id ? 'var(--accent-purple)' : 'var(--text-primary)',
                                                    color: replyingTo === m._id ? '#fff' : 'var(--bg-color)',
                                                    border: 'none',
                                                    padding: '8px 16px',
                                                    borderRadius: '12px',
                                                    fontSize: '13px',
                                                    fontWeight: 700,
                                                    cursor: 'pointer',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '6px',
                                                    transition: 'all 0.2s',
                                                    boxShadow: replyingTo === m._id ? '0 0 12px rgba(139, 92, 246, 0.4)' : 'none'
                                                },
                                                title: replyingTo === m._id ? 'Cancel reply' : 'Reply to this message',
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                        lineNumber: 1092,
                                                        columnNumber: 21
                                                    }, this),
                                                    replyingTo === m._id ? 'Cancel' : 'Reply',
                                                    m.replies && m.replies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            background: replyingTo === m._id ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
                                                            padding: '2px 6px',
                                                            borderRadius: '10px',
                                                            fontSize: '11px',
                                                            marginLeft: '4px'
                                                        },
                                                        children: m.replies.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                        lineNumber: 1095,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                lineNumber: 1063,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    navigator.clipboard.writeText(`Check out this anonymous message I got on Desi-Ngl! \n\n"${m.message}"\n\nSend me one too!`);
                                                    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hot$2d$toast__$5b$external$5d$__$28$react$2d$hot$2d$toast$2c$__esm_import$2c$__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$react$2d$hot$2d$toast$29$__["default"].success('Copied for Story!');
                                                },
                                                style: {
                                                    background: 'rgba(255,255,255,0.1)',
                                                    color: '#fff',
                                                    border: 'none',
                                                    borderRadius: '12px',
                                                    width: '32px',
                                                    height: '32px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    cursor: 'pointer',
                                                    fontSize: '14px',
                                                    transition: 'background 0.2s'
                                                },
                                                title: "Copy for Story",
                                                onMouseEnter: (e)=>e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)',
                                                onMouseLeave: (e)=>e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)',
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                    lineNumber: 1130,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                lineNumber: 1107,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>downloadStory(m),
                                                style: {
                                                    background: 'rgba(255, 255, 255, 0.1)',
                                                    color: '#fff',
                                                    border: 'none',
                                                    borderRadius: '50%',
                                                    width: '32px',
                                                    height: '32px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    cursor: 'pointer',
                                                    fontSize: '14px',
                                                    transition: 'background 0.2s'
                                                },
                                                title: "Share to Story",
                                                onMouseEnter: (e)=>e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)',
                                                onMouseLeave: (e)=>e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)',
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                    lineNumber: 1153,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                lineNumber: 1133,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                onClick: ()=>requestDelete(m._id),
                                                style: {
                                                    background: 'rgba(255, 0, 0, 0.1)',
                                                    color: '#ff4444',
                                                    border: 'none',
                                                    borderRadius: '12px',
                                                    width: '32px',
                                                    height: '32px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    cursor: 'pointer'
                                                },
                                                title: "Delete message",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desi$2d$Ngl$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                    lineNumber: 1172,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                                lineNumber: 1156,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                        lineNumber: 1062,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                                lineNumber: 878,
                                columnNumber: 15
                            }, this)
                        ]
                    }, m._id, true, {
                        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                        lineNumber: 570,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
                lineNumber: 564,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desi-Ngl/pages/admin/message/[username].js",
        lineNumber: 266,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__c72b4adf._.js.map