import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    // To Pass new value when Recipe Added or Updated
    recipeChanged = new Subject<Recipe[]>();

    // Directly pass from Item to Detail of Recipe
    // recipeSelected = new EventEmitter<Recipe>(); // Removed By Observable

    // So that we can't access directly from outside
    private recipes: Recipe[] = [
        new Recipe('Steak frites', 'Cooked Meat with Hot Fries',
            'https://upload.wikimedia.org/wikipedia/commons/3/3b/Flickr_-_cyclonebill_-_B%C3%B8f_med_pommes_frites_%281%29.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('Fries', 20)
        ]),
        new Recipe('Fat Burger', 'Double Meat Petty Burger with Cheese',
            'https://aht.seriouseats.com/images/20100331-fatburger-primary.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('Buns', 2)
        ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        // Make sure we just send a copy, not the actual array
        return this.recipes.slice();
    }

    getRecipeByIndex(index: number) {
        return this.recipes.slice()[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients); 
    }
}