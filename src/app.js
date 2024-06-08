import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app  = express();

app.use(cors({
  origin : process.env.CORS_ORIGIN,
  credentials:true
}))

app.use(express.json({limit: "16kb"})) // for json related files 
app.use(express.urlencoded({extended: true, limit: "16kb"}))   // for getting linking or urls
app.use(express.static("public"))  // for gettging pdf like files
app.use(cookieParser()); // for getting cookie




//routes import 


import userRouter from './routes/user.route.js'


// routes decleartion
app.use("api/v1/users",userRouter)

export { app }