const express=require("express");
const { connection } = require("./db");
const { movieRouter } = require("./route/movie.route");
// const { connection } = require("mongoose");
const cors = require("cors");
const app=express();
require("dotenv").config()

app.use(express.json());
app.use(cors())
app.use("/",movieRouter)
app.listen(process.env.port,async ()=>{
    try {
        await connection
        console.log(`server is running on port ${process.env.port}`)
    } catch (error) {
        console.log(error)
    }
})