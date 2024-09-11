import { expect } from "@jest/globals";

import { superagent } from "./helpers";

export async function generateRecipe(
    body: {
        ingredients?: { [key: string]: string };
        amount?: number;
        kitchen_tools?: string[];
        minutes?: number;
    },
    validate: boolean = true
) {
    const resp = await superagent.post(`/recipe/generate`).send(body);
    if (validate) expect(resp.ok).toBeTruthy();
    return resp;
}
