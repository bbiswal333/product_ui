import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductCatlogComponent } from './product-catlog/product-catlog.component';
import { ProductReviewComponent } from './product-review/product-review.component';

import { TimeAgoPipe } from 'time-ago-pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductCatlogComponent,
    ProductReviewComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule  
 ],
  providers: [ProductCatlogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
