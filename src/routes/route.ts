import express from "express";

import { GenerateRecipe } from "@/routes/recipe/generate";

const router = express.Router();

router.post("/recipe/generate", GenerateRecipe);

export default router;
