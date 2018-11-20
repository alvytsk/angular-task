import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../shared/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  countVal: number;

  constructor() {}

  ngOnInit() {
    this.product.amount === 0 ? (this.countVal = 0) : (this.countVal = 1);
  }

  onMinusClick() {
    this.countVal <= 0 ? (this.countVal = 0) : this.countVal--;
  }

  onPlusClick() {
    this.countVal >= this.product.amount
      ? (this.countVal = this.product.amount)
      : this.countVal++;
  }
}
