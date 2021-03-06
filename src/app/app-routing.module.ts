import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCatlogComponent } from './product-catlog/product-catlog.component';
import { ProductReviewComponent } from './product-review/product-review.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductCatlogComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'products/review',
    component: ProductReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}