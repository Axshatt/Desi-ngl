self.__BUILD_MANIFEST = {
  "/": [
    "static/chunks/pages/index.js"
  ],
  "/[username]": [
    "static/chunks/pages/[username].js"
  ],
  "/_error": [
    "static/chunks/pages/_error.js"
  ],
  "/about": [
    "static/chunks/pages/about.js"
  ],
  "/admin/message/[username]": [
    "static/chunks/pages/admin/message/[username].js"
  ],
  "/contact": [
    "static/chunks/pages/contact.js"
  ],
  "/link/[username]": [
    "static/chunks/pages/link/[username].js"
  ],
  "/premium": [
    "static/chunks/pages/premium.js"
  ],
  "/privacy": [
    "static/chunks/pages/privacy.js"
  ],
  "/status/[id]": [
    "static/chunks/pages/status/[id].js"
  ],
  "/terms": [
    "static/chunks/pages/terms.js"
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
    "/api/admin/auto-message",
    "/api/admin/message/[user]",
    "/api/cron/auto-engage",
    "/api/stripe/create-checkout-session",
    "/api/stripe/webhook",
    "/api/user/subscription-status",
    "/api/username",
    "/api/[username]",
    "/contact",
    "/faq",
    "/how-it-works",
    "/link/[username]",
    "/premium",
    "/privacy",
    "/terms",
    "/[username]"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()