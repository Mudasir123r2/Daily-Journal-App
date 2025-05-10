const express = require("express");
const router = express.Router()
const {getEntry,setEntry,updateEntry,deleteEntry} = require("../controllers/entryControllers.js")
const protect = require("../middlewares/authMiddleWare.js")

router.get("/",protect,getEntry)

router.post("/",protect,setEntry)

router.put("/:id",protect,updateEntry)

router.delete("/:id",protect,deleteEntry)

module.exports=router


