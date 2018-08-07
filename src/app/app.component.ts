import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private apiURL = 'https://product-service-cloud.herokuapp.com/product.svc/api/v1/products';
  data: any = {};

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
    })
  }
}
