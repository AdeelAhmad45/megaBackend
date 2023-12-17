import dotenv from "dotenv";
import connectToDb from "./db/config.js";

dotenv.config({
    path: './env'
})

connectToDb();


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