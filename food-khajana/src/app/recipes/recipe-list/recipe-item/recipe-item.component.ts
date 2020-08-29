import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // Taking from Recipe List Component
  @Input() recipe: Recipe;
  @Input() index: number;

  // Emit to Recipe List Component, one level up
  // @Output() recipeSelected = new EventEmitter<void>();

  /* constructor(private recipeService: RecipeService) { } */

  ngOnInit() {
  }

  /* onSelect() {
    // this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  } */

}
