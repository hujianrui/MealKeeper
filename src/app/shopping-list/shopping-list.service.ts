import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.module';

export class ShoppingListService{
    ingredientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 10)
    ];

    addIngredient(ingredient: Ingredient): void{
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index: number){
        return this.ingredients[index];
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }

}