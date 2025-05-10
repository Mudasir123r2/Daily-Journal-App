const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const asyncHandler = require("express-async-handler")
const userModel = require("../models/userModel")


// route /api/users
// public
const registerUser = asyncHandler(async (req,res)=>{

    const {name , email, password }= req.body
     
    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please add all fields")
    }



    res.json({message:"register user"})
})

// route /api/users/login
const loginUser = asyncHandler(async (req, res)=>{
    res.json({message:"loogin user"})
})

// route /api/users/me
// private
 const getMe = asyncHandler(async(req,res)=>{
    res.json({message:"user data"})
 })

module.exports={
    registerUser,
    loginUser,
    getMe,
}
