const mongoose = require("mongoose");
require('dotenv').config()


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

mongoose.connect(process.env.DATABASE)

const user = new Schema({
    username:String,
})
const message = new Schema({
    message:String
})

const userModal  = mongoose.model("users",user); 
const messageModal  = mongoose.model("messages",message); 

module.exports={
    userModal,
    messageModal
}