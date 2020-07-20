import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.module';
import { Subject } from 'rxjs';

export class RecipeService{
    recipeChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        // new Recipe("test recipe", "test description", 
        // "https://live.staticflickr.com/7254/7040034205_cb850610b5_b.jpg",
        // [new Ingredient('Meat', 1), new Ingredient('Tomato',2)]),
        // new Recipe("test recipe 2", "test description 2", 
        // "https://live.staticflickr.com/7254/7040034205_cb850610b5_b.jpg",
        // [new Ingredient('Chill', 1), new Ingredient('Potato',2)])
    ];

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }

    getRecipes(): Recipe[]{
        return this.recipes.slice();
    }

    getRecipe(index: number): Recipe{
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipr(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipr(index: number){
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }

}