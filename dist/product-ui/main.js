(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _product_catlog_product_catlog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-catlog/product-catlog.component */ "./src/app/product-catlog/product-catlog.component.ts");
/* harmony import */ var _product_review_product_review_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-review/product-review.component */ "./src/app/product-review/product-review.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: 'products',
        component: _product_catlog_product_catlog_component__WEBPACK_IMPORTED_MODULE_3__["ProductCatlogComponent"]
    },
    {
        path: 'product/:id',
        component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailsComponent"]
    },
    {
        path: 'products/review',
        component: _product_review_product_review_component__WEBPACK_IMPORTED_MODULE_4__["ProductReviewComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul#menu li {\n    display:inline;\n}\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <nav class=\"navbar navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">\n        Product Catalog\n    </a>\n  \n   <a class=\"btn btn-success\" routerLink=\"/products/review\">Product Reviews</a>\n  \n  </nav>\n  <router-outlet>\n   </router-outlet>\n</div>\n \n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _product_catlog_product_catlog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-catlog/product-catlog.component */ "./src/app/product-catlog/product-catlog.component.ts");
/* harmony import */ var _product_review_product_review_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-review/product-review.component */ "./src/app/product-review/product-review.component.ts");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"],
                _product_catlog_product_catlog_component__WEBPACK_IMPORTED_MODULE_7__["ProductCatlogComponent"],
                _product_review_product_review_component__WEBPACK_IMPORTED_MODULE_8__["ProductReviewComponent"],
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_9__["TimeAgoPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [_product_catlog_product_catlog_component__WEBPACK_IMPORTED_MODULE_7__["ProductCatlogComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/product-catlog/product-catlog.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-catlog/product-catlog.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".price {\n    font-size: 20px;\n    margin-bottom: 2px;\n    float: right;\n    font-weight: bold;\n}\n.card-title {\n    color: cornflowerblue;\n}\na:hover{\n   text-decoration: none;\n   color: maroon\n}\n.loading {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n.loading-bar {\n  display: inline-block;\n  width: 4px;\n  height: 18px;\n  border-radius: 4px;\n  -webkit-animation: loading 1s ease-in-out infinite;\n          animation: loading 1s ease-in-out infinite;\n}\n.loading-bar:nth-child(1) {\n  background-color: #3498db;\n  -webkit-animation-delay: 0;\n          animation-delay: 0;\n}\n.loading-bar:nth-child(2) {\n  background-color: #c0392b;\n  -webkit-animation-delay: 0.09s;\n          animation-delay: 0.09s;\n}\n.loading-bar:nth-child(3) {\n  background-color: #f1c40f;\n  -webkit-animation-delay: .18s;\n          animation-delay: .18s;\n}\n.loading-bar:nth-child(4) {\n  background-color: #27ae60;\n  -webkit-animation-delay: .27s;\n          animation-delay: .27s;\n}\n@-webkit-keyframes loading {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  20% {\n    -webkit-transform: scale(1, 2.2);\n            transform: scale(1, 2.2);\n  }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes loading {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  20% {\n    -webkit-transform: scale(1, 2.2);\n            transform: scale(1, 2.2);\n  }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}"

/***/ }),

/***/ "./src/app/product-catlog/product-catlog.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-catlog/product-catlog.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h5 class=\"card-header\">Products {{count}}</h5>\n  <div style=\"overflow-y:scroll;overflow-x: hidden;max-height: 600px;\">\n    <div class=\"row\">\n      <div *ngIf=\"loader\" style=\"margin-top:20%\">\n        <div class=\"loading\">\n          <div class=\"loading-bar\"></div>\n          <div class=\"loading-bar\"></div>\n          <div class=\"loading-bar\"></div>\n          <div class=\"loading-bar\"></div>\n        </div>\n     </div>\n      <div class=\"col\" *ngFor=\"let product of data\">\n        <a href=\"#\" routerLink=\"/product/{{product.productId}}\">\n          <div class=\"card \" style=\"width:15rem;margin: 5px\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{product.name}}</h5>\n              <h6 class=\"card-subtitle mb-2 text-muted\">{{product.productId}}</h6>\n              <p class=\"price\">&euro; {{product.price}}</p>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n    <div>\n    </div>"

/***/ }),

/***/ "./src/app/product-catlog/product-catlog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-catlog/product-catlog.component.ts ***!
  \************************************************************/
/*! exports provided: ProductCatlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCatlogComponent", function() { return ProductCatlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCatlogComponent = /** @class */ (function () {
    function ProductCatlogComponent(http) {
        this.http = http;
        this.loader = true;
        this.apiURL = 'https://product-service-cloud.herokuapp.com/product.svc/api/v1/products';
        this.data = null;
        this.count = 0;
        this.getProducts();
        this.getData();
    }
    ProductCatlogComponent.prototype.getData = function () {
        return this.http.get(this.apiURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.json(); }));
    };
    ProductCatlogComponent.prototype.getProducts = function () {
        var _this = this;
        this.getData().subscribe(function (data) {
            console.log('Getting all products ...');
            console.log(data);
            _this.data = data;
            _this.count = data.length;
            _this.loader = false;
        });
    };
    ProductCatlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-catlog',
            template: __webpack_require__(/*! ./product-catlog.component.html */ "./src/app/product-catlog/product-catlog.component.html"),
            styles: [__webpack_require__(/*! ./product-catlog.component.css */ "./src/app/product-catlog/product-catlog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ProductCatlogComponent);
    return ProductCatlogComponent;
}());



/***/ }),

/***/ "./src/app/product-details/product-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/product-details/product-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.panel-shadow {\n    box-shadow: rgba(0, 0, 0, 0.3) 7px 7px 7px;\n}\n.panel-white {\n  border: 1px solid #dddddd;\n}\n.panel-white  .panel-heading {\n  color: #333;\n  background-color: #fff;\n  border-color: #ddd;\n}\n.panel-white  .panel-footer {\n  background-color: #fff;\n  border-color: #ddd;\n}\n.row {\n    margin-bottom: 10px;\n}\n.post .post-heading {\n  height: 95px;\n  padding: 20px 15px;\n}\n.post .post-heading .avatar {\n  width: 60px;\n  height: 60px;\n  display: block;\n  margin-right: 15px;\n}\n.post .post-heading .meta .title {\n  margin-bottom: 0;\n}\n.post .post-heading .meta .title a {\n  color: black;\n}\n.post .post-heading .meta .title a:hover {\n  color: #aaaaaa;\n}\n.post .post-heading .meta .time {\n  margin-top: 8px;\n  color: #999;\n}\n.post .post-image .image {\n  width: 100%;\n  height: auto;\n}\n.post .post-description {\n  padding: 15px;\n}\n.post .post-description p {\n  font-size: 14px;\n}\n.post .post-description .stats {\n  margin-top: 20px;\n}\n.post .post-description .stats .stat-item {\n  display: inline-block;\n  margin-right: 15px;\n}\n.post .post-description .stats .stat-item .icon {\n  margin-right: 8px;\n}\n.post .post-footer {\n  border-top: 1px solid #ddd;\n  padding: 15px;\n}\n.post .post-footer .input-group-addon a {\n  color: #454545;\n}\n.post .post-footer .comments-list {\n  padding: 0;\n  margin-top: 20px;\n  list-style-type: none;\n}\n.post .post-footer .comments-list .comment {\n  display: block;\n  width: 100%;\n  margin: 20px 0;\n}\n.post .post-footer .comments-list .comment .avatar {\n  width: 35px;\n  height: 35px;\n}\n.post .post-footer .comments-list .comment .comment-heading {\n  display: block;\n  width: 100%;\n}\n.post .post-footer .comments-list .comment .comment-heading .user {\n  font-size: 14px;\n  font-weight: bold;\n  display: inline;\n  margin-top: 0;\n  margin-right: 10px;\n}\n.post .post-footer .comments-list .comment .comment-heading .time {\n  font-size: 12px;\n  color: #aaa;\n  margin-top: 0;\n  display: inline;\n}\n.post .post-footer .comments-list .comment .comment-body {\n  margin-left: 50px;\n}\n.post .post-footer .comments-list .comment > .comments-list {\n  margin-left: 50px;\n}\n.loading {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n.loading-bar {\n  display: inline-block;\n  width: 4px;\n  height: 18px;\n  border-radius: 4px;\n  -webkit-animation: loading 1s ease-in-out infinite;\n          animation: loading 1s ease-in-out infinite;\n}\n.loading-bar:nth-child(1) {\n  background-color: #3498db;\n  -webkit-animation-delay: 0;\n          animation-delay: 0;\n}\n.loading-bar:nth-child(2) {\n  background-color: #c0392b;\n  -webkit-animation-delay: 0.09s;\n          animation-delay: 0.09s;\n}\n.loading-bar:nth-child(3) {\n  background-color: #f1c40f;\n  -webkit-animation-delay: .18s;\n          animation-delay: .18s;\n}\n.loading-bar:nth-child(4) {\n  background-color: #27ae60;\n  -webkit-animation-delay: .27s;\n          animation-delay: .27s;\n}\n@-webkit-keyframes loading {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  20% {\n    -webkit-transform: scale(1, 2.2);\n            transform: scale(1, 2.2);\n  }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes loading {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  20% {\n    -webkit-transform: scale(1, 2.2);\n            transform: scale(1, 2.2);\n  }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n/*success loader*/\n.checkmark {\n  stroke: green;\n  stroke-dashoffset: 745.74853515625;\n  stroke-dasharray: 745.74853515625;\n  -webkit-animation: dash 2s ease-out forwards infinite;\n          animation: dash 2s ease-out forwards infinite;\n}\n@-webkit-keyframes dash {\n  0% {\n    stroke-dashoffset: 745.74853515625;\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes dash {\n  0% {\n    stroke-dashoffset: 745.74853515625;\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n}"

/***/ }),

/***/ "./src/app/product-details/product-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/product-details/product-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h5 class=\"card-header\">\n    <button type=\"button\" class=\"btn btn-primary btn-sm\">\n          <span class=\"fa fa-arrow-left\" routerLink=\"/products\"></span>\n    </button>\n  </h5>\n  <div *ngIf=\"loader\" style=\"min-height:100px;margin-top:20%\">\n    <div class=\"loading\">\n      <div class=\"loading-bar\"></div>\n      <div class=\"loading-bar\"></div>\n      <div class=\"loading-bar\"></div>\n      <div class=\"loading-bar\"></div>\n    </div>\n  </div>\n  <div class=\"card-body\" *ngIf=\"product!=null\">\n\n    <h5 class=\"card-title\">{{product.name}} <span class=\"card-subtitle mb-2 text-muted\">({{product.productId}})</span></h5>\n    <p>\n      \n       <span class=\"badge badge-success\" *ngIf=\"productRating>=3\">{{productRating}} <i class=\"fa fa-star fa-sm\"></i></span>\n       <span class=\"badge badge-warning\" *ngIf=\"productRating>2 && productRating<3\">{{productRating}} <i class=\"fa fa-star fa-sm\"></i></span>\n       <span class=\"badge badge-danger\" *ngIf=\"productRating>=1 && productRating <=2\">{{productRating}} <i class=\"fa fa-star fa-sm\"></i></span>\n                \n      \n      <span style=\"margin-left: 5px;\" class=\"text-muted\" *ngIf=\"product_reviews_count==0\">No Reviews yet</span>\n      <span style=\"margin-left: 5px;\" class=\"text-muted\" *ngIf=\"product_reviews_count>0\">{{product_reviews_count}} reviews</span>\n    </p>\n    <h4><span style=\"float:left\">&euro; {{product.price}}</span></h4><br/><br/>\n    <p class=\"card-text\"><i>{{product.shortDescription}}</i></p>\n    <hr/>\n    <p class=\"card-text\">\n      <span class=\"badge badge-info\"> {{product.category}}</span>&nbsp;\n      <span class=\"badge badge-warning\"> {{product.weight}}<i>{{product.weightUnit}}</i></span>&nbsp;\n      <span class=\"badge badge-primary\"> \n        {{product.dimensionWidth}} <i>(w)</i> \n        <i class=\"fa fa-times\"></i>\n        {{product.dimensionHeight}}<i>(h)</i>\n        <i class=\"fa fa-times\"></i>\n        {{product.dimensionDepth}} <i>(d)</i>\n        {{product.dimensionUnit}}\n      </span>\n    </p>\n    <p style=\"color:green\" class=\"card-text\" *ngIf=\"stocks!=null\">\n      <b>{{stocks.quantity}}</b> <i class=\"text-muted\"> available in the stock</i>\n    </p>\n  </div>\n</div>\n<div class=\"card\">\n  <h5 class=\"card-header\">\n    <h5 style=\"float: left\">Reviews and Ratings</h5>\n    <button (click)=\"getAllCustomers()\" style=\"float: right\" type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"modal\"\n      data-target=\"#myModal\">\n          Write a review\n    </button>\n  </h5>\n  <div>\n    <!--<h5 *ngIf=\"loader\">Loading...</h5>-->\n  </div>\n  <div class=\"card-body\">\n    <!--Review list goes here-->\n    <div *ngIf=\"review_list_loader\" style=\"margin-top:20%\">\n      <div class=\"loading\">\n        <div class=\"loading-bar\"></div>\n        <div class=\"loading-bar\"></div>\n        <div class=\"loading-bar\"></div>\n        <div class=\"loading-bar\"></div>\n      </div>\n    </div>\n    <div *ngIf=\"!review_list_loader\">\n      <h6 *ngIf=\"productReviews==''\"> No reviews yet !!</h6>\n    </div>\n    <div *ngIf=\"productReviews!=null\">\n      <div class=\"row\" *ngFor=\"let review of productReviews\">\n        <div class=\"col-sm-8\">\n          <div class=\"panel panel-white post panel-shadow\">\n            <div class=\"post-heading\">\n              <div class=\"pull-left image\">\n                <img src=\"http://bootdey.com/img/Content/user_1.jpg\" class=\"img-circle avatar\" alt=\"user profile image\">\n              </div>\n              <div class=\"pull-left meta\">\n                <div class=\"title h6\">\n                  <a href=\"#\"><b>{{review.customer.firstName +\" \"+review.customer.lastName}}</b></a> made a review.\n                  <span class=\"badge badge-success\" *ngIf=\"review.rating>3\">{{review.rating}} <i class=\"fa fa-star fa-sm\"></i></span>\n                  <span class=\"badge badge-warning\" *ngIf=\"review.rating>2 && review.rating<=3\">{{review.rating}} <i class=\"fa fa-star fa-sm\"></i></span>\n                  <span class=\"badge badge-danger\" *ngIf=\"review.rating>=1 && review.rating<=2\">{{review.rating}} <i class=\"fa fa-star fa-sm\"></i></span>\n                </div>\n                <h6 class=\"text-muted time\">{{review.timestamp | timeAgo}}</h6>\n              </div>\n            </div>\n            <div class=\"post-description\">\n              <p>{{review.reviewDescription}}</p>\n              <div class=\"stats\">\n                <a href=\"javascript: void(0)\" (click)=\"updateReviewLikes(review.reviewId)\" class=\"btn btn-default stat-item\">\n                  <i class=\"fa fa-thumbs-up icon\"></i>{{review.likes}}\n                </a>\n                <a href=\"#\" class=\"btn btn-default stat-item\">\n                  <i class=\"fa fa-thumbs-down icon\"></i>{{review.dislikes}}\n                </a>\n                <div style=\"float: right\">\n          \n                  <span class=\"badge badge-success\" *ngIf=\"review.rating>3\">{{review.sentiments}} </span>\n                  <span class=\"badge badge-warning\" *ngIf=\"review.rating>2 && review.rating<=3\">{{review.sentiments}}</span>\n                  <span class=\"badge badge-danger\" *ngIf=\"review.rating>=1 && review.rating<=2\">{{review.sentiments}} </span>\n                \n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<!-- Add Review Modal -->\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Write a review</h4>\n      </div>\n      <div *ngIf=\"review_loader\" style=\"margin-top:20%\">\n        <div class=\"loading\">\n          <div class=\"loading-bar\"></div>\n          <div class=\"loading-bar\"></div>\n          <div class=\"loading-bar\"></div>\n          <div class=\"loading-bar\"></div>\n        </div>\n      </div>\n      <!--<p *ngIf=\"isReviewSubmitted\" style=\"font-weight: bold; color: green; display: inline-block; margin-left: 20px;margin-top: 30px;\">\n        {{review_created_message}}\n      </p>-->\n\n      <form (ngSubmit)=\"postReviewForm()\" *ngIf=\"customers!=null && product!=null && review_loader!=true\">\n        <div class=\"modal-body\">\n          <div [hidden]=\"isReviewSubmitted\" style=\"margin-bottom: 30px;\" class=\"form-group\">\n            <label style=\"font-weight: bold;margin-right: 10px\" for=\"sel1\"><i>Customer name: </i></label>\n            <input type=\"hidden\" name=\"customerId\" value=\"{{randomCustomerId}}\" [(ngModel)]=\"customerId\" />\n            <span class=\"badge badge-warning\"><i>{{randomCustomerName}}</i></span>\n            <input type=\"hidden\" name=\"productId\" value=\"{{product.productId}}\" [(ngModel)]=\"productId\" />\n            <hr>\n          </div>\n          <div [hidden]=\"isReviewSubmitted\" class=\"form-group\">\n            <label style=\"font-weight: bold;margin-right: 10px\"><i>Write your review </i></label>\n            <span style=\"color: green\">{{charactersRemaining}}</span><i> characters remaining.</i>\n            <textarea maxlength=\"500\" (focusout)=\"checkSentence($event)\" (keyup)=\"onKeyDescription($event)\" name=\"description\" class=\"form-control\" style=\"height: 250px;margin-bottom:-85px;\" [(ngModel)]=\"description\"></textarea>\n          </div>\n\n          <div style=\"position: absolute;left: 40%;top:40%; display: inline-block;height:150px;\" *ngIf=\"isReviewSubmitted\">\n            <!--success icon goes here-->\n            <svg style=\"width: 70px;height:70px;\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n              x=\"0px\" y=\"0px\" viewBox=\"0 0 98.5 98.5\" enable-background=\"new 0 0 98.5 98.5\" xml:space=\"preserve\">\n              <path class=\"checkmark\" fill=\"none\" stroke-width=\"8\" stroke-miterlimit=\"10\" d=\"M81.7,17.8C73.5,9.3,62,4,49.2,4\n          C24.3,4,4,24.3,4,49.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0L45.6,68.2L24.7,47.3\"\n              />\n            </svg>\n            <p style=\"margin-left: -55px;\">{{review_created_message}}</p>\n          </div>\n\n\n\n\n        </div>\n        <div class=\"modal-footer\" style=\"margin-top: 95px;\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          <button [hidden]=\"isReviewSubmitted\" type=\"submit\" class=\"btn btn-success\" [disabled]=\"! review_submit_button\">Submit</button>\n        </div>\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/product-details/product-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product-details/product-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(activeRoute, http) {
        this.activeRoute = activeRoute;
        this.http = http;
        this.loader = true;
        this.review_loader = true;
        this.review_list_loader = true;
        this.apiURL = 'https://product-service-cloud.herokuapp.com/product.svc/api/v1';
        this.customerApiURL = 'https://customer-service-cloud.herokuapp.com/customer.svc/api/v1';
        this.productReviewApiURL = "https://customer-service-cloud.herokuapp.com/review.svc/api/v1";
        this.productReviews = null;
        this.product = null;
        this.stocks = null;
        this.customers = null;
        this.randomCustomerId = null;
        this.randomCustomerName = null;
        this.randomValue = 0;
        //review form data
        this.description = null;
        this.productId = null;
        this.rating = 0.0;
        this.sentiments = null;
        this.product_reviews_count = 0;
        this.review_submit_button = false;
        this.isReviewSubmitted = false;
        this.charactersRemaining = 500;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var queryParams = this.activeRoute.snapshot.queryParams;
        var routeParams = this.activeRoute.snapshot.params;
        // do something with the parameters
        this.getProductById(routeParams.id);
        this.getStocks(routeParams.id);
        this.getProductReview(routeParams.id);
        //refresh reviews every 2 sec
        this.refreshId = setInterval(function () {
            _this.getProductReview(routeParams.id);
        }, 2000);
    };
    ProductDetailsComponent.prototype.ngOnDestroy = function () {
        if (this.refreshId) {
            clearInterval(this.refreshId);
        }
    };
    ProductDetailsComponent.prototype.getData = function (value) {
        return this.http.get(this.apiURL + '/' + value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ProductDetailsComponent.prototype.getCustomerData = function (value) {
        return this.http.get(this.customerApiURL + '/' + value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ProductDetailsComponent.prototype.getProductReviewData = function (value) {
        return this.http.get(this.productReviewApiURL + '/' + value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ProductDetailsComponent.prototype.getStocks = function (id) {
        var _this = this;
        this.getData('/stocks/' + id).subscribe(function (data) {
            console.log('Getting stocks of product - ' + id);
            console.log(data);
            _this.stocks = data;
        });
    };
    ProductDetailsComponent.prototype.getProductById = function (id) {
        var _this = this;
        this.getData('/products/' + id).subscribe(function (data) {
            console.log('Getting product - ' + id);
            console.log(data);
            _this.product = data;
            _this.productId = _this.product.productId;
            _this.loader = false;
        });
    };
    ProductDetailsComponent.prototype.getAllCustomers = function () {
        var _this = this;
        this.resetReviewForm();
        this.review_loader = true;
        this.isReviewSubmitted = false;
        this.review_created_message = "";
        this.getCustomerData('customers/').subscribe(function (data) {
            console.log("Getting all customers...");
            console.log(data);
            _this.customers = data;
            _this.review_loader = false;
            _this.getRandomCustomer();
        });
    };
    ProductDetailsComponent.prototype.getRandomValue = function (min, max) {
        return (Math.floor(Math.random() * max) + min);
    };
    ProductDetailsComponent.prototype.getRandomCustomer = function () {
        var _this = this;
        this.randomValue = this.getRandomValue(0, this.customers.length);
        this.customers.forEach(function (customer, index) {
            if (index === _this.randomValue) {
                _this.randomCustomerName = customer.firstName + " " + customer.lastName;
                _this.randomCustomerId = customer.customerId;
                _this.customerId = _this.randomCustomerId;
            }
        });
    };
    ProductDetailsComponent.prototype.getProductReview = function (productId) {
        var _this = this;
        this.getProductReviewData('/reviews/' + productId).subscribe(function (data) {
            console.log("Getting product reviews..");
            _this.productReviews = data;
            _this.review_list_loader = false;
            _this.calculateProductRating(data);
            _this.product_reviews_count = data.length;
            console.log(data);
        });
    };
    ProductDetailsComponent.prototype.calculateProductRating = function (data) {
        var length = data.length;
        var sum = 0;
        for (var i = 0; i < length; i++) {
            sum += data[i].rating;
        }
        var res = sum / length;
        this.productRating = res.toFixed(1);
    };
    ProductDetailsComponent.prototype.resetReviewForm = function () {
        this.description = null;
    };
    ProductDetailsComponent.prototype.postReviewForm = function () {
        var _this = this;
        this.review_submit_button = false;
        this.review_loader = true;
        var body = {
            "productId": this.productId,
            "reviewDescription": this.description
        };
        // console.log(body)
        console.log(this.productReviewApiURL + "/reviews/" + this.customerId);
        //making api call
        return this.http.post(this.productReviewApiURL + "/reviews/" + this.customerId, body).subscribe(function (res) {
            if (res.status == 201) {
                _this.isReviewSubmitted = true;
                _this.review_created_message = "Review has been submitted";
                _this.review_loader = false;
            }
            _this.getProductReview(_this.productId);
            _this.resetReviewForm();
        });
    };
    ProductDetailsComponent.prototype.onKeyDescription = function (event) {
        this.charactersRemaining = 500 - event.target.value.length;
        if (event.target.value.length > 5) {
            this.review_submit_button = true;
        }
        else {
            this.review_submit_button = false;
        }
    };
    ProductDetailsComponent.prototype.correctSentence = function (sentence) {
        return this.http.get('/sentence/correction?q=' + sentence)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ProductDetailsComponent.prototype.checkSentence = function (event) {
        var _this = this;
        this.correctSentence(event.target.value).subscribe(function (data) {
            _this.description = data.correctedSentence;
            console.log(_this.description);
        });
    };
    ProductDetailsComponent.prototype.updateReviewLikes = function (value) {
        this.http.put(this.productReviewApiURL + "/reviews/" + value + "/likes", null).subscribe(function (res) {
            alert(res.status);
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
    };
    ProductDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! ./product-details.component.html */ "./src/app/product-details/product-details.component.html"),
            styles: [__webpack_require__(/*! ./product-details.component.css */ "./src/app/product-details/product-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/product-review/product-review.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-review/product-review.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-review/product-review.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-review/product-review.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>\n  Page under development \n</h5>\n<button class=\"btn btn-info\" routerLink=\"/products\">Back to Product catlog</button>\n  \n"

/***/ }),

/***/ "./src/app/product-review/product-review.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-review/product-review.component.ts ***!
  \************************************************************/
/*! exports provided: ProductReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReviewComponent", function() { return ProductReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductReviewComponent = /** @class */ (function () {
    function ProductReviewComponent() {
    }
    ProductReviewComponent.prototype.ngOnInit = function () {
    };
    ProductReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-review',
            template: __webpack_require__(/*! ./product-review.component.html */ "./src/app/product-review/product-review.component.html"),
            styles: [__webpack_require__(/*! ./product-review.component.css */ "./src/app/product-review/product-review.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductReviewComponent);
    return ProductReviewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /data/data/com.termux/files/home/code/product_ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map