const express = require("express");
const dotenv = require("dotenv").config()
const {errorHandler}= require("./middlewares/errorHandlerMiddleware.js")
const connectDB = require("./config/db.js")

const port = process.env.Port || 5000

connectDB()

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/api/entries",require("./routes/entryRoutes.js"))

app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})