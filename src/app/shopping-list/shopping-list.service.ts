import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';

export class ShoppingListService{
    ingredientChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 10)
    ];

    addIngredient(ingredient: Ingredient): void{
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

}