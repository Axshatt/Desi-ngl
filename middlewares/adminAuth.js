const jwt = require("jsonwebtoken")
require('dotenv').config()
function adminAuth(req,res,next){
    const token = req.headers.token
    //  const token = req.token
    console.log(token);
    
    const decoded = jwt.verify(token,process.env.JWT_PASS)
    
    if(decoded){
        req.userId = decoded.username
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