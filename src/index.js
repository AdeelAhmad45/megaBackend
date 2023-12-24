import dotenv from "dotenv";
import connectToDb from "./db/config.js";
import { app } from "./app.js";

dotenv.config({
    path: './.env'
})

const PORT = process.env.PORT || 5000

connectToDb()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at port ${PORT}`);
    })
    app.on("error", (error) => {
        console.log("Error", error)
        throw error
    })
})
.catch((err) => {
    console.log("MONGODB connection failed !!!", err);
})


/*
import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server Running at Port${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Error",error);
        throw error
    }
})()

*/