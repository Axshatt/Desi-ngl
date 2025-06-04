const jwt = require("jsonwebtoken")
require('dotenv').config
function adminAuth(req,res,next){
    const token = req.body.headers;

    const decoded = jwt.verify(token,process.env.JWT_PASS)
    
    if(decoded){
        const userId = req.decoded
        next()
    } else{
        res.send({
            msg:"Not a valid user"
        })
    }
}

module.exports={
    adminAuth
}