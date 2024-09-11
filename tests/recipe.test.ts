import { describe, expect, it } from "@jest/globals";

import "./helpers";
import { generateRecipe } from "./recipe.helpers";

describe("/recipe/generate", () => {
    it("Test parameters validation", async () => {
        let resp = await generateRecipe({}, false);
        expect(resp.ok).toBeFalsy();
        resp = await generateRecipe(
            {
                amount: 1,
                kitchen_tools: [
                    "oven",
                    "pans",
                    "saucepan",
                    "micro-wave",
                    "microplane",
                ],
                minutes: 40,
            },
            false
        );
        expect(resp.ok).toBeFalsy();
        resp = await generateRecipe(
            {
                ingredients: {
                    chicken: "2 breast",
                    tomatoes: "5",
                    "chicken broth": "2L",
                    mustard: "1 pot",
                    salt: "100g",
                    pepper: "100g",
                    spaghetti: "1 pack",
                    garlic: "10 gloves",
                    milk: "2L",
                },
                kitchen_tools: [
                    "oven",
                    "pans",
                    "saucepan",
                    "micro-wave",
                    "microplane",
                ],
                minutes: 40,
            },
            false
        );
        expect(resp.ok).toBeFalsy();
        resp = await generateRecipe(
            {
                ingredients: {
                    chicken: "2 breast",
                    tomatoes: "5",
                    "chicken broth": "2L",
                    mustard: "1 pot",
                    salt: "100g",
                    pepper: "100g",
                    spaghetti: "1 pack",
                    garlic: "10 gloves",
                    milk: "2L",
                },
                amount: 1,
                minutes: 40,
            },
            false
        );
        expect(resp.ok).toBeFalsy();
        resp = await generateRecipe(
            {
                ingredients: {
                    chicken: "2 breast",
                    tomatoes: "5",
                    "chicken broth": "2L",
                    mustard: "1 pot",
                    salt: "100g",
                    pepper: "100g",
                    spaghetti: "1 pack",
                    garlic: "10 gloves",
                    milk: "2L",
                },
                amount: 1,
                kitchen_tools: [
                    "oven",
                    "pans",
                    "saucepan",
                    "micro-wave",
                    "microplane",
                ],
            },
            false
        );
        expect(resp.ok).toBeFalsy();
    });
    it("Recipe can be generated", async () => {
        const body = {
            ingredients: {
                chicken: "2 breast",
                tomatoes: "5",
                "chicken broth": "2L",
                mustard: "1 pot",
                salt: "100g",
                pepper: "100g",
                spaghetti: "1 pack",
                garlic: "10 gloves",
                milk: "2L",
            },
            amount: 1,
            kitchen_tools: [
                "oven",
                "pans",
                "saucepan",
                "micro-wave",
                "microplane",
            ],
            minutes: 40,
        };
        const resp = await generateRecipe(body);
        expect(resp.body).toBeTruthy();
    });
});
