self.__BUILD_MANIFEST = {
  "/[username]": [
    "static/chunks/pages/[username].js"
  ],
  "/_error": [
    "static/chunks/pages/_error.js"
  ],
  "/admin/message/[username]": [
    "static/chunks/pages/admin/message/[username].js"
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
    "/admin/message/[username]",
    "/api/admin/auto-message",
    "/api/admin/message/[user]",
    "/api/cron/auto-engage",
    "/api/username",
    "/api/[username]",
    "/link/[username]",
    "/[username]"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()