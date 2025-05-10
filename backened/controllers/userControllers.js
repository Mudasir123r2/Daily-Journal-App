
// route /api/users
// public
const registerUser = async (req,res)=>{
    res.json({message:"register user"})
}

// route /api/users/login
const loginUser = async (req, res)=>{
    res.json({message:"loogin user"})
}

// route /api/users/me
// private
 const getMe = async (req,res)=>{
    res.json({message:"user data"})
 }

module.exports={
    registerUser,
    loginUser,
    getMe,
}
