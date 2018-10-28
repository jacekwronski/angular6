import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, 
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params: Params) => { 
        this.recipe = this.recipeService.getRecipeById(+params['id']);
        this.id = +params['id'];
      });
  }


  addToShoppingList() {
    this.recipeService.copyIngredientsToShoppingList(this.recipe);
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'], { relativeTo: this.activeRoute });
  }

}
