const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const asyncHandler = require("express-async-handler")
const userModel = require("../models/userModel")


// route /api/users
// public
const registerUser = asyncHandler(async (req,res)=>{

    console.log(req.body)
    const {name , email, password }= req.body
     
    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please add all fields")
    }

    const userExists = await userModel.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error("User already exists")
    }

    // hash password

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const user = await userModel.create({
        name,
        email,
        password:hashedPassword
    })

    if(user){
        res.json({
            _id:user.id,
            name:user.name,
            email:user.email,
            password:user.password,
        })
    }else{
        res.status(400)
        throw new Error("Invalid user data")
    }



    res.json({message:"register user"})
})

// route /api/users/login
const loginUser = asyncHandler(async (req, res)=>{

    let {email,password}=req.body

    const user = await userModel.findOne({email})

    if(user && (await bcrypt.compare(password,user.password))){
        res.json({
            _id:user.id,
            name:user.name,
            email:user.email,
        })
    }else{
        res.status(400)
        throw new Error("Invalid Credintials")
    }




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
