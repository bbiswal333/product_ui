import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Http, Response } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  loader: boolean = true;
  review_loader: boolean = true;
  review_list_loader: boolean = true;
  private apiURL = 'https://product-service-cloud.herokuapp.com/product.svc/api/v1';
  private customerApiURL = 'https://customer-service-cloud.herokuapp.com/customer.svc/api/v1';
  private productReviewApiURL = "https://customer-service-cloud.herokuapp.com/review.svc/api/v1";
  productReviews: any = null;
  product: any = null;
  stocks: any = null;
  customers: any = null;
  randomCustomerId: string = null;
  randomCustomerName: string = null;
  randomValue: number = 0;

  //review form data
  description: String = null;
  customerId: String;
  productId: String = null;
  rating: number = 0.0;
  sentiments: String = null;

  review_created_message: String;
  product_reviews_count: number = 0;
  review_submit_button: boolean = false;
  isReviewSubmitted: boolean = false;
  charactersRemaining: number = 500;
  productRating: any;

  refreshId: any;

  constructor(private activeRoute: ActivatedRoute, private http: Http) { }
  ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams
    const routeParams = this.activeRoute.snapshot.params;

    // do something with the parameters
    this.getProductById(routeParams.id);
    this.getStocks(routeParams.id);
    this.getProductReview(routeParams.id);

     //refresh reviews every 2 sec
    this.refreshId = setInterval(() => {
      this.getProductReview(routeParams.id);
    },2000);
  }
  ngOnDestroy() {
    if(this.refreshId){
      clearInterval(this.refreshId);
    }
  }
  getData(value) {
    return this.http.get(this.apiURL + '/' + value)
      .pipe(
      map((res: Response) => res.json())
      );
  }
  getCustomerData(value) {
    return this.http.get(this.customerApiURL + '/' + value)
      .pipe(
      map((res: Response) => res.json())
      );
  }
  getProductReviewData(value) {
    return this.http.get(this.productReviewApiURL + '/' + value)
      .pipe(
      map((res: Response) => res.json())
      );
  }
  getStocks(id) {
    this.getData('/stocks/' + id).subscribe(data => {
      console.log('Getting stocks of product - ' + id)
      console.log(data);
      this.stocks = data;
    })
  }
  getProductById(id) {
    this.getData('/products/' + id).subscribe(data => {
      console.log('Getting product - ' + id)
      console.log(data);
      this.product = data;
      this.productId = this.product.productId;
      this.loader = false;
    })
  }
  getAllCustomers() {
    this.resetReviewForm();
    this.review_loader = true;
    this.isReviewSubmitted = false;
    this.review_created_message = "";
    this.getCustomerData('customers/').subscribe(data => {
      console.log("Getting all customers...");
      console.log(data);
      this.customers = data;
      this.review_loader = false;
      this.getRandomCustomer();
    })
  }
  getRandomValue(min, max) {
    return (Math.floor(Math.random() * max) + min)
  }
  getRandomCustomer() {
    this.randomValue = this.getRandomValue(0, this.customers.length)
    this.customers.forEach((customer, index) => {
      if (index === this.randomValue) {
        this.randomCustomerName = customer.firstName + " " + customer.lastName;
        this.randomCustomerId = customer.customerId;
        this.customerId = this.randomCustomerId;
      }
    });
  }

  getProductReview(productId) {
    this.getProductReviewData('/reviews/' + productId).subscribe(data => {
      console.log("Getting product reviews..");
      this.productReviews = data;
      this.review_list_loader = false;
      this.calculateProductRating(data);
      this.product_reviews_count = data.length;
      console.log(data);
    });
  }
  calculateProductRating(data){
    let length = data.length;
    let sum : number = 0;
    for(let i = 0; i < length; i++){
      sum += data[i].rating;
    }
    let res = sum/length;
    this.productRating = res.toFixed(1);
  }

  resetReviewForm() {
    this.description = null;
  }
  postReviewForm() {
    this.review_submit_button = false;
    this.review_loader = true;
    let body = {
      "productId": this.productId,
      "reviewDescription": this.description
    };
    // console.log(body)
    console.log(this.productReviewApiURL + "/reviews/" + this.customerId)
    //making api call
    return this.http.post(this.productReviewApiURL + "/reviews/" + this.customerId, body).subscribe(res => {
      if (res.status == 201) {
        this.isReviewSubmitted = true;
        this.review_created_message = "Review has been submitted"
        this.review_loader = false;
      }
      this.getProductReview(this.productId);
      this.resetReviewForm();
    });
  }
  onKeyDescription(event: any) {
    this.charactersRemaining = 500 - event.target.value.length;
    if (event.target.value.length > 5) {
      this.review_submit_button = true;
    } else {
      this.review_submit_button = false;
    }
  }

  correctSentence(sentence) {
    return this.http.get('/sentence/correction?q=' + sentence)
      .pipe(
      map((res: Response) => res.json())
      );
  }
  checkSentence(event) {
    this.correctSentence(event.target.value).subscribe(data => {
      this.description = data.correctedSentence;
      console.log(this.description);
    });
  }

  updateReviewLikes(value){
    this.http.put(this.productReviewApiURL+"/reviews/"+value+"/likes",null).subscribe(res => {
      alert(res.status)
    });
  //  this.http.put(this.productReviewApiURL + "/reviews/" + this.customer).subscribe(res => {
  //     if (res.status == 201) {
  //       this.isReviewSubmitted = true;
  //       this.review_created_message = "Review has been submitted"
  //       this.review_loader = false;
  //     }
  //     this.getProductReview(this.productId);
  //     this.resetReviewForm();
  //   });
  }
  
}
