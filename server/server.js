import express from "express";
import  mongoose from "mongoose";
import routes from "./routes.js";
import cors from "cors";
import dotenv from 'dotenv';

//---access to env file---//
dotenv.config();


mongoose.connect(process.env.MONGO_URL,
 {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex : true });

mongoose.connection.once('open', () => {
  console.log("Monogdb connected");
});

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes)
app.get("/", (req, res) => {
    res.send("weight tracker app")
})


app.listen(4000, (req, res) => {
  console.log("server is running in port : 4000");
});