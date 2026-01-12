const mongoose = require("mongoose");
require('dotenv').config()

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

if (mongoose.connection.readyState === 0) {
    if (process.env.DATABASE) {
        mongoose.connect(process.env.DATABASE)
            .then(() => console.log("Connected to DB"))
            .catch(err => console.error("DB Config Error:", err));
    } else {
        console.warn("No DATABASE environment variable found.");
    }
}

const userSchema = new Schema({
    username: String,
    createdAt: { type: Date, default: Date.now }
})
const replySchema = new Schema({
    reply: String,
    repliedBy: String, // username of the person replying
    repliedAt: { type: Date, default: Date.now }
})

const messageSchema = new Schema({
    message: String,
    mood: { type: String, default: 'Serious' },
    userId: ObjectId,
    // Unique token for sender to view their message and replies
    senderToken: { type: String, unique: true, sparse: true },
    // Dynamic reactions - can accept any emoji as key
    reactions: { type: Schema.Types.Mixed, default: {} },
    // Replies from the message receiver
    replies: [replySchema],
    // Optional sender metadata if they choose to share hints
    senderMeta: {
        share: { type: Boolean, default: false },
        ip: { type: String, default: null },
        deviceType: { type: String, default: null },
        os: { type: String, default: null },
        userAgent: { type: String, default: null }
    },
    createdAt: { type: Date, default: Date.now }
})

// Prevent model overwrite error in dev mode
if (mongoose.models.users) delete mongoose.models.users
if (mongoose.models.messages) delete mongoose.models.messages

const userModal = mongoose.model("users", userSchema);
const messageModal = mongoose.model("messages", messageSchema);

module.exports = {
    userModal,
    messageModal
}
