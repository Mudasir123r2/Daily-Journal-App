
// route /api/users
// public
const registerUser = async (req,res)=>{
    res.send.json({message:"register user"})
}

// route /api/users/login
const loginUser = async (req, res)=>{
    res.send.json({message:"loogin user"})
}

// route /api/users/me
// private
 const getMe = async (req,res)=>{
    res.send.json({message:"user data"})
 }

module.exports={
    registerUser,
    loginUser,
    getMe,
}
