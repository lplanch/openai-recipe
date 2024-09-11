import openai from "@/helpers/openai";

/**
 * @desc Generates a recipe based on the provided ingredients, number of servings (amount),
 *       available kitchen tools, and a time limit. The recipe will include all specified ingredients
 *       (without exceeding the provided quantities), use only the given kitchen tools,
 *       and be completed within the specified number of minutes.
 *
 * @param {Object} ingredients - An object where the keys are ingredient names and the values are their quantities.
 * @param {string} amount - The number of servings the recipe should be made for.
 * @param {string[]} kitchen_tools - An array of kitchen tools available to use in the recipe.
 * @param {string} minutes - The maximum time allowed to complete the recipe, in minutes.
 *
 * @returns {Promise<string | null>} - A string containing the generated recipe if successful, otherwise null.
 */
export async function generate_recipe(
    ingredients: { [key: string]: string },
    amount: string,
    kitchen_tools: string[],
    minutes: string
): Promise<string | null> {
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "user",
                content:
                    "The next prompt will be a list of ingredients, one per line. Please make a recipe from it with all the ingredients included with their quantity. Do not go over the quantity specified in the ingredients, but you can use less or even not use it if you feel like it's not needed for the recipe.",
            },
            {
                role: "user",
                content: Object.keys(ingredients)
                    .map(
                        (key) =>
                            `ingredient: ${key}, quantity: ${ingredients[key]}\n`
                    )
                    .join(""),
            },
            {
                role: "user",
                content: `Please make the recipe for ${amount} person.`,
            },
            {
                role: "user",
                content:
                    "The next prompt will be a list of kitchen tools I have, please do not use one I do not possess but you are allowed to not use everything if you feel like it's not needed.",
            },
            {
                role: "user",
                content: kitchen_tools.join(","),
            },
            {
                role: "user",
                content: `The recipie should not take more than ${minutes} minutes to be done.`,
            },
            {
                role: "user",
                content:
                    "Please generate HTML text without the usual backticks you put at the beginning and at the end.",
            },
        ],
    });
    if (completion.choices.length > 0)
        return completion.choices[0].message.content;
    return null;
}
