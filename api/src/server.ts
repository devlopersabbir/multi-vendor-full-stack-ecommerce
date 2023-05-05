import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AppDataSource } from "./data-source";
import { authRoutes } from "./routes";
dotenv.config();

const app = express();
app.use(express.json());

// all routes
app.use("/api/v1/auth", authRoutes);

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
