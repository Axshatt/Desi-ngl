const express = require("express")
const jwt = require("jsonwebtoken")
const path = require("path");
const  userRoute = express.Router()
const {userModal,messageModal} = require("../db");
require('dotenv').config()


userRoute.post("/username",async function(req,res){
    const username = req.body.username;
    const token = jwt.sign({
        username
    },process.env.JWT_PASS)//will save the jwt in the browser localStorage and verify when the user wants to read the confessions of him 


    const user = await userModal.create({
        username,

    })
    req.userId = user._id;
    console.log(req.userId);
    
    
     res.send({
        token
           
     })


})

userRoute.get("/:username",function(req,res){
    res.sendFile(path.join(__dirname, "..", "public", "message.html"));
})

userRoute.get("/link/:username",function(req,res){
    res.sendFile(path.join(__dirname, "..", "public", "share.html"));
})

userRoute.post("/link/:username",function(req,res){
    const username = req.params.username;

    res.send({
        username
    })
})


userRoute.post("/:username",async function(req,res){
    const {message} = req.body;
    const username = req.params.username;

    const user = await userModal.findOne({
        username
    })

    const userId = user._id
    console.log(userId);
    


    
    await messageModal.create({
        message,
        userId:userId
    })

    res.send({
        msg:message
    })

})


userRoute.get("/",function(req,res){
     res.sendFile(path.join(__dirname, "..", "public", "index.html"));
})


module.exports={
    userRoute
}