import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppingList.service";
import { Subject } from "rxjs";
import { Http, Headers, Response } from "@angular/http";

@Injectable()
export class RecipeService {
   private recipes: Recipe[] = [
        new Recipe('Test recipe', 
        'Test', 
        'https://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg',
        [
            new Ingredient('Meet', 1),
            new Ingredient('Cheese', 3)
        ]),
        new Recipe('Test recipe 2', 
        'Test 2', 
        'https://www.cbc.ca/food/content/images/recipes/WinterVegPie.jpg',
        [
            new Ingredient('Meet', 4),
            new Ingredient('Cheese', 2),
            new Ingredient('Apples', 2)
        ])
    ];

    headers = new Headers({'content-type': 'application/json'});

    constructor(private shoppingListService: ShoppingListService, private http: Http) {}

    recipesChanged = new Subject<Recipe[]>();

    getRecipes() {
        return this.recipes.slice();
        
        
        // this.http.get('https://udemy-ng-http-2c87b.firebaseio.com/data')
        // .pipe(map((response: Response) => {
        //     const data = response.json();
        //     return data;
        // }))
        // .pipe(catchError((error: Response) => {
        //     console.log(error);
        //     return throwError('Erroreeeeeeeeee');
        // }));//
    }

    copyIngredientsToShoppingList(recipe: Recipe) {
        this.shoppingListService.addIngredients(recipe.ingredients);
    }

    getRecipeById(id: number) {
       return this.recipes[id];
    }

    addRecipe(recipe: Recipe) {
        //
        //this.http.put("https://ng-recipe-book-j.firebaseio.com/data.json", recipe, { headers: this.headers })

        //this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}