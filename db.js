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
})
const messageSchema = new Schema({
    message: String,
    mood: { type: String, default: 'Serious' },
    userId: ObjectId
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
