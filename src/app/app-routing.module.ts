import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { PantryComponent } from './pantry/pantry.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FoodTrackerComponent } from './food-tracker/food-tracker.component';


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
  { path: 'pantry', component: PantryComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'food-tracker', component: FoodTrackerComponent }
];

@NgModule({
  declarations: [],
  imports: [BrowserModule, RouterModule.forRoot(routes), CommonModule],
})

export class AppRoutingModule {
}
