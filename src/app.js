import express from "express";
const app = express();

import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./shared/routes.js";

dotenv.config();
//middleware
app.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use('/api', routes)

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend is running.");
});
