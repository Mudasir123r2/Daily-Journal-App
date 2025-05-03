const asyncHandler = require("express-async-handler")

const getEntry = asyncHandler(async (req, res)=>{
    res.status(200).json({message: "Get Entry",})
})

const setEntry = asyncHandler (async(req, res)=>{

    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a text field")
    }


    res.status(200).json({message: "Set Entry",})
})

const updateEntry = asyncHandler(async(req, res)=>{
    res.status(200).json({message: `Update Goal ${req.params.id}`,})
})

const deleteEntry =asyncHandler( async (req, res)=>{
    res.status(200).json({message: `Delete Goal ${req.params.id}`,})
})


module.exports = {
    getEntry,
    setEntry,
    updateEntry,
    deleteEntry
}