const getEntry = (req, res)=>{
    res.status(200).json({message: "Get Entry",})
}

const setEntry = (req, res)=>{
    res.status(200).json({message: "Set Entry",})
}

const updateEntry = (req, res)=>{
    res.status(200).json({message: `Update Goal ${req.params.id}`,})
}

const deleteEntry = (req, res)=>{
    res.status(200).json({message: `Delete Goal ${req.params.id}`,})
}


module.exports = {
    getEntry,
    setEntry,
    updateEntry,
    deleteEntry
}