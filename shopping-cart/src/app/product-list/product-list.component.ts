import { Component, OnInit } from '@angular/core';
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
      'https://mdbootstrap.com/img/Photos/Others/images/16.jpg',
      25.0,
      2
    ),
    new Product(
      'Название товара',
      'Краткое описание товара со всеми его прелестями ...',
      'https://mdbootstrap.com/img/Photos/Others/images/17.jpg',
      44.3,
      5
    )
  ];

  constructor() {}

  ngOnInit() {}
}
