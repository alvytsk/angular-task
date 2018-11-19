import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    new Product('Товар 1', 'Краткое описание товара', '', 25.0, 2),
    new Product('Товар 2', 'Краткое описание товара', '', 44.3, 5)
  ];

  constructor() {}

  ngOnInit() {}
}
