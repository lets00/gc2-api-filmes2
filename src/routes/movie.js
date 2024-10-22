import { Router } from "express";
import { findAllMovies } from "../controllers/movieController.js";

const movieRouter = Router();

movieRouter.get("/api/filmes", findAllMovies);

export default movieRouter;
