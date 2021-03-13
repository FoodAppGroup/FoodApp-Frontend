import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Product} from '../interfaces/product';
import {ActivatedRoute} from '@angular/router';
import {ProductControllerService} from '../services/product-controller.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productControllerService: ProductControllerService,
    private location: Location) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const productName = this.route.snapshot.paramMap.get('name'); /*TODO id or name*/
    this.productControllerService.getProduct(productName)
      .subscribe(responseProduct => this.product = responseProduct);
  }

  save(): void {
    this.productControllerService.updateProduct(this.product)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
