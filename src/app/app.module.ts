import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {StockTrackerComponent} from './stock-tracker/stock-tracker.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipesComponent} from './recipes/recipes.component';
import {ProductTrackerComponent} from './product-tracker/product-tracker.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {RecipePlannerComponent} from './recipe-planner/recipe-planner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductTrackerComponent,
    StockTrackerComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipePlannerComponent
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
