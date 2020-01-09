import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  @ViewChild('f', { static: false}) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editItemIndex = index;
        this.editItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        });
      }
    );
  }

  onAddIngredient(form: NgForm): void{
    const newIngredient = new Ingredient(form.value.name, form.value.amount);
    this.shoppingListService.addIngredient(newIngredient);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
