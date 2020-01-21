import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: ActivatedRoute,
              private route: Router) {
  }

  onOpenPantry() {
    this.route.navigate(['pantry'], );
  }

  onOpenShoppingList() {
    this.route.navigate(['shopping-list'], );
  }

  onOpenRecipes() {
    this.route.navigate(['recipes'], );
  }

  onOpenFoodTracker() {
    this.route.navigate(['food-tracker'], );
  }


}
