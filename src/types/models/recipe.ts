export interface GenerateRecipeBody {
    ingredients: { [key: string]: string };
    amount: number;
    kitchen_tools: string[];
    minutes: number;
}
