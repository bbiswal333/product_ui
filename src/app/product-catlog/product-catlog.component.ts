import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import {Http, Response} from '@angular/http';


@Component({
  selector: 'app-product-catlog',
  templateUrl: './product-catlog.component.html',
  styleUrls: ['./product-catlog.component.css']
})
export class ProductCatlogComponent {
  loader: boolean = true;
  private apiURL = 'https://product-service-cloud.herokuapp.com/product.svc/api/v1/products';
  data: any = null;
  count : number = 0;

  constructor(private http: Http){
    this.getProducts();
    this.getData();
  }

  getData(){
    return this.http.get(this.apiURL)
    .pipe(
      map((res:Response) => res.json())
    );
  }

  getProducts(){
    this.getData().subscribe(data => {
      console.log('Getting all products ...')
      console.log(data);
      this.data = data;
      this.count = data.length;
      this.loader = false;
    })
  }

}
