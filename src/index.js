/*import mongoose from "mongoose";

import {DB_NAME} from "./constants";


import express from "express";
const app = express();

// function connectDB(){

// }

// connectDB()

// better approach

// linking database

;( async() => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error",(error) => {
      console.log("ERROR: ",error)
      throw error
    })


    app.listen(process.env.PORT , ()  => {
      console.log(`App is listeing on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.error("ERROR: ", error)
    throw err
  }
})()*/





// 2nd approach

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import dotenv  from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: '/env'
})


connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`server is running at port : ${process.env.PORT}`)
  })
  app.on('error',(error) => {
    console.log(`error occured: ${error}`)
  })
})
.catch((err) => {
  console.log("mongo db connectionf aild",err)
})