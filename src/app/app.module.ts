import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ProductComponent } from './product.component';
import { ProductsComponent } from './products.component';
import {RatingComponent } from './rating.component';

@NgModule({
  declarations: [
    AppComponent, ProductComponent, ProductsComponent, RatingComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
