const express = require("express");
const dotenv = require("dotenv").config()

const port = process.env.Port || 5000


const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/api/entries",require("./routes/entryRoutes.js"))

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})