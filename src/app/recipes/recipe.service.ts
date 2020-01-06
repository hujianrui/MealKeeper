import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.module';

export class RecipeService{

    private recipes: Recipe[] = [
        new Recipe("test recipe", "test description", 
        "https://live.staticflickr.com/7254/7040034205_cb850610b5_b.jpg",
        [new Ingredient('Meat', 1), new Ingredient('Tomato',2)]),
        new Recipe("test recipe 2", "test description 2", 
        "https://live.staticflickr.com/7254/7040034205_cb850610b5_b.jpg",
        [new Ingredient('Chill', 1), new Ingredient('Potato',2)])
      ];
    getRecipes(): Recipe[]{
        return this.recipes.slice();
    }

    getRecipe(index: number): Recipe{
        return this.recipes[index];
    }
}