import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  // Emit to Recipe Parent Component
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  /* recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Simply a Test', 
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
    new Recipe('A New Test Recipe', 'Simply a Good Test', 
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
  ]; */

  // Using Service
  recipes: Recipe[];

  subcription: Subscription;

  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // To Fetch when New Recipe added or existing one updated
    // This will call only when the Subject emits from Recipe Service
    this.subcription = this.recipeService.recipeChanged
      .subscribe(
        (recipes : Recipe[]) => {
          this.recipes = recipes;
        }
      );

    // This is required to fetch the intial Recipes
    this.recipes = this.recipeService.getRecipes();
  }

  /* onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  } */

  // Change Route Programatically by Navigate
  // We are in /recipe, so Relative path to it and just 'new'
  // Also for that we need to inform the current Route
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
}
