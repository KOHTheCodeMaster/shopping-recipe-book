import {Component, OnInit} from '@angular/core';
import {RecipePOJO} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipeList: RecipePOJO[] = [
    new RecipePOJO(
      'Black Burger',
      'Kuro Burger is a product line of hamburger sold by the Japanese franchises of the Burger King fast food restaurant chain. The buns and the cheese of the hamburger are colored black with bamboo charcoal.',
      'https://static-ssl.businessinsider.com/image/56057b299dd7cc11008bd1b2-784-588/bk%20halloween%20whopper%5B2%5D.jpg'
    ),
    new RecipePOJO(
      'Black Burger',
      'The buns and the cheese of the hamburger are colored black with bamboo charcoal.',
      'https://static-ssl.businessinsider.com/image/56057b299dd7cc11008bd1b2-784-588/bk%20halloween%20whopper%5B2%5D.jpg'
    )
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
