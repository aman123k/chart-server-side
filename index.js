import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import web from "./router/web.js";
import connectDb from "./db/connectDb.js";

async function startServer() {
  try {
    const app = express();

    app.use(
      cors({
        credentials: true,
        origin: process.env.RequestPort,
      })
    );

    app.use(express.json());
    await connectDb(process.env.DATABASE_URL);
    const port = process.env.PORT;

    app.use("/", web);
    app.listen(port, () => {
      console.log(`server running at  http://localhost:${port}`);
    });
  } catch (err) {
    console.log("error in start server", err);
  }
}
startServer();
