const express = require("express")
const mongoose = require("mongoose")
const adminRoute = express.Router()
const {messageModal} = require("../db")
const jwt = require("jsonwebtoken")
const { adminAuth } = require("../middlewares/adminAuth")

adminRoute.get("/message/:user",adminAuth, async function(req,res){
    const {message} = req.body;
    const username = req.params.user;

    await messageModal.find({
        username
    })

    res.send({
        msg:message
    })



})



module.exports={
    adminRoute
}