const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config()
const {errorHandler,notFound}= require("./middlewares/errorHandlerMiddleware.js")
const connectDB = require("./config/db.js")

const port = process.env.PORT || 5000

connectDB()


const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/entries",require("./routes/entryRoutes.js"))
app.use("/api/users",require("./routes/userRoutes.js"))
app.get("/",(req,res)=>{
    res.send("Welcome to Journal APp")
})

app.use(notFound)
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})