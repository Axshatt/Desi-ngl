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
    userId: ObjectId
})

// Prevent model overwrite error in dev mode
const userModal = mongoose.models.users || mongoose.model("users", userSchema);
const messageModal = mongoose.models.messages || mongoose.model("messages", messageSchema);

module.exports = {
    userModal,
    messageModal
}
