import {Component, OnInit} from '@angular/core';
import {IngredientPOJO} from "../shared/models/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public ingredientsList: IngredientPOJO[] = [
    new IngredientPOJO('Bread Slice', 2),
    new IngredientPOJO('Tomato', 3)
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
