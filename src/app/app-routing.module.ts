import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PantryComponent} from './pantry/pantry.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipesComponent} from './recipes/recipes.component';
import {FoodTrackerComponent} from './food-tracker/food-tracker.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {path: 'pantry', component: PantryComponent},
      {path: 'shopping-list', component: ShoppingListComponent},
      {path: 'recipes', component: RecipesComponent},
      {path: 'food-tracker', component: FoodTrackerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
