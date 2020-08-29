import { Ingredient } from '../shared/ingredient.model';

// Model class to store the Recipe Details

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, des: string, path: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = des;
        this.imagePath = path;
        this.ingredients = ingredients;
    }
}