const express = require("express")
const adminRoute = express.Router()
const {messageModal, userModal} = require("../db")
const path = require("path");

const { adminAuth } = require("../middlewares/adminAuth")

adminRoute.post("/message/:user", async function(req,res){
    const user = req.params.user;
      const users = await userModal.findOne({
        username:user
    })
    if (!users) {
  return res.status(404).json({ message: "User not found" });
}
    const userId = users._id
    

    const messages= await messageModal.find({ 
        userId
    })
    
    res.send({
        messages
    })



})

adminRoute.get("/message/:user",function(req,res){
      res.sendFile(path.join(__dirname, "..", "public", "adminConf.html"));
})



module.exports={
    adminRoute
}