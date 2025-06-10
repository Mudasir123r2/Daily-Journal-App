const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const asyncHandler = require("express-async-handler")
const userModel = require("../models/userModel")



const registerUser = asyncHandler(async (req,res)=>{

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

   

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const user = await userModel.create({
        name,
        email,
        password:hashedPassword
    })

    if(user){
        res.json({
             message: "User registered successfully",
            user : {
            _id:user.id,
            name:user.name,
            email:user.email,
            }
        })
    }else{
        res.status(400)
        throw new Error("Invalid user data")
    }

})


const loginUser = asyncHandler(async (req, res)=>{

    let {email,password}=req.body

    const user = await userModel.findOne({email})

    if(user && (await bcrypt.compare(password,user.password))){
        res.json({
    user: {
        _id: user.id,
        name: user.name,
        email: user.email
    },
    token: generateToken(user._id)
})
    }else{
        res.status(400)
        throw new Error("Invalid Credintials")
    } 

})


 const getMe = asyncHandler(async(req,res)=>{

    const {_id,name,email}= await userModel.findById(req.user.id) 

    res.status(200).json({
        id:_id,
        name,
        email
    })
 })

 const generateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:"20d"
    })
 }

module.exports={
    registerUser,
    loginUser,
    getMe,
}
