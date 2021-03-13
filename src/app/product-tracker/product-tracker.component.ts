import {Component, OnInit} from '@angular/core';
import {Product} from '../interfaces/product';
import {ProductControllerService} from '../services/product-controller.service';

@Component({
  selector: 'app-product-tracker',
  templateUrl: './product-tracker.component.html',
  styleUrls: ['./product-tracker.component.scss']
})
export class ProductTrackerComponent implements OnInit {
  products: Product[] = [];

  constructor(private productControllerService: ProductControllerService) {
  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productControllerService.getAllProducts()
      .subscribe(responseProducts => this.products = responseProducts);
  }
}
