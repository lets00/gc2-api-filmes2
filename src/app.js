import express from "express";
import movieRouter from "./routes/movie.js";

const app = express();

app.use(express.json());
app.use(movieRouter);

export default app;
