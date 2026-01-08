# Desi-Ngl (Next.js migration)

This repository was migrated from a small Express app to a Next.js app with equivalent behavior.

What changed
- Frontend pages converted to Next.js pages under `pages/`.
- Backend endpoints converted to Next.js API routes under `pages/api/`.
- Keep `db.js` (Mongoose models) — API routes use it directly.

Environment
You need a `.env` file in the project root with at least:

- DATABASE=<your-mongodb-connection-string>
- JWT_PASS=<a-secret-for-signing-jwt>

Run locally
1. Install dependencies:

```powershell
npm install
```

2. Run dev server:

```powershell
npm run dev
```

App routes
- / -> home page (create username)
- /link/[username] -> share link page
- /[username] -> message form to send anonymous message
- /admin/message/[username] -> admin/confessions view

API endpoints
- POST /api/username -> create user and return JWT
- POST /api/[username] -> submit a message for the user
- POST /api/admin/message/[user] -> return messages for a user

Notes
- `backend/main.js` and the original Express router files are left in the repo for reference but are no longer used by the Next.js app.
# 📨 Desi-NGL – Anonymous Confession Platform 🇮🇳

**Desi-NGL** is a lightweight full-stack application that allows users to receive anonymous messages via a shareable link. Built using **Node.js**, **Express**, **MongoDB**, and vanilla **HTML/CSS**, this app mimics the popular NGL concept but with a Desi twist.

---

## 🚀 Features

- 🔐 JWT-based user authentication (no passwords)
- 📨 Accept anonymous confessions
- 🔗 Shareable links for each user
- 🗂 Static frontend rendered using Express
- ☁️ Deployed-ready for Render/Heroku

---

## 🛠 Tech Stack

| Layer     | Technology     |
|-----------|----------------|
| Backend   | Node.js, Express.js |
| Database  | MongoDB (via Mongoose) |
| Frontend  | HTML/CSS (static pages) |
| Auth      | JSON Web Tokens (JWT) |
| Hosting   | Render.com or Heroku |

---

## 📁 Folder Structure

```
Desi-NGL/
│
├── backend/
│   └── main.js              # Entry point for Express server
│
├── middlewares/
│   └── adminAuth.js         # Admin authentication middleware
│
├── routes/
│   ├── userRoute.js         # User-facing routes
│   └── adminRoute.js        # Admin routes (view confessions)
│
├── public/
│   ├── index.html           # Homepage
│   ├── message.html         # Page to write confessions
│   ├── share.html           # Page to share link
│   └── adminConf.html       # Admin panel for viewing messages
│
├── db.js                    # MongoDB connection setup
├── .env                     # Environment variables
├── .gitignore               # Node modules, env ignored
├── package.json             # Project metadata
└── README.md                # Documentation
```

---

## ⚙️ Installation & Setup

### 1. 📦 Clone the repository

```bash
git clone https://github.com/yourusername/desi-ngl.git
cd desi-ngl
```

### 2. 🛠 Install dependencies

```bash
npm install
```

### 3. ⚙️ Create a `.env` file

```bash
touch .env
```

Add the following variables:

```env
JWT_PASS=your_jwt_secret
MONGO_URL=your_mongodb_connection_url
```

> You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a free cloud database.

---

## ▶️ Running the App

### Local Development:

```bash
node backend/main.js
```

The app will start on: `http://localhost:3000/`

---

## 🧪 API Endpoints

| Method | Route                         | Description                            |
|--------|-------------------------------|----------------------------------------|
| POST   | `/username`                   | Create user and get JWT token          |
| GET    | `/link/:username`             | Returns the user’s share page          |
| POST   | `/link/:username`             | Confirms user link                     |
| POST   | `/:username`                  | Submit anonymous message               |
| GET    | `/:username`                  | Returns message submission page        |
| GET    | `/admin/:user` (protected)    | View messages (JWT required)           |

---

## 🌐 Deployment (Render.com)

1. Push your code to GitHub
2. Go to [https://render.com](https://render.com) → New Web Service
3. Connect GitHub Repo
4. Set:

- **Build Command**: `npm install`
- **Start Command**: `node backend/main.js` or `npm run dev`
- Add environment variables under the **Environment** tab

---

## 🤝 Contribution

1. Fork the project
2. Create your feature branch (`git checkout -b feat-new-feature`)
3. Commit your changes
4. Push to the branch (`git push origin feat-new-feature`)
5. Open a pull request

---

## 📜 License

This project is open-sourced under the [MIT License](LICENSE).

---

## 📩 Made with ❤️ by Akshat Singh

> Feel free to reach out or suggest improvements!
