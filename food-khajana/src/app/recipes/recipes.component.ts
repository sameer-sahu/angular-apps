import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
// import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // providers: [RecipeService] // Use by Both Recipe and Shopping List, so better to keep in AppModule
})
export class RecipesComponent implements OnInit {

  // To Catch from Recipe List Compenent Emits Event
  // selectedRecipe: Recipe;

  // constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    /* this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      ); */
  }

}
