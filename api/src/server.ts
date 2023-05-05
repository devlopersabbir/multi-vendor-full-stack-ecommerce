import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AppDataSource } from "./data-source";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;
AppDataSource.initialize()
  .then(async () => {
    console.log("DB connected!");
  })
  .then(() => {
    app.listen(PORT, () => console.log(`🚀 Server is running at ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
