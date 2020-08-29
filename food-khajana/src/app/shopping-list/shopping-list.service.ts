import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
    // ingredientsChanged = new EventEmitter<Ingredient[]>(); // Removed By Observable
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Orange', 10)
    ];

    getIngredients() {
        // But here when added new one, change will not pass to component
        // Need to emit an event and subscribe there in List Comp
        return this.ingredients.slice();
    }

    // Because we need to edit the actual Data
    getIngredient(index: number) {
        return this.ingredients[index];
    }

    onIngredientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        // Emit and inform to List Component
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredeint(index: number, newIngrd: Ingredient) {
        this.ingredients[index] = newIngrd;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // But in this approach we will emit lots of events
        /* for(let ingredient of ingredients) {
            this.onIngredientAdded(ingredient);
        } */

        // It will spread the array into List and add
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}