const asyncHandler = require("express-async-handler")
const entryModel = require("../models/entryModel.js")
const userModel = require("../models/userModel.js")


const getEntry = asyncHandler(async (req, res)=>{

    const entries = await entryModel.find({user:req.user.id})
    res.status(200).json(entries)

})

const setEntry = asyncHandler (async(req, res)=>{

    const { title, content } = req.body;

    if (!title || !content) {
        res.status(400)
        throw new Error("Please add both title and content fields")
    }

    const entry = await entryModel.create({
        title,
        content,
        user: req.user.id, 
    })

    res.status(201).json(entry)
})

const updateEntry = asyncHandler(async(req, res)=>{

    const entry = await entryModel.findById(req.params.id)

    if(!entry){
        res.status(404)
        throw new Error("Entry not found")
    }

    const user = await userModel.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error("User not found")
    }

    
    
    if(entry.user.toString() !== user.id) {
        res.status(401)
        throw new Error("User not authorized")
    }

    const updatedEntry = await entryModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    })


    res.status(200).json(updatedEntry)
})

const deleteEntry =asyncHandler( async (req, res)=>{

    const entry = await entryModel.findById(req.params.id)

    if(!entry){
        res.status(404)
        throw new Error("Entry not found")
    }

     const user = await userModel.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error("User not found")
    }

    
   
    if(entry.user.toString() !== user.id) {
        res.status(401)
        throw new Error("User not authorized")
    }

    await entryModel.findByIdAndDelete(req.params.id)
    res.status(200).json({message: `Delete Entry ${req.params.id}`,})
})


module.exports = {
    getEntry,
    setEntry,
    updateEntry,
    deleteEntry
}