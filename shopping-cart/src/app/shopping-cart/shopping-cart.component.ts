import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products: Product[] = [];

  constructor() {}

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
    console.log('ShoppingCartComponent:', event);
    if (event.container.id === event.previousContainer.id) {
      // move inside same list
    } else {
      // move between lists
    }
  }
}
