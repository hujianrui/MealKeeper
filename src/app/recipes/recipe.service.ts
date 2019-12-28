import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("test recipe", "test description", 
        "https://live.staticflickr.com/7254/7040034205_cb850610b5_b.jpg"),
        new Recipe("test recipe 2", "test description 2", 
        "https://live.staticflickr.com/7254/7040034205_cb850610b5_b.jpg")
      ];
    getRecipes(): Recipe[]{
        return this.recipes.slice();
    }


}