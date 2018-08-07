import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductCatlogComponent } from './product-catlog/product-catlog.component';
import { ProductReviewComponent } from './product-review/product-review.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductCatlogComponent,
    ProductReviewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
 ],
  providers: [ProductCatlogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
