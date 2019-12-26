import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>(); 
  recipes: Recipe[] = [
    new Recipe("test recipe", "test description", 
    "https://live.staticflickr.com/7254/7040034205_cb850610b5_b.jpg"),
    new Recipe("test recipe 2", "test description 2", 
    "https://live.staticflickr.com/7254/7040034205_cb850610b5_b.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
