import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BrowserModule} from '@angular/platform-browser';
import {StockTrackerComponent} from './stock-tracker/stock-tracker.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipesComponent} from './recipes/recipes.component';
import {ProductTrackerComponent} from './product-tracker/product-tracker.component';
import {RecipePlannerComponent} from './recipe-planner/recipe-planner.component';
import {ProductDetailsComponent} from './product-details/product-details.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {path: 'product-tracker', component: ProductTrackerComponent},
  {path: 'product-details', component: ProductDetailsComponent},
  {path: 'stock-tracker', component: StockTrackerComponent},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'recipes', component: RecipesComponent},
  {path: 'recipe-planner', component: RecipePlannerComponent}
];

@NgModule({
  declarations: [],
  imports: [BrowserModule, RouterModule.forRoot(routes), CommonModule],
})

export class AppRoutingModule {
}
