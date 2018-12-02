import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    new Product(
      'Название товара',
      'Краткое описание товара со всеми его прелестями ...',
      '',
      25.0,
      2
    ),
    new Product(
      'Название товара',
      'Краткое описание товара со всеми его прелестями ...',
      '',
      44.3,
      5
    )
  ];

  constructor() {}

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
    console.log('ProductListComponent:', event);
    if (event.container.id === event.previousContainer.id) {
      // move inside same list
      //moveItemInArray(this.list, event.previousIndex, event.currentIndex);
    } else {
      // move between lists
    }
  }
}
