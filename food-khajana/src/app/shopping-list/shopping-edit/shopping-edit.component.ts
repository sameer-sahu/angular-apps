import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  /* @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef; */ // Removed by Forms

  // To Pass to Parent Comp - Shopping List
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  // To access the Form using Local reference
  @ViewChild('f') slForm: NgForm;

  private subscription: Subscription;
  private editedItemindex: number;
  private editedItem: Ingredient;
  editMode = false;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemindex = index;
          this.editedItem = this.slService.getIngredient(index);
          this.editMode = true;

          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
      );
  }

  /* onAddItem() {
    const ingrd = new Ingredient(this.nameInputRef.nativeElement.value, 
      this.amountInputRef.nativeElement.value);
    // this.ingredientAdded.emit(ingrd);
    this.slService.onIngredientAdded(ingrd);
  } */

  onAddItemSubmit(form: NgForm) {
    const value = form.value;
    const ingrd = new Ingredient(value.name, value.amount);

    if(this.editMode == true)
      this.slService.updateIngredeint(this.editedItemindex, ingrd);
    else
      this.slService.onIngredientAdded(ingrd); // Only one line, so bracket

    // To change to Add always
    this.editMode = false;
    // To Reset the Form
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.editedItemindex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
