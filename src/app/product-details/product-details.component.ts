import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  loader: boolean = true;
  private apiURL = 'https://product-service-cloud.herokuapp.com/product.svc/api/v1';
  product: any = null;
  stocks: any = null;

 constructor(private activeRoute: ActivatedRoute,private http: Http) {}
 ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams
    const routeParams = this.activeRoute.snapshot.params;

    // do something with the parameters
    this.getProductById(routeParams.id);
    this.getStocks(routeParams.id);
}
 getData(value){
    return this.http.get(this.apiURL+'/'+value)
    .pipe(
      map((res:Response) => res.json())
    );
  }
getStocks(id){
  this.getData('/stocks/'+id).subscribe(data => {
      console.log('Getting stocks of product - '+id)
      console.log(data);
      this.stocks = data;
   })
}
getProductById(id){
  this.getData('/products/'+id).subscribe(data => {
      console.log('Getting product - '+id)
      console.log(data);
      this.product = data;
      this.loader = false;
   })
}

}
