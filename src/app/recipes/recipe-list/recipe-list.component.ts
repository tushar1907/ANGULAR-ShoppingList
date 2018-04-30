import { Component, OnInit , Output , EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('TestRecipe','this is a test recipe', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg'),
    new Recipe('1 testRecipe','this is a test recipe', 'http://tiphero.com/wp-content/uploads/2017/05/Lemon-Butter-Chicken-FI.jpg'),
    new Recipe('2','this is a test recipe', 'https://cookwith.whiskaffair.com/wp-content/uploads/2016/07/Kanda-Poha.jpg'),
    new Recipe('3','this is a test recipe', 'https://new-img.patrika.com/upload/images/2016/10/22/Gobi-Manchurian-1477110379_835x547.jpg'),
    new Recipe('4','this is a test recipe', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg'),
    new Recipe('5','this is a test recipe', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg')
  ];
  constructor() { }

  
  ngOnInit() {
  }

  onRecipeSeleted(recipe: Recipe){

    this.recipeWasSelected.emit(recipe);

  }
}
