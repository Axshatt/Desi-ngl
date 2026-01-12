self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/[username]": [
    "static/chunks/pages/[username].js"
  ],
  "/admin/message/[username]": [
    "static/chunks/pages/admin/message/[username].js"
  ],
  "/admin/super": [
    "static/chunks/pages/admin/super.js"
  ],
  "/claim": [
    "static/chunks/pages/claim.js"
  ],
  "/faq": [
    "static/chunks/pages/faq.js"
  ],
  "/how-it-works": [
    "static/chunks/pages/how-it-works.js"
  ],
  "/link/[username]": [
    "static/chunks/pages/link/[username].js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/",
    "/_app",
    "/_error",
    "/about",
    "/admin/message/[username]",
    "/admin/super",
    "/api/admin/auth",
    "/api/admin/auto-message",
    "/api/admin/message/[user]",
    "/api/admin/messages",
    "/api/admin/stats",
    "/api/admin/users",
    "/api/cron/auto-engage",
    "/api/message/reaction",
    "/api/message/reply",
    "/api/message/view/[token]",
    "/api/username",
    "/api/[username]",
    "/claim",
    "/contact",
    "/faq",
    "/how-it-works",
    "/link/[username]",
    "/privacy",
    "/terms",
    "/view/[token]",
    "/[username]"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()