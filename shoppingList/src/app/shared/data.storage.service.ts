import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService) { }

    headers = new Headers({'content-type': 'application/json'});

    storeRecipes() {
       return this.http.put("https://ng-recipe-book-j.firebaseio.com/recipe.json", this.recipeService.getRecipes(), { headers: this.headers })

    }
}