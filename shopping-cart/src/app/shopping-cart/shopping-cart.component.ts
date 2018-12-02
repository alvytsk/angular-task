import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
    console.log('ShoppingCartComponent:', event);
    if (event.container.id === event.previousContainer.id) {
      // move inside same list
      //moveItemInArray(this.list, event.previousIndex, event.currentIndex);
    } else {
      // move between lists
    }
  }
}
