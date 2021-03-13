import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: ActivatedRoute,
              private route: Router) {
  }

  onOpenStockTracker() {
    this.route.navigate(['stock-tracker'],);
  }

  onOpenShoppingList() {
    this.route.navigate(['shopping-list'],);
  }

  onOpenRecipes() {
    this.route.navigate(['recipes'],);
  }

  onOpenProductTracker() {
    this.route.navigate(['product-tracker'],);
  }


}
