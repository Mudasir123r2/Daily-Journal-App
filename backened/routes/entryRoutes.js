const express = require("express");
const router = express.Router()
const {getEntry,setEntry,updateEntry,deleteEntry} = require("../controllers/entryControllers.js")

router.get("/",getEntry)

router.post("/",setEntry)

router.put("/:id",updateEntry)

router.delete("/:id",deleteEntry)

module.exports=router


