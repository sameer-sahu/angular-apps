import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
	constructor(private httpClient: HttpClient,
		private recipeService: RecipeService,
		private authService: AuthService) { }

	storeRecipes() {
		const token = this.authService.getToken();

		return this.httpClient.put('https://ng-food-khajan.firebaseio.com/recipes.json?auth=' + token,
			this.recipeService.getRecipes());
	}

	getRecipes() {
		const token = this.authService.getToken();

		this.httpClient.get('https://ng-food-khajan.firebaseio.com/recipes.json?auth=' + token)
			.pipe(map(
				(recipes: Recipe[]) => {
					for (let recipe of recipes) {
						// To make sure Ingredients is an Array after deleting all also
						if (!recipe['ingredients']) {
							recipe['ingredients'] = [];
						}
					}
					return recipes;
				}
			))
			.subscribe(
				(recipes: Recipe[]) => {
					this.recipeService.setRecipes(recipes);
				}
			);
	}

}