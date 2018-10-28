import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingListService {
    ingridientsChange = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
   private ingredients : Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatos', 10)
      ];

    constructor() {

    }

    getAllIngridients() {
        return this.ingredients.slice();
    }

    addIngridient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingridientsChange.next(this.ingredients);
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingridientsChange.next(this.ingredients.slice());
    }

    updateIngredients(index: number, newIngredinet: Ingredient) {
        this.ingredients[index] = newIngredinet;
        this.ingridientsChange.next(this.ingredients.slice());
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingridientsChange.next(this.ingredients.slice());
    }

}