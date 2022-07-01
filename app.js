import 'dotenv/config';

import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose.connect(
    "mongodb+srv://tecsup:123@cluster0.xjtfc.mongodb.net/Blog?retryWrites=true&w=majority"
)
.then(() => app.listen(process.env.PORT))
.then(() =>
  console.log("Connected TO Database and Listening TO Localhost ", process.env.PORT)
)
.catch((err) => console.log(err));