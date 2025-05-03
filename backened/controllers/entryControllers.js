const asyncHandler = require("express-async-handler")
const Entry = require("../models/entryModel.js")


const getEntry = asyncHandler(async (req, res)=>{

    const entries = await Entry.find()
    res.status(200).json(entries)

})

const setEntry = asyncHandler (async(req, res)=>{

    const { title, content } = req.body;

    if (!title || !content) {
        res.status(400)
        throw new Error("Please add both title and content fields")
    }

    const entry = await Entry.create({
        title,
        content,
    })


    res.status(200).json(entry)
})

const updateEntry = asyncHandler(async(req, res)=>{

    const entry = await Entry.findById(req.params.id)

    if(!entry){
        res.status(400)
        throw new Error("Entry not found")
    }

    const updatedEntry = await Entry.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    })


    res.status(200).json(updatedEntry)
})

const deleteEntry =asyncHandler( async (req, res)=>{

    const entry = await Entry.findById(req.params.id)

    if(!entry){
        res.status(400)
        throw new Error("Entry not found")
    }

    await Entry.findByIdAndDelete(req.params.id)
    res.status(200).json({message: `Delete Goal ${req.params.id}`,})
})


module.exports = {
    getEntry,
    setEntry,
    updateEntry,
    deleteEntry
}