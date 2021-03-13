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
import {ProductDetailsComponent} from './product-details/product-details.component';
import {FormsModule} from '@angular/forms';
import {ProductControllerService} from './services/product-controller.service';
import {LoggerService} from './services/logger.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductTrackerComponent,
    StockTrackerComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipePlannerComponent,
    ProductDetailsComponent
  ],
  imports: [
    HttpClientModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    ProductControllerService,
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
