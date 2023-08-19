import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoute.js";
dotenv.config();
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//apis
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// error middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

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
