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


    await userModal.create({
        username
    })


    res.set({
       'token': token,
     });
     res.send({
        msg:"user created",
           
     })


})

userRoute.get("/message",function(req,res){
    res.sendFile(path.join(__dirname, "..", "public", "message.html"));
})

userRoute.get("/link/:username",function(req,res){
    res.sendFile(path.join(__dirname, "..", "public", "share.html"));
})

userRoute.post("/:username",async function(req,res){
    const {message} = req.body;
    const username = req.body.params;



    

    
    await messageModal.create({
        message,
    })

    res.send({
        msg:message
    })

})

userRoute.post("/link/:username",function(req,res){
    const username = req.params.username;

    res.send({
        username
    })
})


userRoute.post("/message",async function(req,res){
    const {message} = req.body;
    const username = localStorage.getItem("username")

    
    await messageModal.create({
        message,
    })

    res.send({
        msg:message
    })

})
userRoute.get("/:username",function(req,res){
     res.sendFile(path.join(__dirname, "..", "public", "message.html"));
})


userRoute.get("/",function(req,res){
     res.sendFile(path.join(__dirname, "..", "public", "index.html"));
})


module.exports={
    userRoute
}