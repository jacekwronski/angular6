import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm: NgForm;

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
 
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe((number: number) => {
      this.editedItemIndex = number;
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIngredient(this.editedItemIndex);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm) {

    var value = form.value;

    var ingredient: Ingredient = new Ingredient(value.name, value.amount);
    if(this.editMode)
      this.shoppingListService.updateIngredients(this.editedItemIndex, ingredient);
    else
      this.shoppingListService.addIngridient(ingredient);

    this.clearForm();
  }

  clearForm() {
    this.editMode = false;
    this.editedItemIndex = -1;
    this.slForm.reset();
  }

  onDelete() {
   this.shoppingListService.deleteIngredient(this.editedItemIndex);
   this.clearForm();
  }

}
