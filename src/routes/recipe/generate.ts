import { Request, Response } from "express";

import { generate_recipe } from "@/controllers/recipe/generate";

import type { GenerateRecipeBody } from "@/types/models";

/**
 * @desc Generate a recipe with the specified ingredients, for `amount`
 *       people using only the `kitchen_tools` specified.
 *       The recipe should not take more than `minutes` to do.
 * @param req Express Request
 * @param res Express Response
 * @returns A JSON response with the generated recipe
 */
export async function GenerateRecipe(req: Request, res: Response) {
    const { ingredients, amount, kitchen_tools, minutes }: GenerateRecipeBody =
        req.body;

    const data = await generate_recipe(
        ingredients,
        String(amount),
        kitchen_tools,
        String(minutes)
    );
    if (data) res.status(200).send(data);
    else res.status(400).send("Could not generate a recipe");
}
