import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
dotenv.config();
const app = express();

//middlewares

//apis
app.use("/api/user", userRouter);

//db connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to MongoDb");
  })
  .catch((err) => {
    console.log(err);
  });

//connection to server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
