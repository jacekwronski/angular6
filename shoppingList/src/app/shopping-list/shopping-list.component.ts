import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppingList.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  subscruotion: Subscription;
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getAllIngridients();
    this.subscruotion = this.shoppingListService.ingridientsChange.subscribe((ingredients: Ingredient[])  => {
      this.ingredients = ingredients;
    });
  }

  ngOnDestroy() {
    this.subscruotion.unsubscribe();
  }


  onEditItem(id: number) {
        this.shoppingListService.startedEditing.next(id);
  }

}
