const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const userModel = require("../models/userModel")

const protect = asyncHandler(async (req,res,next)=>{

    let token

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            // getting token from the header
            // bearer at 0 index 
            // token at 1 index 
            token = req.headers.authorization.split(' ')[1]

            // verify token 
            const decoded = jwt.verify(token,process.env.JWT_SECRET)

            // get user from the token 

            req.user = await userModel.findById(decoded.id).select('-password')
            next()
        }catch(error){
            console.log(error)
            throw new Error("Not Authorized")
        }
    }

    if(!token){
        res.status(401)
        throw new Error("Not Authorized , No Token")
    }

})

module.exports=protect