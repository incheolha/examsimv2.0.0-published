(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./toefl/teacher/teacher.module": [
		"./src/app/toefl/teacher/teacher.module.ts",
		"toefl-teacher-teacher-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/Utility-shared/globalConstantShare.ts":
/*!*******************************************************!*\
  !*** ./src/app/Utility-shared/globalConstantShare.ts ***!
  \*******************************************************/
/*! exports provided: GlobalConstantShare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalConstantShare", function() { return GlobalConstantShare; });
const GlobalConstantShare = {
    // httpUrl: 'https://examsimv100.herokuapp.com',
    httpUrl: 'http://localhost:3000',
    price: 10
};


/***/ }),

/***/ "./src/app/Utility-shared/mainNavChange.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/Utility-shared/mainNavChange.model.ts ***!
  \*******************************************************/
/*! exports provided: MainNavModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavModel", function() { return MainNavModel; });
class MainNavModel {
    constructor(showMainNav, checkLogoutOrNot, isTeacherLogin) {
        this.showMainNav = showMainNav;
        this.checkLogoutOrNot = checkLogoutOrNot;
        this.isTeacherLogin = isTeacherLogin;
    }
}


/***/ }),

/***/ "./src/app/Utility-shared/utility.service.ts":
/*!***************************************************!*\
  !*** ./src/app/Utility-shared/utility.service.ts ***!
  \***************************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let UtilityService = class UtilityService {
    constructor(toaster) {
        this.toaster = toaster;
        this.loadingStateChanged = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.soundButtonChanged = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"](); // toefl list에서 audio button을 클릭하였을때를 감시하는 subject
        this.audioPathChanged = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.mainNavChanged = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"](); // main Nav 화면 보이고 안보이고 할때
        this.toeflListShowChanged = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"](); // toefl list를 화면에 보이고 안보이고 할때 사용
        this.teacherNavSideBarChanged = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"](); // make exam 생성시 teacher navigation의 sidebar를 보이거나 안보이거나 할때 사용
        this.stepperCheck = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"](); // stepper 단계 점검시 사용
        this.audio = new Audio();
        this.options = { positionClass: 'toast-top-full-width', closeButton: true, progressBar: true };
    }
    successToast(title, message) {
        this.toaster.success(title, message, this.options);
    }
    errorToast(title, message) {
        this.toaster.error(title, message, this.options);
    }
    getChangedAudioUrl(audioPath) {
        this.audioPathChanged.next(audioPath);
    }
    audioPlaySevice(audioPath, soundLocationMode, soundButton) {
        // 만일 toefl List를 보여주는 것이라면 audio.play()가 실행되고 있는지의 여부를 확인하여
        // 실행되고 있다면 반드시 중지 시키고 새로 시작하여야만 중복된 소리가 들리지 않는다
        // Audio Play Service 중 toefl List에서 소리가 나면 값은 "1" === 소리 실행
        // 만일 add, detail, edit component는 "2" --- 소리를 중지
        // add 와 edit 후  save 버튼을 누르면 새로 update된 값으로 소리 실행  === "3"
        console.log('this is the service area:' + this.soundButtonChanged);
        console.log(soundLocationMode);
        if (soundLocationMode === '0') {
            this.audio.pause();
        }
        if (soundLocationMode === '1') {
            if (soundButton) {
                if (this.audio.play()) {
                    this.audio.pause();
                    this.soundButtonChanged.next(true);
                }
            }
            else {
                if (this.audio.play()) {
                    this.audio.pause();
                }
                this.audio = new Audio();
                this.audio.src = audioPath;
                this.audio.autoplay = true;
                this.audio.loop = true;
                this.soundButtonChanged.next(false);
            }
        }
        if (soundLocationMode === '2') {
            if (this.audio.play()) {
                this.audio.pause();
            }
            this.soundButtonChanged.next(true);
        }
        if (soundLocationMode === '3') {
            if (this.audio.play()) {
                this.audio.pause();
            }
            this.audio = new Audio();
            this.audio.src = audioPath;
            this.audio.autoplay = true;
            this.audio.loop = true;
            this.soundButtonChanged.next(false);
        }
    }
};
UtilityService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
], UtilityService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, appRoutingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingComponent", function() { return appRoutingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/header/header.component */ "./src/app/navigation/header/header.component.ts");
/* harmony import */ var _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/sidenav-list/sidenav-list.component */ "./src/app/navigation/sidenav-list/sidenav-list.component.ts");
/* harmony import */ var _navigation_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/footer/footer.component */ "./src/app/navigation/footer/footer.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _shared_pipe_collection_shorten_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/pipe-collection/shorten.pipe */ "./src/app/shared/pipe-collection/shorten.pipe.ts");
/* harmony import */ var _toefl_toeflExam_toefl_list_toefl_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toefl/toeflExam/toefl-list/toefl-list.component */ "./src/app/toefl/toeflExam/toefl-list/toefl-list.component.ts");
/* harmony import */ var _toefl_toeflExam_basic_toefl_list_basic_toefl_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toefl/toeflExam/basic-toefl-list/basic-toefl-list.component */ "./src/app/toefl/toeflExam/basic-toefl-list/basic-toefl-list.component.ts");
/* harmony import */ var _toefl_toeflExam_intermediate_toefl_list_intermediate_toefl_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./toefl/toeflExam/intermediate-toefl-list/intermediate-toefl-list.component */ "./src/app/toefl/toeflExam/intermediate-toefl-list/intermediate-toefl-list.component.ts");
/* harmony import */ var _toefl_toeflExam_advance_toefl_list_advance_toefl_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./toefl/toeflExam/advance-toefl-list/advance-toefl-list.component */ "./src/app/toefl/toeflExam/advance-toefl-list/advance-toefl-list.component.ts");
/* harmony import */ var _toefl_toeflExam_beginner_toefl_list_beginner_toefl_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./toefl/toeflExam/beginner-toefl-list/beginner-toefl-list.component */ "./src/app/toefl/toeflExam/beginner-toefl-list/beginner-toefl-list.component.ts");
/* harmony import */ var _toefl_toeflExam_event_toefl_list_event_toefl_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./toefl/toeflExam/event-toefl-list/event-toefl-list.component */ "./src/app/toefl/toeflExam/event-toefl-list/event-toefl-list.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/payment/payment.component.ts");
/* harmony import */ var _payment_shoppingcart_shoppingcart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./payment/shoppingcart/shoppingcart.component */ "./src/app/payment/shoppingcart/shoppingcart.component.ts");
/* harmony import */ var _payment_payment_checkout_payment_proceed_payment_proceed_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./payment/payment-checkout/payment-proceed/payment-proceed.component */ "./src/app/payment/payment-checkout/payment-proceed/payment-proceed.component.ts");
/* harmony import */ var _payment_payment_checkout_payment_notification_payment_notification_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./payment/payment-checkout/payment-notification/payment-notification.component */ "./src/app/payment/payment-checkout/payment-notification/payment-notification.component.ts");
/* harmony import */ var _payment_shoppingcart_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./payment/shoppingcart/order-summary/order-summary.component */ "./src/app/payment/shoppingcart/order-summary/order-summary.component.ts");
/* harmony import */ var _payment_payment_checkout_payment_order_summary_payment_order_summary_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./payment/payment-checkout/payment-order-summary/payment-order-summary.component */ "./src/app/payment/payment-checkout/payment-order-summary/payment-order-summary.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// angular module


// header side footer component




// page not found 관련 component

// 각종 pipe 규정

// MDTabset으로 구성된 components






// payment module 관련 component -- RouterModule.forChild는 한개박에 작동이 안되므로
// auth module애 forChild모드를 적용하면 payment module이 적용이 되지만 page-not-found가 작동 안됨






// 주소창에 아무거나 입력하면 무조건 auth.guard를 작동하여 인증모드로 강제로 forward하는 기능

const APP_ROUTES = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"] },
    { path: 'payment', component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_14__["PaymentComponent"], children: [
            { path: 'shoppingcart', component: _payment_shoppingcart_shoppingcart_component__WEBPACK_IMPORTED_MODULE_15__["ShoppingcartComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]] },
            { path: 'checkout/:totalAmount', component: _payment_payment_checkout_payment_proceed_payment_proceed_component__WEBPACK_IMPORTED_MODULE_16__["PaymentProceedComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]] },
            { path: 'result', component: _payment_payment_checkout_payment_notification_payment_notification_component__WEBPACK_IMPORTED_MODULE_17__["PaymentNotificationComponent"] }
        ]
    },
    { path: 'teacher', loadChildren: './toefl/teacher/teacher.module#ToeflTeacherModule' },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(APP_ROUTES, {
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
            })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AppRoutingModule);

const appRoutingComponent = [
    _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"],
    _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
    _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_4__["SidenavListComponent"],
    _toefl_toeflExam_event_toefl_list_event_toefl_list_component__WEBPACK_IMPORTED_MODULE_13__["EventToeflListComponent"],
    _toefl_toeflExam_toefl_list_toefl_list_component__WEBPACK_IMPORTED_MODULE_8__["ToeflListComponent"],
    _toefl_toeflExam_beginner_toefl_list_beginner_toefl_list_component__WEBPACK_IMPORTED_MODULE_12__["BeginnerToeflListComponent"],
    _toefl_toeflExam_basic_toefl_list_basic_toefl_list_component__WEBPACK_IMPORTED_MODULE_9__["BasicToeflListComponent"],
    _toefl_toeflExam_intermediate_toefl_list_intermediate_toefl_list_component__WEBPACK_IMPORTED_MODULE_10__["IntermediateToeflListComponent"],
    _toefl_toeflExam_advance_toefl_list_advance_toefl_list_component__WEBPACK_IMPORTED_MODULE_11__["AdvanceToeflListComponent"],
    _navigation_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
    _shared_pipe_collection_shorten_pipe__WEBPACK_IMPORTED_MODULE_7__["ShortenPipe"],
    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
    _payment_payment_component__WEBPACK_IMPORTED_MODULE_14__["PaymentComponent"],
    _payment_shoppingcart_shoppingcart_component__WEBPACK_IMPORTED_MODULE_15__["ShoppingcartComponent"],
    _payment_payment_checkout_payment_proceed_payment_proceed_component__WEBPACK_IMPORTED_MODULE_16__["PaymentProceedComponent"],
    _payment_payment_checkout_payment_notification_payment_notification_component__WEBPACK_IMPORTED_MODULE_17__["PaymentNotificationComponent"],
    _payment_shoppingcart_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_18__["OrderSummaryComponent"],
    _payment_payment_checkout_payment_order_summary_payment_order_summary_component__WEBPACK_IMPORTED_MODULE_19__["PaymentOrderSummaryComponent"],
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--Double navigation-->\n<header *ngIf=\"!mainNavHide\">\n    <!-- Sidebar navigation -->\n    <mdb-sidenav #sidenav class=\"sn-bg-1\" [fixed]=\"false\">\n       <app-sidenav-list></app-sidenav-list>\n    </mdb-sidenav>\n    <!--/. Sidebar navigation -->\n    <app-header [userName]= 'userName' [isAuth]=\"isAuth\" [isteacherAuth]=\"isteacherAuth\" (sidenavToggle)=\"sidenav.toggle()\"></app-header>\n</header>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-light .font-small {\n  font-size: 0.8rem; }\n\n.form-light [type=\"radio\"] + label,\n.form-light [type=\"checkbox\"] + label {\n  font-size: 0.8rem; }\n\n.form-light [type=\"checkbox\"] + label:before {\n  top: 2px;\n  width: 15px;\n  height: 15px; }\n\n.form-light input[type=\"checkbox\"] + label:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 17px;\n  height: 17px;\n  z-index: 0;\n  border-radius: 1px;\n  margin-top: 2px;\n  transition: 0.2s; }\n\n.form-light input[type=\"checkbox\"]:checked + label:before {\n  top: -4px;\n  left: -3px;\n  width: 12px;\n  height: 22px;\n  border-style: solid;\n  border-width: 2px;\n  border-color: transparent #EB3573 #EB3573 transparent;\n  -webkit-transform: rotate(40deg);\n  transform: rotate(40deg);\n  -webkit-backface-visibility: hidden;\n  -webkit-transform-origin: 100% 100%;\n  transform-origin: 100% 100%; }\n\n.form-light .footer {\n  border-bottom-left-radius: .3rem;\n  border-bottom-right-radius: .3rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmNoZW9saGEvRGVza3RvcC9leGFtc2ltdjIuMC4wLXB1Ymxpc2hlZC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjs7RUFFRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFZDtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZTtFQUVmLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHFEQUFxRDtFQUNyRCxnQ0FBZ0M7RUFFaEMsd0JBQXdCO0VBQ3hCLG1DQUFtQztFQUNuQyxtQ0FBbUM7RUFFbkMsMkJBQTJCLEVBQUE7O0FBRTdCO0VBQ0UsZ0NBQWdDO0VBQ2hDLGlDQUFpQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZm9ybS1saWdodCAuZm9udC1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtOyB9XG5cbi5mb3JtLWxpZ2h0IFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbCxcbi5mb3JtLWxpZ2h0IFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtOyB9XG5cbi5mb3JtLWxpZ2h0IFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbDpiZWZvcmUge1xuICB0b3A6IDJweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDsgfVxuXG4uZm9ybS1saWdodCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbDpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxN3B4O1xuICBoZWlnaHQ6IDE3cHg7XG4gIHotaW5kZXg6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb246IDAuMnM7IH1cblxuLmZvcm0tbGlnaHQgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xuICB0b3A6IC00cHg7XG4gIGxlZnQ6IC0zcHg7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNFQjM1NzMgI0VCMzU3MyB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQwZGVnKTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7IH1cblxuLmZvcm0tbGlnaHQgLmZvb3RlciB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC4zcmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjNyZW07IH1cbiJdfQ== */"

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
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Utility_shared_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utility-shared/utility.service */ "./src/app/Utility-shared/utility.service.ts");
/* harmony import */ var _payment_shoppingcart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment/shoppingcart.service */ "./src/app/payment/shoppingcart.service.ts");
/*
    이 mainNavChanged Subject은 주 nav menu를 활성화 시키는 역할을 수행한다
    만일 main nav상태가 false이면 main nav가 활성화 되어 있고 만일 true이면
    이 main nav는 hide되면서 상대적으로 teacher-nav-header가 활성화 되는 기능이다
    이기능에서 navStatus가 MainNavModel을 사용하고 있으며
    다음 3 가지 기능을 수행한다 1) showMainNav를 hide or not
                          2) logout 점검,
                          3) teacherLogin 점검
    또한 로그인 후 사용자 이름을 가져올수 있는 profileInfo정보를 수행하며 특히
    payment구현시 반드시 prfileInfo()가 localstorage에 저장된 userName을 가지고 와야
    property 'name' not defined error 가 발생하자 않는다
    이기능은 또한 routing 시 처음에는 곧바로 welcomComponent가 불러지므로 활성화 되지는 않지만
    logout/isAuth/teacherLogin/mainNav가 변경되자 마자 작동되는 기능이므로
    많은 시간을 소비한 곳이므로 잘 기억해두기 바란다
*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let AppComponent = class AppComponent {
    constructor(utilityService, authService, router, shoppingCartService, changeDetector) {
        this.utilityService = utilityService;
        this.authService = authService;
        this.router = router;
        this.shoppingCartService = shoppingCartService;
        this.changeDetector = changeDetector;
        this.title = 'app';
        this.userName = '';
        this.mainNavHide = false;
        this.isAuth = false;
        this.isteacherAuth = false;
        this.val = 0;
    }
    ngOnInit() {
        this.utilitySubscription = this.utilityService.mainNavChanged.subscribe((navStatus) => {
            this.mainNavHide = navStatus.showMainNav;
            console.log('main nav 상태점검', this.mainNavHide);
            if (navStatus.checkLogoutOrNot) {
                this.isAuth = false;
                this.isteacherAuth = false;
            }
            else if (!navStatus.isTeacherLogin) {
                this.isAuth = true;
                this.isteacherAuth = false;
            }
            else {
                this.isAuth = true;
                this.isteacherAuth = true;
            }
            this.userName = this.authService.getUserName();
        });
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.router.navigated = false;
                window.scrollTo(0, 0);
            }
        });
    }
    ngOnDestroy() {
        this.utilitySubscription.unsubscribe();
    }
    ngAfterViewChecked() {
        this.changeDetector.detectChanges();
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [_Utility_shared_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService_Local"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _payment_shoppingcart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingcartService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-uikit-pro-standard */ "./node_modules/ng-uikit-pro-standard/fesm2015/ng-uikit-pro-standard.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/esm2015/ngx-stripe.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _toefl_toeflExam_toeflexam_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./toefl/toeflExam/toeflexam.module */ "./src/app/toefl/toeflExam/toeflexam.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./error-interceptor */ "./src/app/error-interceptor.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _Utility_shared_utility_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Utility-shared/utility.service */ "./src/app/Utility-shared/utility.service.ts");
/* harmony import */ var _payment_shoppingcart_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./payment/shoppingcart.service */ "./src/app/payment/shoppingcart.service.ts");
/* harmony import */ var _payment_paymentAgency_Service_paypal_payment_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./payment/paymentAgency-Service/paypal-payment.service */ "./src/app/payment/paymentAgency-Service/paypal-payment.service.ts");
/* harmony import */ var _payment_paymentAgency_Service_stripe_payment_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./payment/paymentAgency-Service/stripe-payment.service */ "./src/app/payment/paymentAgency-Service/stripe-payment.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// anglar 순수 modules



// MDBBootstrap모들


// 제 3자에서 제공하는 모듈



// angular가 제공하는 facebook google 인증을 위한 모듈: angular-6-social-login

// http Module


// component 모듈

// routing 모둘

// 사용자 정의 모듈


// 유틸리티 모듈

// error관련 모둘


// 각종 서비스 모듈






let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _error_error_component__WEBPACK_IMPORTED_MODULE_15__["ErrorComponent"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["appRoutingComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_13__["AuthModule"],
            _toefl_toeflExam_toeflexam_module__WEBPACK_IMPORTED_MODULE_12__["ToeflExamModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
            angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__["SocialLoginModule"],
            ngx_stripe__WEBPACK_IMPORTED_MODULE_6__["NgxStripeModule"].forRoot('pk_test_erzDoCmLOPEP1n4tLjvtT7Y2'),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
            ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModulesPro"].forRoot(),
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]],
        providers: [
            ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBSpinningPreloader"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService_Local"],
            _Utility_shared_utility_service__WEBPACK_IMPORTED_MODULE_18__["UtilityService"],
            _payment_shoppingcart_service__WEBPACK_IMPORTED_MODULE_19__["ShoppingcartService"],
            _payment_paymentAgency_Service_paypal_payment_service__WEBPACK_IMPORTED_MODULE_20__["PaypalPaymentService"],
            _payment_paymentAgency_Service_stripe_payment_service__WEBPACK_IMPORTED_MODULE_21__["StripePaymentService"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_16__["ErrorInterceptor"], multi: true },
            { provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthServiceConfig"], useFactory: _environments_environment__WEBPACK_IMPORTED_MODULE_22__["getAuthServiceConfigs"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
        entryComponents: [_error_error_component__WEBPACK_IMPORTED_MODULE_15__["ErrorComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: authRoutes, AuthRoutingModule, authRoutingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authRoutes", function() { return authRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authRoutingComponents", function() { return authRoutingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _authentication_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.component */ "./src/app/auth/authentication.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/auth/logout/logout.component.ts");
/* harmony import */ var _profile_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile-edit/profile-edit.component */ "./src/app/auth/profile/profile-edit/profile-edit.component.ts");
/* harmony import */ var _profile_purchased_history_purchased_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/purchased-history/purchased-history.component */ "./src/app/auth/profile/purchased-history/purchased-history.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/auth/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// angular module


// 보안 module

// routing component module







const authRoutes = [
    { path: 'auth', component: _authentication_component__WEBPACK_IMPORTED_MODULE_3__["AuthenticationComponent"], children: [
            { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
            { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"] },
            { path: 'profile', component: _profile_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_7__["ProfileEditComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
            { path: 'orderHistory', component: _profile_purchased_history_purchased_history_component__WEBPACK_IMPORTED_MODULE_8__["PurchasedHistoryComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
            { path: 'logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"] }
        ] }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(authRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    })
], AuthRoutingModule);

const authRoutingComponents = [
    _authentication_component__WEBPACK_IMPORTED_MODULE_3__["AuthenticationComponent"],
    _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"],
    _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
    _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
    _profile_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_7__["ProfileEditComponent"],
    _profile_purchased_history_purchased_history_component__WEBPACK_IMPORTED_MODULE_8__["PurchasedHistoryComponent"],
    _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"]
];


/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        if (this.authService.isAuth()) {
            return true;
        }
        else {
            this.router.navigate(['/auth/login']);
        }
    }
};
AuthGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService_Local"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-uikit-pro-standard */ "./node_modules/ng-uikit-pro-standard/fesm2015/ng-uikit-pro-standard.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _profile_profile_edit_edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile-edit/edit-user-profile/edit-user-profile.component */ "./src/app/auth/profile/profile-edit/edit-user-profile/edit-user-profile.component.ts");
/* harmony import */ var _profile_profile_edit_exam_history_exam_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile-edit/exam-history/exam-history.component */ "./src/app/auth/profile/profile-edit/exam-history/exam-history.component.ts");
/* harmony import */ var _profile_profile_edit_exam_analysis_exam_analysis_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile-edit/exam-analysis/exam-analysis.component */ "./src/app/auth/profile/profile-edit/exam-analysis/exam-analysis.component.ts");
/* harmony import */ var _profile_profile_edit_profile_order_history_profile_order_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile-edit/profile-order-history/profile-order-history.component */ "./src/app/auth/profile/profile-edit/profile-order-history/profile-order-history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// angular module


// MDBootstrap module

// Google AGM Map 사용하기

// authRoutingMOdule

// 제 3자가 제공한 toaster module

// 모든 component module에서 공통으로 사용하는 모들

// 컴포넌트는 만들어 졌으나 아직 코딩이 안된 모듈




let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["authRoutingComponents"],
            _profile_profile_edit_edit_user_profile_edit_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditUserProfileComponent"],
            _profile_profile_edit_exam_history_exam_history_component__WEBPACK_IMPORTED_MODULE_7__["ExamHistoryComponent"],
            _profile_profile_edit_exam_analysis_exam_analysis_component__WEBPACK_IMPORTED_MODULE_8__["ExamAnalysisComponent"],
            _profile_profile_edit_profile_order_history_profile_order_history_component__WEBPACK_IMPORTED_MODULE_9__["ProfileOrderHistoryComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModulesPro"].forRoot(),
            ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_2__["ToastModule"].forRoot(),
            _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyCwMYILY491pwQdKQzCV8XfFT1O0E3aYFo'
            }),
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService_Local */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService_Local", function() { return AuthService_Local; });
/* harmony import */ var _Utility_shared_globalConstantShare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility-shared/globalConstantShare */ "./src/app/Utility-shared/globalConstantShare.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
/* harmony import */ var _Utility_shared_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../Utility-shared/utility.service */ "./src/app/Utility-shared/utility.service.ts");
/* harmony import */ var _Utility_shared_mainNavChange_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../Utility-shared/mainNavChange.model */ "./src/app/Utility-shared/mainNavChange.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let AuthService_Local = class AuthService_Local {
    constructor(http, router, utilityService) {
        this.http = http;
        this.router = router;
        this.utilityService = utilityService;
        this.urlConfig = _Utility_shared_globalConstantShare__WEBPACK_IMPORTED_MODULE_0__["GlobalConstantShare"].httpUrl; // 현재 설정ehls url 주소 설정
        this.authChange = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.teacherAuth = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.clearPaidToeflLists = [];
        this.clearShoppingCartLists = [];
        this.clearProfileInfoPassed = null;
        this.isAuthenticated = false;
        this.isteacherAuthenticated = false;
        this.shoppingCartLists = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.paidToeflLists = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.userInfoList = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    signup(user) {
        this.utilityService.loadingStateChanged.next(true);
        this.http.post(this.urlConfig + '/user/signup', user)
            .subscribe((result) => {
            localStorage.setItem('token', result.token);
            localStorage.setItem('userName', result.user.name);
            this.currentUser = result.user;
            this.authSuccess(result.user.permissionTag);
            this.utilityService.loadingStateChanged.next(false);
            this.shoppingCartLists.next(result.user.shoppingCartLists);
            this.paidToeflLists.next(result.user.paidToeflLists);
            this.router.navigate(['/']);
        }, error => { this.handleError(error); });
    }
    login(user) {
        this.utilityService.loadingStateChanged.next(true);
        this.http.post(this.urlConfig + '/user/login', user)
            .subscribe((result) => {
            localStorage.setItem('token', result.token);
            localStorage.setItem('userName', result.user.name);
            this.currentUser = result.user;
            this.authSuccess(result.user.permissionTag);
            this.utilityService.loadingStateChanged.next(false);
            this.shoppingCartLists.next(result.user.shoppingCartLists);
            this.userInfoList.next(result.user);
            this.paidToeflLists.next(result.user.paidToeflLists);
            this.router.navigate(['/']);
        }, error => { this.handleError(error); });
    }
    sociaLogin(user) {
        this.utilityService.loadingStateChanged.next(true);
        this.http.post(this.urlConfig + '/user/sociaLogin', user)
            .subscribe((result) => {
            localStorage.setItem('token', result.token);
            localStorage.setItem('userName', result.user.name);
            this.currentUser = result.user;
            this.authSuccess(result.user.permissionTag);
            this.utilityService.loadingStateChanged.next(false);
            this.shoppingCartLists.next(result.user.shoppingCartLists);
            this.userInfoList.next(result.user);
            this.paidToeflLists.next(result.user.paidToeflLists);
            this.router.navigate(['/']);
        }, error => { this.handleError(error); });
    }
    handleError(error) {
        console.log('에러 메세지', error);
        this.authChange.next(false);
        this.utilityService.loadingStateChanged.next(false);
        return;
    }
    authSuccess(teacherAuth) {
        this.authChange.next(true);
        console.log(this.authChange);
        if (localStorage.getItem('token') !== null) {
            this.isAuthenticated = true;
        }
        if (teacherAuth === 'teacher') {
            this.teacherAuth.next(true);
            this.isteacherAuthenticated = true;
        }
        else {
            this.teacherAuth.next(false);
            this.isteacherAuthenticated = false;
        }
        this.router.navigate(['/']);
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        this.authChange.next(false); // 사용자 인증 logout
        this.teacherAuth.next(false); // teacher permission 초기화
        this.isAuthenticated = false; // 인증 취소
        this.isteacherAuthenticated = false; // 관리자 선생님 인증 취소
        this.paidToeflLists.next(this.clearPaidToeflLists); // paid ToeflList 초기화
        this.shoppingCartLists.next(this.clearShoppingCartLists); // shopping cart list 초기화
        this.mainNavModel = new _Utility_shared_mainNavChange_model__WEBPACK_IMPORTED_MODULE_6__["MainNavModel"](false, true); // 인증 clear
        this.utilityService.mainNavChanged.next(this.mainNavModel); // main 화면 navigation활성화
        this.router.navigate(['/']); // main 홈페이지 화면으로 돌아감
    }
    isAuth() {
        console.log(this.isAuthenticated);
        return this.isAuthenticated;
    }
    isTecherAuth() {
        return this.isteacherAuthenticated; // 선생님 관리자 모드인 경우 장바구니버튼과 purchase버튼을 보여주지 않을목적으로 설정됨
    }
    getUserName() {
        console.log('현재 사용자 정보');
        this.userName = localStorage.getItem('userName');
        return this.userName;
    }
    getUserInfo() {
        return this.currentUser;
    }
};
AuthService_Local = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _Utility_shared_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"]])
], AuthService_Local);



/***/ }),

/***/ "./src/app/auth/authentication.component.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/authentication.component.ts ***!
  \**************************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let AuthenticationComponent = class AuthenticationComponent {
    constructor() { }
};
AuthenticationComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-authentication',
        template: `
         <router-outlet></router-outlet>
  `
    }),
    __metadata("design:paramtypes", [])
], AuthenticationComponent);



/***/ }),

/***/ "./src/app/auth/contact/contact.component.html":
/*!*****************************************************!*\
  !*** ./src/app/auth/contact/contact.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Section: Contact v.1 -->\n<section class=\"view\">\n\n  <!-- Section heading -->\n  <h2 class=\"h1-responsive font-weight-bold text-center my-5\">Contact us</h2>\n  <!-- Section description -->\n  <p class=\"text-center w-responsive mx-auto pb-5\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n    Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam\n    eum porro a pariatur veniam.</p>\n\n<div class=\"col-md-10 mx-auto\">\n  <!-- Grid row -->\n      <div class=\"row\">\n          <!-- Grid column -->\n        <div class=\"col-md-5 mb-lg-0\">\n          <mdb-card>\n\n            <mdb-card-body>\n              <!--Header-->\n              <div class=\"form-header blue accent-1\">\n                <h3>\n                  <i class=\"fas fa-envelope\"></i> Write to us:</h3>\n              </div>\n\n              <p>We'll write rarely, but only the best content.</p>\n              <br>\n\n              <!--Body-->\n              <div class=\"md-form\">\n                <i class=\"fas fa-user prefix grey-text\"></i>\n                <input mdbInputDirective type=\"text\" id=\"form3\" class=\"form-control\">\n                <label for=\"form3\">Your name</label>\n              </div>\n\n              <div class=\"md-form\">\n                <i class=\"fas fa-envelope prefix grey-text\"></i>\n                <input mdbInputDirective type=\"text\" id=\"form2\" class=\"form-control\">\n                <label for=\"form2\">Your email</label>\n              </div>\n\n              <div class=\"md-form\">\n                <i class=\"fas fa-tag prefix grey-text\"></i>\n                <input mdbInputDirective type=\"text\" id=\"form32\" class=\"form-control\">\n                <label for=\"form34\">Subject</label>\n              </div>\n\n              <div class=\"md-form\">\n                <i class=\"fas fa-pencil-alt prefix grey-text\"></i>\n                <textarea mdbInputDirective type=\"text\" id=\"form8\" class=\"md-textarea\"></textarea>\n                <label for=\"form8\">Icon Prefix</label>\n              </div>\n\n              <div class=\"text-center\">\n                <button mdbBtn color=\"light-blue\" class=\"waves-light\" mdbWavesEffect>Submit</button>\n              </div>\n\n            </mdb-card-body>\n\n          </mdb-card>\n          <!--Form with header-->\n\n        </div>\n        <!-- Grid column -->\n  <!--Grid column-->\n  <div class=\"col-lg-7\">\n\n    <!--Google map-->\n    <agm-map [zoom]=\"16\" class=\"z-depth-1-half map-container\" style=\"height: 400px;\"[latitude]=\"map.lat\" [longitude]=\"map.lng\">\n      <agm-marker [latitude]=\"map.lat\" [longitude]=\"map.lng\"></agm-marker>\n    </agm-map>\n\n    <br>\n    <!--Buttons-->\n    <div class=\"row text-center\">\n      <div class=\"col-md-4\">\n        <a mdbBtn floating=\"true\" color=\"blue\" class=\"accent-1 waves-light\" mdbWavesEffect>\n          <i class=\"fas fa-map-marked\"></i>\n        </a>\n        <p>San Francisco, CA 94126</p>\n        <p>United States</p>\n      </div>\n\n      <div class=\"col-md-4\">\n        <a mdbBtn floating=\"true\" color=\"blue\" class=\"accent-1 waves-light\" mdbWavesEffect>\n          <i class=\"fas fa-phone\"></i>\n        </a>\n        <p>+ 01 234 567 89</p>\n        <p>Mon - Fri, 8:00-22:00</p>\n      </div>\n\n      <div class=\"col-md-4\">\n        <a mdbBtn floating=\"true\" color=\"blue\" class=\"accent-1 waves-light\" mdbWavesEffect>\n          <i class=\"fas fa-envelope\"></i>\n        </a>\n        <p>info@gmail.com</p>\n        <p>sale@gmail.com</p>\n      </div>\n    </div>\n\n      </div>\n\n    </div>\n  <!-- Grid row -->\n </div>\n</section>\n<!-- Section: Contact v.1 -->\n"

/***/ }),

/***/ "./src/app/auth/contact/contact.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/auth/contact/contact.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n  position: fixed;\n  top: 5rem;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.map-container-section {\n  overflow: hidden;\n  padding-bottom: 56.25%;\n  position: relative;\n  height: 0; }\n\n.map-container-section iframe {\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmNoZW9saGEvRGVza3RvcC9leGFtc2ltdjIuMC4wLXB1Ymxpc2hlZC9zcmMvYXBwL2F1dGgvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVMsRUFBQTs7QUFHWDtFQUNFLGdCQUFlO0VBQ2Ysc0JBQXFCO0VBQ3JCLGtCQUFpQjtFQUNqQixTQUFRLEVBQUE7O0FBRVY7RUFDRSxPQUFNO0VBQ04sTUFBSztFQUNMLFlBQVc7RUFDWCxXQUFVO0VBQ1Ysa0JBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnZpZXcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNXJlbTtcbiAgbGVmdDowO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG4ubWFwLWNvbnRhaW5lci1zZWN0aW9uIHtcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICBwYWRkaW5nLWJvdHRvbTo1Ni4yNSU7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBoZWlnaHQ6MDtcbn1cbi5tYXAtY29udGFpbmVyLXNlY3Rpb24gaWZyYW1lIHtcbiAgbGVmdDowO1xuICB0b3A6MDtcbiAgaGVpZ2h0OjEwMCU7XG4gIHdpZHRoOjEwMCU7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/auth/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ContactComponent = class ContactComponent {
    constructor() {
        this.map = {
            lat: 37.368889,
            lng: 126.929667
        };
    }
    ngOnInit() {
    }
};
ContactComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! ./contact.component.html */ "./src/app/auth/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/auth/contact/contact.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!--Main Layout-->\n\n<div class=\"view\">\n        <div class=\"full-bg-img\">\n            <div class=\"mask rgba-black-strong flex-center\">\n                <div class=\"container\">\n                        <div class=\"form-gradient col-md-6 mx-auto\">\n                                <!--Form with header-->\n                                <div class=\"card\">\n\n                                    <!--Header-->\n                                    <div class=\"header pt-3 blue-gradient z-depth-2\">\n\n                                        <div class=\"row d-flex justify-content-center\">\n                                            <h3 class=\"white-text mb-3 pt-3 font-weight-bold\">Log in</h3>\n                                        </div>\n\n                                        <div class=\"row mt-2 mb-3 d-flex justify-content-center\">\n                                            <!--Facebook-->\n                                            <a class=\"btn-floating btn-lg purple-gradient waves-light\" (click)=\"socialLogin('facebook')\" mdbWavesEffect><i class=\"fa fa-facebook\"></i></a>\n                                            <a class=\"btn-floating btn-lg purple-gradient waves-light\" mdbWavesEffect><i class=\"fa fa-twitter\"></i></a>\n                                            <a class=\"btn-floating btn-lg purple-gradient waves-light\" (click)=\"socialLogin('google')\" mdbWavesEffect><i class=\"fa fa-google-plus\"></i></a>\n                                        </div>\n\n                                    </div>\n                                    <!--Header-->\n\n                                    <div class=\"card-body mx-4 mt-4\">\n                                        <!-- SigUp form -->\n                                        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                                            <div class=\"md-form\">\n                                            <i class=\"fa fa-envelope prefix grey-text\"></i>\n                                            <input\n                                                    type=\"email\"\n                                                    formControlName=\"email\"\n                                                    id=\"email\"\n                                                    class=\"form-control\"\n                                                    mdbInputDirective\n                                            >\n                                            <label for=\"email\">Your email</label>\n                                            </div>\n                                            <div class=\"md-form pb-1 pb-md-3\">\n                                                <i class=\"fa fa-lock prefix grey-text\"></i>\n                                                <input\n                                                    type=\"password\"\n                                                    formControlName=\"password\"\n                                                    id=\"password\"\n                                                    class=\"form-control\"\n                                                    mdbInputDirective\n                                                >\n                                                <label for=\"Form-pass3\">Your password</label>\n                                                <p class=\"font-small grey-text d-flex justify-content-end\">Forgot <a href=\"#\" class=\"dark-grey-text ml-2 font-weight-bold\"> Password?</a></p>\n                                            </div>\n                                            <!--Grid row-->\n                                            <div class=\"row d-flex align-items-center mb-4\">\n\n                                                <!--Grid column-->\n                                                <div class=\"col-md-1 col-md-5 d-flex align-items-start\">\n                                                    <div class=\"text-center\">\n                                                        <button *ngIf=\"!isLoading\" type=\"submit\" class=\"btn btn-grey btn-rounded z-depth-1\">Log in</button>\n\n                                                        <!--Big blue-->\n                                                        <mdb-spinner *ngIf=\"isLoading\" spinnerType=\"big crazy\"></mdb-spinner>\n\n                                                    </div>\n                                                </div>\n                                                <!--Grid column-->\n\n                                                <!--Grid column-->\n                                                <div class=\"col-md-7\">\n                                                    <p class=\"font-small grey-text d-flex justify-content-start mt-1\">Don't have an account? <a href=\"#\" class=\"dark-grey-text ml-3 font-weight-bold\"> Sign up</a></p>\n                                                </div>\n                                                <!--Grid column-->\n\n                                            </div>\n                                            <!--Grid row-->\n                                        </form>\n                                        <!--/Form with header-->\n                                    </div>\n                                </div>\n                        </div>\n                </div>\n            </div>\n        </div>\n\n</div>\n\n<!--/Main layout-->\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n  background: url('students.jpg') no-repeat center center;\n  background-size: cover;\n  height: 100vh; }\n\n.form-gradient .font-small {\n  font-size: 0.8rem; }\n\n.form-gradient .header {\n  border-top-left-radius: .3rem;\n  border-top-right-radius: .3rem; }\n\n.form-gradient input[type=text]:focus:not([readonly]) {\n  border-bottom: 1px solid #fd9267;\n  box-shadow: 0 1px 0 0 #fd9267; }\n\n.form-gradient input[type=text]:focus:not([readonly]) + label {\n  color: #4f4f4f; }\n\n.form-gradient input[type=password]:focus:not([readonly]) {\n  border-bottom: 1px solid #fd9267;\n  box-shadow: 0 1px 0 0 #fd9267; }\n\n.form-gradient input[type=password]:focus:not([readonly]) + label {\n  color: #4f4f4f; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmNoZW9saGEvRGVza3RvcC9leGFtc2ltdjIuMC4wLXB1Ymxpc2hlZC9zcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1REFBc0U7RUFDdEUsc0JBQXNCO0VBQ3RCLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLDZCQUE2QjtFQUM3Qiw4QkFBOEIsRUFBQTs7QUFFaEM7RUFDRSxnQ0FBZ0M7RUFFaEMsNkJBQTZCLEVBQUE7O0FBRS9CO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGdDQUFnQztFQUVoQyw2QkFBNkIsRUFBQTs7QUFFL0I7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZXcge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc3R1ZGVudHMuanBnXCIpbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5mb3JtLWdyYWRpZW50IC5mb250LXNtYWxsIHtcbiAgZm9udC1zaXplOiAwLjhyZW07IH1cblxuLmZvcm0tZ3JhZGllbnQgLmhlYWRlciB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC4zcmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjNyZW07IH1cblxuLmZvcm0tZ3JhZGllbnQgaW5wdXRbdHlwZT10ZXh0XTpmb2N1czpub3QoW3JlYWRvbmx5XSkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZkOTI2NztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIDAgI2ZkOTI2NztcbiAgYm94LXNoYWRvdzogMCAxcHggMCAwICNmZDkyNjc7IH1cblxuLmZvcm0tZ3JhZGllbnQgaW5wdXRbdHlwZT10ZXh0XTpmb2N1czpub3QoW3JlYWRvbmx5XSkgKyBsYWJlbCB7XG4gIGNvbG9yOiAjNGY0ZjRmOyB9XG5cbi5mb3JtLWdyYWRpZW50IGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzOm5vdChbcmVhZG9ubHldKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmQ5MjY3O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgMCAjZmQ5MjY3O1xuICBib3gtc2hhZG93OiAwIDFweCAwIDAgI2ZkOTI2NzsgfVxuXG4uZm9ybS1ncmFkaWVudCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1czpub3QoW3JlYWRvbmx5XSkgKyBsYWJlbCB7XG4gIGNvbG9yOiAjNGY0ZjRmOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utility_shared_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Utility-shared/utility.service */ "./src/app/Utility-shared/utility.service.ts");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../user.model */ "./src/app/auth/user.model.ts");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 // google and facebook 인증위한 서비스



let LoginComponent = class LoginComponent {
    constructor(fb, authService, socialAuthService, utilityService) {
        this.fb = fb;
        this.authService = authService;
        this.socialAuthService = socialAuthService;
        this.utilityService = utilityService;
        this.pwdPattern = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$';
        this.teacherAuth = false;
        this.isLoading = false;
    }
    ngOnInit() {
        console.log('this is the login clicked');
        this.loadingSubscriptiion = this.utilityService.loadingStateChanged.subscribe(loadingStatus => {
            this.isLoading = loadingStatus;
        });
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)
                ]]
        });
    }
    onSubmit() {
        console.log(this.loginForm.value.email);
        const user = new _user_model__WEBPACK_IMPORTED_MODULE_5__["User"](this.loginForm.value.email, this.loginForm.value.password);
        this.authService.login(user);
        this.loginForm.reset();
    }
    socialLogin(socialPlatform) {
        let socialPlaformProvider;
        const currentDate = new Date();
        const updatedDate = new Date();
        const permissionTag = 'student';
        const toeflId = '';
        const paymentId = '';
        const paidToeflLists = [];
        const shoppingCartLists = [];
        const wishLists = [];
        if (socialPlatform === 'facebook') {
            socialPlaformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform === 'google') {
            socialPlaformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlaformProvider).then((userData) => {
            const user = new _user_model__WEBPACK_IMPORTED_MODULE_5__["User"](userData.email, userData.id, userData.name, permissionTag, currentDate, updatedDate, userData.provider);
            console.log(socialPlatform + ' sign in data : ', userData);
            console.log('사용자 아이디: ', userData.id);
            console.log('사용자 이름: ', userData.name);
            console.log('사용자 이메일: ', userData.email);
            console.log('사용자 token: ', userData.token);
            console.log('사용자 image: ', userData.image);
            console.log('사용자 provider: ', userData.provider);
            this.authService.sociaLogin(user);
        });
    }
    ngOnDestroy() {
        this.loadingSubscriptiion.unsubscribe();
    }
};
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService_Local"],
        angular_6_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _Utility_shared_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/logout/logout.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/logout/logout.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--Main Layout-->\n\n<div class=\"view\">\n    <div class=\"full-bg-img\">\n        <div class=\"mask rgba-black-strong flex-center\">\n            <div class=\"container\">\n                <div class=\"card col-md-4 mx-auto\">\n                    <h6 class=\"card-header primary-color white-text text-center rounded z-depth-2\">LogOut</h6>\n                    <div class=\"card-body text-center\">\n                        <p class=\"card-text text-center\">Do you really want to logout?</p>\n                        <br>\n                          <button class=\"btn btn-primary waves-light z-depth-2\" mdbWavesEffect (click)=\"onLogout()\" ><i class=\"fa fa-sign-out mr-1\"></i>Yes</button>\n                          <button class=\"btn btn-default waves-light z-depth-2\" mdbWavesEffect\n                                  \n                          (click)=\"onStay()\">No<i class=\"fa fa-sign-in ml-1\"></i></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<!--/Main layout-->\n"

/***/ }),

/***/ "./src/app/auth/logout/logout.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/logout/logout.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n  background: url('university.jpg') no-repeat center center;\n  background-size: cover;\n  height: 100vh; }\n\n.navbar {\n  z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmNoZW9saGEvRGVza3RvcC9leGFtc2ltdjIuMC4wLXB1Ymxpc2hlZC9zcmMvYXBwL2F1dGgvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlEQUF5RTtFQUN6RSxzQkFBc0I7RUFDdEIsYUFBYSxFQUFBOztBQUVmO0VBQ0UsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udmlldyB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy91bml2ZXJzaXR5LmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5uYXZiYXIge1xuICB6LWluZGV4OiAxO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/auth/logout/logout.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/logout/logout.component.ts ***!
  \*************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _Utility_shared_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utility-shared/utility.service */ "./src/app/Utility-shared/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let LogoutComponent = class LogoutComponent {
    constructor(location, authService, utilityService, router, route) {
        this.location = location;
        this.authService = authService;
        this.utilityService = utilityService;
        this.router = router;
        this.route = route;
    }
    onLogout() {
        this.utilityService.audioPlaySevice('', '0', false);
        this.authService.logout();
    }
    onStay() {
        this.location.back();
    }
};
LogoutComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: __webpack_require__(/*! ./logout.component.html */ "./src/app/auth/logout/logout.component.html"),
        styles: [__webpack_require__(/*! ./logout.component.scss */ "./src/app/auth/logout/logout.component.scss")]
    }),
    __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
        _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService_Local"],
        _Utility_shared_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
], LogoutComponent);



/***/ }),

/***/ "./src/app/auth/profile/profile-edit/edit-user-profile/edit-user-profile.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/auth/profile/profile-edit/edit-user-profile/edit-user-profile.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n    <div class=\"col-md-11 mx-auto\">\n      <mdb-card class=\"testimonial-card\">\n        <div class=\"card-up indigo lighten-1\">\n        </div>\n        <div class=\"avatar mx-auto\">\n          <img src=\"https://mdbootstrap.com/img/Photos/Avatars/img%20%2810%29.jpg\" class=\"rounded-circle\">\n        </div>\n\n        <mdb-card-body>\n\n          <mdb-card-title>\n            <h4>{{ userInfo.name }}</h4>\n          </mdb-card-title>\n          <hr>\n          <p>Email: {{ userInfo.email }}</p>\n          <hr>\n          <p>Password 변경 부위</p>\n          <hr>\n          <p>Current Address 삽입부위</p>\n          <hr>\n          <p>Shipping Address 삽입부위</p>\n        </mdb-card-body>\n      </mdb-card>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/auth/profile/profile-edit/edit-user-profile/edit-user-profile.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/auth/profile/profile-edit/edit-user-profile/edit-user-profile.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcHJvZmlsZS9wcm9maWxlLWVkaXQvZWRpdC11c2VyLXByb2ZpbGUvZWRpdC11c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/profile/profile-edit/edit-user-profile/edit-user-profile.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/auth/profile/profile-edit/edit-user-profile/edit-user-profile.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EditUserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserProfileComponent", function() { return EditUserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../user.model */ "./src/app/auth/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let EditUserProfileComponent = class EditUserProfileComponent {
    constructor() { }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", _user_model__WEBPACK_IMPORTED_MODULE_1__["User"])
], EditUserProfileComponent.prototype, "userInfo", void 0);
EditUserProfileComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-edit-user-profile',
        template: __webpack_require__(/*! ./edit-user-profile.component.html */ "./src/app/auth/profile/profile-edit/edit-user-profile/edit-user-profile.component.html"),
        styles: [__webpack_require__(/*! ./edit-user-profile.component.scss */ "./src/app/auth/profile/profile-edit/edit-user-profile/edit-user-profile.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], EditUserProfileComponent);



/***/ }),

/***/ "./src/app/auth/profile/profile-edit/exam-analysis/exam-analysis.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/auth/profile/profile-edit/exam-analysis/exam-analysis.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  exam-analysis works!\n</p>\n"

/***/ }),

/***/ "./src/app/auth/profile/profile-edit/exam-analysis/exam-analysis.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/auth/profile/profile-edit/exam-analysis/exam-analysis.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcHJvZmlsZS9wcm9maWxlLWVkaXQvZXhhbS1hbmFseXNpcy9leGFtLWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/profile/profile-edit/exam-analysis/exam-analysis.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/auth/profile/profile-edit/exam-analysis/exam-analysis.component.ts ***!
  \************************************************************************************/
/*! exports provided: ExamAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamAnalysisComponent", function() { return ExamAnalysisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ExamAnalysisComponent = class ExamAnalysisComponent {
    constructor() { }
    ngOnInit() {
    }
};
ExamAnalysisComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-exam-analysis',
        template: __webpack_require__(/*! ./exam-analysis.component.html */ "./src/app/auth/profile/profile-edit/exam-analysis/exam-analysis.component.html"),
        styles: [__webpack_require__(/*! ./exam-analysis.component.scss */ "./src/app/auth/profile/profile-edit/exam-analysis/exam-analysis.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ExamAnalysisComponent);



/***/ }),

/***/ "./src/app/auth/profile/profile-edit/exam-history/exam-history.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/auth/profile/profile-edit/exam-history/exam-history.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  exam-history works!\n</p>\n"

/***/ }),

/***/ "./src/app/auth/profile/profile-edit/exam-history/exam-history.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/auth/profile/profile-edit/exam-history/exam-history.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcHJvZmlsZS9wcm9maWxlLWVkaXQvZXhhbS1oaXN0b3J5L2V4YW0taGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/profile/profile-edit/exam-history/exam-history.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/auth/profile/profile-edit/exam-history/exam-history.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ExamHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamHistoryComponent", function() { return ExamHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ExamHistoryComponent = class ExamHistoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
ExamHistoryComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-exam-history',
        template: __webpack_require__(/*! ./exam-history.component.html */ "./src/app/auth/profile/profile-edit/exam-history/exam-history.component.html"),
        styles: [__webpack_require__(/*! ./exam-history.component.scss */ "./src/app/auth/profile/profile-edit/exam-history/exam-history.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ExamHistoryComponent);



/***/ }),

/***/ "./src/app/auth/profile/profile-edit/profile-edit.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/auth/profile/profile-edit/profile-edit.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"view\">\n\n        <div class=\"row t-1\">\n            <div class=\"col-md-11 p-0 mx-auto\">\n                    <mdb-tabset #staticTabs [buttonClass]=\"'md-tabs tabs-6 pills-secondary blue lighten-2'\" [contentClass]=\"''\">\n\n                            <mdb-tab heading=\"Edit User Profile\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                        <br>\n                                        <app-edit-user-profile [userInfo]=\"userInfo\"></app-edit-user-profile>\n                                    </div>\n                                </div>\n                            </mdb-tab>\n\n                            <mdb-tab heading=\"Exam History\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-12 mx-auto\">\n                                        <br>\n                                        <app-exam-history></app-exam-history>\n                                    </div>\n                                </div>\n                            </mdb-tab>\n\n                            <mdb-tab heading=\"Exam Analysis\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-12 mx-auto\">\n                                        <br>\n                                       <app-exam-analysis></app-exam-analysis>\n                                    </div>\n                                </div>\n                            </mdb-tab>\n\n                            <mdb-tab heading=\"Exam Order Histroy\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-12 mx-auto\">\n                                        <br>\n                                        <app-profile-order-history [paidToeflLists]=\"paidToeflLists\" [numberOfPaginators]=\"numberOfPaginators\" [paginators]=\"paginators\" [totalAmount]=\"totalAmount\"></app-profile-order-history>\n                                    </div>\n                                </div>\n                            </mdb-tab>\n\n                    </mdb-tabset>\n            </div>\n        </div>\n        <div class=\"row t-1\">\n          <div class=\"col-md-11 text-center mx-auto\">\n              <button mdbBtn type=\"button\" color=\"primary\" (click)=\"onReturn()\" mdbWavesEffect><mdb-icon icon=\"magic\" class=\"mr-1\"></mdb-icon>Confirmation</button>\n          </div>\n        </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/profile/profile-edit/profile-edit.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/auth/profile/profile-edit/profile-edit.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n  position: fixed;\n  top: 5rem;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmNoZW9saGEvRGVza3RvcC9leGFtc2ltdjIuMC4wLXB1Ymxpc2hlZC9zcmMvYXBwL2F1dGgvcHJvZmlsZS9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcHJvZmlsZS9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udmlldyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1cmVtO1xuICBsZWZ0OjA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/profile/profile-edit/profile-edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/auth/profile/profile-edit/profile-edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProfileEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditComponent", function() { return ProfileEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _payment_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../payment/shoppingcart.service */ "./src/app/payment/shoppingcart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ProfileEditComponent = class ProfileEditComponent {
    constructor(authService, router, shoppingCartService) {
        this.authService = authService;
        this.router = router;
        this.shoppingCartService = shoppingCartService;
        this.userName = null;
        this.itemsPerPage = 3;
        this.paginators = [];
        this.currentDate = new Date();
        this.totalAmount = 0;
        this.paidToeflLists = [];
    }
    ngOnInit() {
        this.userInfo = this.authService.getUserInfo(); // 로그인한 사용자 정보 가저오기
        console.log('처음 시동시 사용자 정보', this.userInfo);
        // 만일 userInfo가 없으면 paypal이나 stripe에서 결재후 사용자 정보를 받아야함
        if (!this.userInfo) {
            this.userInfo = this.shoppingCartService.getUserInfoListFromShoppingCartService();
            this.userName = this.userInfo.name;
            console.log('결재후 다시 되돌아 온 사용자 정보', this.userInfo.name);
        }
        else {
            this.userName = this.userInfo.name;
        }
        this.paidToeflLists = this.shoppingCartService.getPaidToefltLists();
        if (this.paidToeflLists.length !== 0) {
            for (const paidToeflitem of this.paidToeflLists) {
                this.totalAmount += paidToeflitem.examPrice;
            }
            this.calculatePagenator(this.paidToeflLists);
        }
    }
    calculatePagenator(paidToeflists) {
        // 모든 Paid Toefl List명단에 관한 pagenator 산출
        if (paidToeflists.length % this.itemsPerPage === 0) {
            this.numberOfPaginators = Math.floor(paidToeflists.length / this.itemsPerPage);
        }
        else {
            this.numberOfPaginators = Math.floor(paidToeflists.length / this.itemsPerPage + 1);
        }
        for (let i = 1; i <= this.numberOfPaginators; i++) {
            this.paginators.push(i);
        }
    }
    onReturn() {
        this.router.navigate(['/']);
    }
};
ProfileEditComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-profile-edit',
        template: __webpack_require__(/*! ./profile-edit.component.html */ "./src/app/auth/profile/profile-edit/profile-edit.component.html"),
        styles: [__webpack_require__(/*! ./profile-edit.component.scss */ "./src/app/auth/profile/profile-edit/profile-edit.component.scss")]
    }),
    __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService_Local"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _payment_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingcartService"]])
], ProfileEditComponent);



/***/ }),

/***/ "./src/app/auth/profile/profile-edit/profile-order-history/profile-order-history.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/auth/profile/profile-edit/profile-order-history/profile-order-history.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"card card-cascade narrower mt-0\">\n        <table class=\"table table-hover table-responsive-md mb-0 text-center\">\n            <thead>\n            <tr>\n                <th scope=\"th-lg\">Exam No<mdb-icon class=\"ml-1\" icon=\"sort\" (click)=\"sortBy('examNo')\"></mdb-icon></th>\n                <th class=\"th-lg\">Exam Type</th>\n                <th class=\"th-lg\">Exam Level<mdb-icon class=\"ml-1\" icon=\"sort\" (click)=\"sortBy('examLevel')\"></mdb-icon></th>\n                <th class=\"th-lg\">Purchased Price<mdb-icon class=\"ml-1\" icon=\"sort\" (click)=\"sortBy('examPrice')\"></mdb-icon></th>\n                <th class=\"th-lg\">Purchased Date</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let paidToeflItem of paidToeflLists.slice().reverse(); let myIndex = index\">\n                <td *ngIf=\"myIndex >= firstVisibleIndex && myIndex <= lastVisibleIndex\" class=\"align-middle\">{{paidToeflItem.examNo}}</td>\n                <td *ngIf=\"myIndex >= firstVisibleIndex && myIndex <= lastVisibleIndex\" class=\"align-middle\">\n                        <img src=\"https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg\"\n                        class=\"avatar rounded-circle z-depth-1-half\"></td>\n                <td *ngIf=\"myIndex >= firstVisibleIndex && myIndex <= lastVisibleIndex\" class=\"align-middle\">{{paidToeflItem.examLevel}}</td>\n                <td *ngIf=\"myIndex >= firstVisibleIndex && myIndex <= lastVisibleIndex\" class=\"align-middle\">{{paidToeflItem.examPrice | currency: \"USD\"}}</td>\n                <td *ngIf=\"myIndex >= firstVisibleIndex && myIndex <= lastVisibleIndex\" class=\"align-middle\">2018.08.23</td>\n            </tr>\n            </tbody>\n        </table>\n\n    </div>\n\n    <hr class=\"my-0\">\n\n    <div class=\"d-flex justify-content-center\">\n      <nav class=\"my-4 pt-2\">\n        <ul class=\"pagination pagination-circle pg-purple mb-0\">\n          <li class=\"page-item clearfix d-none d-md-block\" (click)=\"firstPage()\" [ngClass]=\"{disabled: activePage == 1}\">\n            <a class=\"page-link\">First</a>\n          </li>\n          <li class=\"page-item\" (click)=\"previousPage($event)\" [ngClass]=\"{disabled: activePage == 1}\">\n            <a class=\"page-link\" aria-label=\"Previous\">\n              <span aria-hidden=\"true\">&laquo;</span>\n              <span class=\"sr-only\">Previous</span>\n            </a>\n          </li>\n          <li #pages *ngFor=\"let page of paginators | slice:firstVisiblePaginator:lastVisiblePaginator; let i = index\" class=\"page-item\" [ngClass]=\"{active: i + firstVisiblePaginator + 1 == activePage}\">\n              <a class=\"page-link waves-light\" (click)=\"changePage($event)\" mdbWavesEffect>{{page}}</a>\n          </li>\n          <li class=\"page-item\" (click)=\"nextPage($event)\" [ngClass]=\"{disabled: activePage == numberOfPaginators}\">\n            <a class=\"page-link\" aria-label=\"Next\">\n              <span aria-hidden=\"true\">&raquo;</span>\n              <span class=\"sr-only\">Next</span>\n            </a>\n          </li>\n          <li class=\"page-item clearfix d-none d-md-block\" (click)=\"lastPage()\" [ngClass]=\"{disabled: activePage == numberOfPaginators}\">\n            <a class=\"page-link\">Last</a>\n          </li>\n\n        </ul>\n      </nav>\n\n\n    </div>\n\n"

/***/ }),

/***/ "./src/app/auth/profile/profile-edit/profile-order-history/profile-order-history.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/auth/profile/profile-edit/profile-order-history/profile-order-history.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcHJvZmlsZS9wcm9maWxlLWVkaXQvcHJvZmlsZS1vcmRlci1oaXN0b3J5L3Byb2ZpbGUtb3JkZXItaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/profile/profile-edit/profile-order-history/profile-order-history.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/auth/profile/profile-edit/profile-order-history/profile-order-history.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ProfileOrderHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileOrderHistoryComponent", function() { return ProfileOrderHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ProfileOrderHistoryComponent = class ProfileOrderHistoryComponent {
    constructor(ref) {
        this.ref = ref;
        this.paginators = [];
        this.itemsPerPage = 3;
        this.numberOfVisiblePaginators = 10;
        this.activePage = 1;
        this.firstVisibleIndex = 1;
        this.lastVisibleIndex = this.itemsPerPage;
        this.firstVisiblePaginator = 0;
        this.lastVisiblePaginator = this.numberOfVisiblePaginators;
        this.sorted = false;
    }
    ngOnInit() { }
    sortBy(by) {
        this.paidToeflLists.sort((a, b) => {
            if (a[by] < b[by]) {
                return this.sorted ? 1 : -1;
            }
            if (a[by] > b[by]) {
                return this.sorted ? -1 : 1;
            }
            return 0;
        });
        this.sorted = !this.sorted;
    }
    changePage(event) {
        if (event.target.text >= 1 && event.target.text <= this.numberOfPaginators) {
            this.activePage = +event.target.text;
            this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
            this.lastVisibleIndex = this.activePage * this.itemsPerPage;
        }
    }
    nextPage(event) {
        if (this.pages.last.nativeElement.classList.contains('active')) {
            if ((this.numberOfPaginators - this.numberOfVisiblePaginators) >= this.lastVisiblePaginator) {
                this.firstVisiblePaginator += this.numberOfVisiblePaginators;
                this.lastVisiblePaginator += this.numberOfVisiblePaginators;
            }
            else {
                this.firstVisiblePaginator += this.numberOfVisiblePaginators;
                this.lastVisiblePaginator = this.numberOfPaginators;
            }
        }
        this.activePage += 1;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
    }
    previousPage(event) {
        if (this.pages.first.nativeElement.classList.contains('active')) {
            if ((this.lastVisiblePaginator - this.firstVisiblePaginator) === this.numberOfVisiblePaginators) {
                this.firstVisiblePaginator -= this.numberOfVisiblePaginators;
                this.lastVisiblePaginator -= this.numberOfVisiblePaginators;
            }
            else {
                this.firstVisiblePaginator -= this.numberOfVisiblePaginators;
                this.lastVisiblePaginator -= (this.numberOfPaginators % this.numberOfVisiblePaginators);
            }
        }
        this.activePage -= 1;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
    }
    firstPage() {
        this.activePage = 1;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
        this.firstVisiblePaginator = 0;
        this.lastVisiblePaginator = this.numberOfVisiblePaginators;
    }
    lastPage() {
        this.activePage = this.numberOfPaginators;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
        if (this.numberOfPaginators % this.numberOfVisiblePaginators === 0) {
            this.firstVisiblePaginator = this.numberOfPaginators - this.numberOfVisiblePaginators;
            this.lastVisiblePaginator = this.numberOfPaginators;
        }
        else {
            this.lastVisiblePaginator = this.numberOfPaginators;
            this.firstVisiblePaginator = this.lastVisiblePaginator -
                (this.numberOfPaginators % this.numberOfVisiblePaginators);
        }
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Array)
], ProfileOrderHistoryComponent.prototype, "paidToeflLists", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Number)
], ProfileOrderHistoryComponent.prototype, "totalAmount", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Number)
], ProfileOrderHistoryComponent.prototype, "numberOfPaginators", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Array)
], ProfileOrderHistoryComponent.prototype, "paginators", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('pages'),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
], ProfileOrderHistoryComponent.prototype, "pages", void 0);
ProfileOrderHistoryComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-profile-order-history',
        template: __webpack_require__(/*! ./profile-order-history.component.html */ "./src/app/auth/profile/profile-edit/profile-order-history/profile-order-history.component.html"),
        styles: [__webpack_require__(/*! ./profile-order-history.component.scss */ "./src/app/auth/profile/profile-edit/profile-order-history/profile-order-history.component.scss")]
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
], ProfileOrderHistoryComponent);



/***/ }),

/***/ "./src/app/auth/profile/purchased-history/purchased-history.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/auth/profile/purchased-history/purchased-history.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"view\">\n\n  <div class=\"col-md-11 mx-auto\">\n    <mdb-card cascade=\"true\" narrower=\"true\">\n        <div class=\"view-cascade gradient-card-header blue-gradient narrower z-depth-1-half\">\n          <div class=\"row\">\n            <div class=\"col-md-1\">\n                <div class=\"text-left\">\n                    <a mdbBtn floating=\"true\" size=\"sm\" gradient=\"blue\" (click)=\"onReturn()\" mdbWavesEffect><mdb-icon icon=\"angle-double-left\"></mdb-icon></a>\n                </div>\n            </div>\n            <div class=\"col-md-11 p-3\">\n                <div class=\"text-center\">\n                    <h4 class=\"white-text font-weight-bold text-uppercase mb-0\">\n                        Table with pagination</h4>\n                </div>\n            </div>\n          </div>\n        </div>\n      <div class=\"px-4\">\n        <table class=\"table table-hover table-responsive-md mb-0 text-center\">\n            <thead>\n            <tr>\n              <th scope=\"th-lg\">Exam No<mdb-icon class=\"ml-1\" icon=\"sort\" (click)=\"sortBy('examNo')\"></mdb-icon></th>\n              <th class=\"th-lg\">Exam Type</th>\n              <th class=\"th-lg\">Exam Level<mdb-icon class=\"ml-1\" icon=\"sort\" (click)=\"sortBy('examLevel')\"></mdb-icon></th>\n              <th class=\"th-lg\">Purchased Price<mdb-icon class=\"ml-1\" icon=\"sort\" (click)=\"sortBy('examPrice')\"></mdb-icon></th>\n              <th class=\"th-lg\">Purchased Date</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let paidToeflItem of elements; let i = index\">\n                <th *ngIf=\"i+1 >= firstItemIndex && i < lastItemIndex\" scope=\"row\" class=\"align-middle\">{{paidToeflItem.examNo}}</th>\n                <td *ngIf=\"i+1 >= firstItemIndex && i < lastItemIndex\"class=\"align-middle\">\n                        <img src=\"https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg\"\n                        class=\"avatar rounded-circle z-depth-1-half\"></td>\n                <td *ngIf=\"i+1 >= firstItemIndex && i < lastItemIndex\" class=\"align-middle\">{{paidToeflItem.examLevel}}</td>\n                <td *ngIf=\"i+1 >= firstItemIndex && i < lastItemIndex\" class=\"align-middle\">{{paidToeflItem.examPrice | currency: \"USD\"}}</td>\n                <td *ngIf=\"i+1 >= firstItemIndex && i < lastItemIndex\" class=\"align-middle\">{{paidToeflItem.paidDate | date }}</td>\n            </tr>\n            </tbody>\n            <tfoot class=\"grey lighten-5\" p-0>\n              <tr>\n                <td colspan=\"5\">\n                  <mdb-table-pagination\n                                        (nextPageClick)=\"onNextPageClick($event)\"\n                                        (previousPageClick)=\"onPreviousPageClick($event)\">\n                  </mdb-table-pagination>\n                </td>\n              </tr>\n\n            </tfoot>\n        </table>\n      </div>\n    </mdb-card>\n\n    <hr class=\"my-0\">\n\n    <div class=\"text-center\">\n          <button mdbBtn type=\"button\" color=\"primary\" (click)=\"onReturn()\" mdbWavesEffect><mdb-icon icon=\"magic\" class=\"mr-1\"></mdb-icon>Confirmation</button>\n      </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/profile/purchased-history/purchased-history.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/auth/profile/purchased-history/purchased-history.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n  position: fixed;\n  top: 5rem;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmNoZW9saGEvRGVza3RvcC9leGFtc2ltdjIuMC4wLXB1Ymxpc2hlZC9zcmMvYXBwL2F1dGgvcHJvZmlsZS9wdXJjaGFzZWQtaGlzdG9yeS9wdXJjaGFzZWQtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTTtFQUNOLFFBQVE7RUFDUixTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3Byb2ZpbGUvcHVyY2hhc2VkLWhpc3RvcnkvcHVyY2hhc2VkLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi52aWV3IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDVyZW07XG4gIGxlZnQ6MDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/profile/purchased-history/purchased-history.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/auth/profile/purchased-history/purchased-history.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PurchasedHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasedHistoryComponent", function() { return PurchasedHistoryComponent; });
/* harmony import */ var ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-uikit-pro-standard */ "./node_modules/ng-uikit-pro-standard/fesm2015/ng-uikit-pro-standard.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payment_shoppingcart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../payment/shoppingcart.service */ "./src/app/payment/shoppingcart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let PurchasedHistoryComponent = class PurchasedHistoryComponent {
    constructor(shoppingCartService, router, tableService, cdRef) {
        this.shoppingCartService = shoppingCartService;
        this.router = router;
        this.tableService = tableService;
        this.cdRef = cdRef;
        this.elements = [];
        this.previous = [];
        this.headElements = ['ID', 'First', 'Last', 'Handle'];
        this.sorted = false;
    }
    ngOnInit() {
        console.log('this is the purchased history');
        this.paidToeflLists = this.shoppingCartService.getPaidToefltLists();
        console.log(this.paidToeflLists);
        this.elements = this.paidToeflLists;
        this.tableService.setDataSource(this.elements);
        this.elements = this.tableService.getDataSource();
        this.previous = this.tableService.getDataSource();
    }
    ngAfterViewInit() {
        this.mdbTablePagination.setMaxVisibleItemsNumberTo(4);
        this.firstItemIndex = this.mdbTablePagination.firstItemIndex;
        this.lastItemIndex = this.mdbTablePagination.lastItemIndex;
        this.mdbTablePagination.calculateFirstItemIndex();
        this.mdbTablePagination.calculateLastItemIndex();
        this.cdRef.detectChanges();
    }
    onNextPageClick(data) {
        this.firstItemIndex = data.first;
        this.lastItemIndex = data.last;
    }
    onPreviousPageClick(data) {
        this.firstItemIndex = data.first;
        this.lastItemIndex = data.last;
    }
    onReturn() {
        this.router.navigate(['/']);
    }
    sortBy(by) {
        this.paidToeflLists.sort((a, b) => {
            if (a[by] < b[by]) {
                return this.sorted ? 1 : -1;
            }
            if (a[by] > b[by]) {
                return this.sorted ? -1 : 1;
            }
            return 0;
        });
        this.sorted = !this.sorted;
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_0__["MdbTablePaginationComponent"]),
    __metadata("design:type", ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_0__["MdbTablePaginationComponent"])
], PurchasedHistoryComponent.prototype, "mdbTablePagination", void 0);
PurchasedHistoryComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-purchased-history',
        template: __webpack_require__(/*! ./purchased-history.component.html */ "./src/app/auth/profile/purchased-history/purchased-history.component.html"),
        styles: [__webpack_require__(/*! ./purchased-history.component.scss */ "./src/app/auth/profile/purchased-history/purchased-history.component.scss")]
    }),
    __metadata("design:paramtypes", [_payment_shoppingcart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingcartService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_0__["MdbTableService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], PurchasedHistoryComponent);



/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--Main Layout-->\n<main>\n    <div class=\"view\">\n        <div class=\"full-bg-img\">\n            <div class=\"mask rgba-black-strong flex-center\">\n\n                  <!--Section: Live preview-->\n                  <div class=\"form-light col-md-4\">\n\n                    <!--Form without header-->\n                    <div class=\"card\">\n\n                        <div class=\"card-body mx-4\">\n\n                            <!--Header-->\n                            <div class=\"text-center\">\n                                <h3 class=\"white-text mb-5 blue-gradient waves-light z-depth-3 rounded\"><strong>Sign up</strong></h3>\n                            </div>\n\n                              <!-- SigUp form -->\n                                <form [formGroup]=\"signUpForm\" (ngSubmit)=\"onSubmit()\">\n                                    <div class=\"md-form\">\n                                      <i class=\"fa fa-envelope prefix grey-text\"></i>\n                                      <input\n                                            type=\"text\"\n                                            formControlName=\"name\"\n                                            id=\"name\"\n                                            class=\"form-control\"\n                                            mdbInputDirective\n                                      >\n                                      <label for=\"name\">Your Name</label>\n                                    </div>\n\n                                    <div class=\"md-form\">\n                                        <i class=\"fa fa-envelope prefix grey-text\"></i>\n                                        <input\n                                              type=\"email\"\n                                              formControlName=\"email\"\n                                              id=\"email\"\n                                              class=\"form-control\"\n                                              mdbInputDirective\n                                        >\n                                        <label for=\"email\">Your email</label>\n                                      </div>\n\n\n                                    <div class=\"md-form pb-3\">\n                                      <i class=\"fa fa-lock prefix grey-text\"></i>\n                                      <input\n                                            type=\"password\"\n                                            formControlName=\"password\"\n                                            id=\"password\"\n                                            class=\"form-control\"\n                                            mdbInputDirective\n                                      >\n                                      <label for=\"password\">Your password</label>\n\n                                      <div class=\"form-check my-4\">\n                                          <input class=\"form-check-input\" type=\"checkbox\" id=\"defaultCheck12\">\n                                          <label for=\"defaultCheck12\" class=\"grey-text\">Accept the<a href=\"#\" class=\"blue-text\"> Terms and Conditions</a></label>\n                                      </div>\n                                    </div>\n\n                                    <!--Grid row-->\n                                    <div class=\"row d-flex align-items-center mb-4\">\n\n                                        <!--Grid column-->\n                                        <div class=\"col-md-3 col-md-6 text-center\">\n                                            <button\n                                                  *ngIf=\"!isLoading\"\n                                                  [disabled]=\"!signUpForm.valid\"\n                                                  type=\"submit\"\n                                                  class=\"btn btn-pink btn-block btn-rounded z-depth-1 waves-light\"\n                                                  mdbWavesEffect>Sign Up</button>\n                                            <!--Big blue-->\n                                            <mdb-spinner *ngIf=\"isLoading\" spinnerType=\"big crazy\"></mdb-spinner>\n                                        </div>\n                                        <!--Grid column-->\n\n                                        <!--Grid column-->\n                                        <div class=\"col-md-6\">\n                                            <p class=\"font-small grey-text d-flex justify-content-center\">Have an account? <a href=\"#\" class=\"blue-text ml-2\"> Log in</a></p>\n                                        </div>\n                                        <!--Grid column-->\n\n                                    </div>\n                                    <!--Grid row-->\n                                </form>\n                                <!-- Login form -->\n\n                        <!--Footer-->\n                        <div class=\"footer pt-3 mdb-color lighten-3\">\n\n                            <div class=\"row d-flex justify-content-center\">\n                                <p class=\"font-small white-text mb-2 pt-3\">or Sign up with:</p>\n                            </div>\n\n                            <div class=\"row mt-2 mb-3 d-flex justify-content-center\">\n                                <!--Facebook-->\n                                <a class=\"btn-floating btn-lg purple-gradient waves-light\" mdbWavesEffect><i class=\"fa fa-facebook\"></i></a>\n                                <a class=\"btn-floating btn-lg purple-gradient waves-light\" mdbWavesEffect><i class=\"fa fa-twitter\"></i></a>\n                                <a class=\"btn-floating btn-lg purple-gradient waves-light\" mdbWavesEffect><i class=\"fa fa-google-plus\"></i></a>\n                            </div>\n\n                        </div>\n                        </div>\n                    </div>\n                    <!--/Form without header-->\n\n                  </div>\n                  <!--Section: Live preview-->\n\n            </div>\n        </div>\n    </div>\n\n</main>\n<!--/Main layout-->\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n  background: url('students.jpg') no-repeat center center;\n  background-size: cover;\n  height: 100vh; }\n\n.form-light .font-small {\n  font-size: 0.8rem; }\n\n.form-light [type=\"radio\"] + label,\n.form-light [type=\"checkbox\"] + label {\n  font-size: 0.8rem; }\n\n.form-light [type=\"checkbox\"] + label:before {\n  top: 2px;\n  width: 15px;\n  height: 15px; }\n\n.form-light input[type=\"checkbox\"] + label:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 17px;\n  height: 17px;\n  z-index: 0;\n  border-radius: 1px;\n  margin-top: 2px;\n  transition: 0.2s; }\n\n.form-light input[type=\"checkbox\"]:checked + label:before {\n  top: -4px;\n  left: -3px;\n  width: 12px;\n  height: 22px;\n  border-style: solid;\n  border-width: 2px;\n  border-color: transparent #EB3573 #EB3573 transparent;\n  -webkit-transform: rotate(40deg);\n  transform: rotate(40deg);\n  -webkit-backface-visibility: hidden;\n  -webkit-transform-origin: 100% 100%;\n  transform-origin: 100% 100%; }\n\n.form-light .footer {\n  border-bottom-left-radius: .3rem;\n  border-bottom-right-radius: .3rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmNoZW9saGEvRGVza3RvcC9leGFtc2ltdjIuMC4wLXB1Ymxpc2hlZC9zcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVEQUFzRTtFQUN0RSxzQkFBc0I7RUFDdEIsYUFBYSxFQUFBOztBQUlmO0VBQ0UsaUJBQWlCLEVBQUE7O0FBRW5COztFQUVFLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVkO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0VBRWYsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIscURBQXFEO0VBQ3JELGdDQUFnQztFQUVoQyx3QkFBd0I7RUFDeEIsbUNBQW1DO0VBQ25DLG1DQUFtQztFQUVuQywyQkFBMkIsRUFBQTs7QUFFN0I7RUFDRSxnQ0FBZ0M7RUFDaEMsaUNBQWlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlldyB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zdHVkZW50cy5qcGdcIiluby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuXG4uZm9ybS1saWdodCAuZm9udC1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtOyB9XG5cbi5mb3JtLWxpZ2h0IFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbCxcbi5mb3JtLWxpZ2h0IFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtOyB9XG5cbi5mb3JtLWxpZ2h0IFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbDpiZWZvcmUge1xuICB0b3A6IDJweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDsgfVxuXG4uZm9ybS1saWdodCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbDpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxN3B4O1xuICBoZWlnaHQ6IDE3cHg7XG4gIHotaW5kZXg6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnM7XG4gIHRyYW5zaXRpb246IDAuMnM7IH1cblxuLmZvcm0tbGlnaHQgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xuICB0b3A6IC00cHg7XG4gIGxlZnQ6IC0zcHg7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNFQjM1NzMgI0VCMzU3MyB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQwZGVnKTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7IH1cblxuLmZvcm0tbGlnaHQgLmZvb3RlciB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC4zcmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjNyZW07IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../user.model */ "./src/app/auth/user.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Utility_shared_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../Utility-shared/utility.service */ "./src/app/Utility-shared/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let SignupComponent = class SignupComponent {
    constructor(fb, authServie, router, utilityService) {
        this.fb = fb;
        this.authServie = authServie;
        this.router = router;
        this.utilityService = utilityService;
        this.permission = 'teacher';
        this.isLoading = false;
        this.pwdPattern = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$';
    }
    ngOnInit() {
        this.loadingSubscription = this.utilityService.loadingStateChanged.subscribe(loadingStatus => {
            this.isLoading = loadingStatus;
        });
        this.signUpForm = this.fb.group({
            name: [''],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
                ]],
            permissionTag: ['student']
        });
    }
    onSubmit() {
        const user = new _user_model__WEBPACK_IMPORTED_MODULE_0__["User"](this.signUpForm.value.email, this.signUpForm.value.password, this.signUpForm.value.name, this.signUpForm.value.permissionTag);
        this.authServie.signup(user);
        this.signUpForm.reset();
    }
    ngOnDestroy() {
        this.loadingSubscription.unsubscribe();
    }
};
SignupComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/signup/signup.component.scss")]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService_Local"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _Utility_shared_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"]])
], SignupComponent);



/***/ }),

/***/ "./src/app/auth/user.model.ts":
/*!************************************!*\
  !*** ./src/app/auth/user.model.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(email, password, name, permissionTag, created_at, update_at, provider, authToken, toeflId, paymentId, paidToeflLists, shoppingCartLists, wishLists) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.permissionTag = permissionTag;
        this.created_at = created_at;
        this.update_at = update_at;
        this.provider = provider;
        this.authToken = authToken;
        this.toeflId = toeflId;
        this.paymentId = paymentId;
        this.paidToeflLists = paidToeflLists;
        this.shoppingCartLists = shoppingCartLists;
        this.wishLists = wishLists;
    }
}


/***/ }),

/***/ "./src/app/error-interceptor.ts":
/*!**************************************!*\
  !*** ./src/app/error-interceptor.ts ***!
  \**************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/ */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
httpClient에서 발생하는 모든 error를 중간에서 intercet한후
이것을 MATDialog->ErrorComponent에 MODAL을 이용하여 error message를 화면와 보여준다
*/





let ErrorInterceptor = class ErrorInterceptor {
    constructor(dialog) {
        this.dialog = dialog;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            let errorMessage = 'An Unkwown error occurred';
            let errorTitle = 'An Unkown Error Title';
            if (error.error.message) {
                errorMessage = error.error.message;
                errorTitle = error.error.title;
            }
            this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"], { data: { message: errorMessage, title: errorTitle } });
            return Object(rxjs___WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mdbModal #basicModal=\"mdbModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"basicModal.hide()\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n        <h4 class=\"modal-title w-100\" id=\"myModalLabel\">{{ data.title }}</h4>\n      </div>\n      <div class=\"modal-body\">\n        {{ data.message }}\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary waves-light\" aria-label=\"OK\" (click)=\"basicModal.hide()\" mdbWavesEffect>Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/error/error.component.scss":
/*!********************************************!*\
  !*** ./src/app/error/error.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-uikit-pro-standard */ "./node_modules/ng-uikit-pro-standard/fesm2015/ng-uikit-pro-standard.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



let ErrorComponent = class ErrorComponent {
    constructor(data) {
        this.data = data;
    }
    ngAfterViewInit() {
        this.basicModal.show();
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('basicModal'),
    __metadata("design:type", ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_0__["ModalDirective"])
], ErrorComponent.prototype, "basicModal", void 0);
ErrorComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
        styles: [__webpack_require__(/*! ./error.component.scss */ "./src/app/error/error.component.scss")]
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [Object])
], ErrorComponent);



/***/ }),

/***/ "./src/app/navigation/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/navigation/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer-->\n<footer class=\"page-footer mdb-color text-center text-md-left pt-4 mt-4\">\n\n  <!--Footer Links-->\n  <div class=\"container\">\n  <div class=\"row\">\n  \n      <!--First column-->\n      <div class=\"col-md-3 offset-md-1\">\n          <h5 class=\"title\">Footer Content </h5>\n          <p>Here you can use rows and columns here to organize your footer content.</p>\n      </div>\n      <!--/.First column-->\n  \n      <hr class=\"hidden-md-up\">\n  \n      <!--Second column-->\n      <div class=\"col-md-2 offset-md-1\">\n          <h5 class=\"title\">Links</h5>\n          <ul class=\"list-unstyled\">\n              <li>\n                  <a href=\"#!\">Link 1</a>\n              </li>\n              <li>\n                  <a href=\"#!\">Link 2</a>\n              </li>\n              <li>\n                  <a href=\"#!\">Link 3</a>\n              </li>\n              <li>\n                  <a href=\"#!\">Link 4</a>\n              </li>\n          </ul>\n      </div>\n      <!--/.Second column-->\n  \n      <hr class=\"hidden-md-up\">\n  \n      <!--Third column-->\n      <div class=\"col-md-2\">\n          <h5 class=\"title\">Links</h5>\n          <ul class=\"list-unstyled\">\n              <li>\n                  <a href=\"#!\">Link 1</a>\n              </li>\n              <li>\n                  <a href=\"#!\">Link 2</a>\n              </li>\n              <li>\n                  <a href=\"#!\">Link 3</a>\n              </li>\n              <li>\n                  <a href=\"#!\">Link 4</a>\n              </li>\n          </ul>\n      </div>\n      <!--/.Third column-->\n  \n      <hr class=\"hidden-md-up\">\n  \n      <!--Fourth column-->\n      <div class=\"col-md-2\">\n          <h5 class=\"title\">Links</h5>\n          <ul class=\"list-unstyled\">\n              <li>\n                  <a href=\"#!\">Link 1</a>\n              </li>\n              <li>\n                  <a href=\"#!\">Link 2</a>\n              </li>\n              <li>\n                  <a href=\"#!\">Link 3</a>\n              </li>\n              <li>\n                  <a href=\"#!\">Link 4</a>\n              </li>\n          </ul>\n      </div>\n      <!--/.Fourth column-->\n  \n  </div>\n  </div>\n  <!--/.Footer Links-->\n  \n  <hr>\n  <!--Social buttons-->\n  <div class=\"text-center mb-3\">\n  \n  <a class=\"btn-floating btn-small btn-fb waves-light\" mdbWavesEffect>\n      <i class=\"fa fa-facebook\"> </i>\n  </a>\n  <a class=\"btn-floating btn-small btn-tw waves-light\" mdbWavesEffect>\n      <i class=\"fa fa-twitter\"> </i>\n  </a>\n  <a class=\"btn-floating btn-small btn-gplus waves-light\" mdbWavesEffect>\n      <i class=\"fa fa-google-plus\"> </i>\n  </a>\n  <a class=\"btn-floating btn-small btn-li waves-light\" mdbWavesEffect>\n      <i class=\"fa fa-linkedin\"> </i>\n  </a>\n  <a class=\"btn-floating btn-small btn-git waves-light\" mdbWavesEffect>\n      <i class=\"fa fa-github\"> </i>\n  </a>\n  <a class=\"btn-floating btn-small btn-pin waves-light\" mdbWavesEffect>\n      <i class=\"fa fa-pinterest\"> </i>\n  </a>\n  <a class=\"btn-floating btn-small btn-ins waves-light\" mdbWavesEffect>\n      <i class=\"fa fa-instagram\"> </i>\n  </a>\n  \n  </div>\n  <!--/.Social buttons-->\n  \n  <!--Copyright-->\n  <div class=\"footer-copyright text-center py-3\">\n  <div class=\"container-fluid\">\n      © 2017 Copyright:\n      <a href=\"https://www.MDBootstrap.com\"> MDBootstrap.com </a>\n  \n  </div>\n  </div>\n  <!--/.Copyright-->\n  \n  </footer>\n  <!--/.Footer-->"

/***/ }),

/***/ "./src/app/navigation/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/navigation/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/navigation/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/navigation/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! ./footer.component.html */ "./src/app/navigation/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/navigation/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/navigation/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/navigation/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<mdb-navbar SideClass=\"navbar fixed-top navbar-toggleable-md navbar-expand-lg scrolling-navbar double-nav\" [containerInside]=\"false\">\n\n  <!-- SideNav slide-out button -->\n                  <navlinks class=\"navbar-container\">\n                      <div class=\"float-left\">\n                          <a (click)=\"onToggleSideNav()\" class=\"button-collapse hidden-nav-button-collapse\">\n                              <i class=\"fa fa-bars\"></i>\n                          </a>\n                      </div>\n                  </navlinks>\n\n  <!-- Breadcrumb-->\n                  <logo>\n\n                      <div class=\"breadcrumbs breadcrumbs-hidden-nav breadcrumb-dn mr-auto\">\n                          <p>Total Examinations for People </p>\n                      </div>\n                  </logo>\n\n  <!-- 가로 진열하는 각종 navbar menu를 구성하는 영역 -->\n        <navlinks>\n                <ul class=\"nav navbar-nav nav-flex-icons ml-auto ie-double-nav ie-hidden-double-nav\">\n\n\n      <!-- 시험출제자 모드로 로그인 하였을시 활성화 시킨다 -->\n                          <li *ngIf=\"isteacherAuth\" class=\"nav-item\">\n\n                              <a class=\"nav-link border border-light rounded waves-light\"\n                              [routerLink]=\"['/teacher']\"\n                              mdbWavesEffect>\n                                  <i class=\"fa fa-pencil-square-o\"></i>\n                                  <span class=\"clearfix d-none d-sm-inline-block\">Examination</span>\n                              </a>\n                          </li>\n\n      <!-- Contact Navbar 시작 -->\n                          <li  class=\"nav-item\">\n                              <a class=\"nav-link waves-light\" [routerLink]=\"['/auth/contact']\"\n                              mdbWavesEffect>\n                                  <i class=\"fa fa-envelope-o\"></i>\n                                  <span class=\"clearfix d-none d-sm-inline-block\">Contact</span>\n                              </a>\n                          </li>\n\n      <!-- Support Navbar 시작 -->\n                          <li  class=\"nav-item\">\n                              <a class=\"nav-link waves-light\" mdbWavesEffect>\n                                  <i class=\"fa fa-comments-o\"></i>\n                                  <span class=\"clearfix d-none d-sm-inline-block\">Support</span>\n                              </a>\n                          </li>\n\n      <!-- shopping cart dropdown menu시작 -->\n\n                          <li *ngIf=\"!isteacherAuth && isAuth\" class=\"nav-item dropdown btn-group\" dropdown >\n\n\n                                <a dropdownToggle type=\"button\" aria-hidden=\"true\"\n                                    class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\n                                        <i class=\"fa  fa-shopping-bag fa-lg\" aria-hidden=\"true\"></i>\n                                        <span class=\"counter\">  {{ shoppingcartListCounter }} </span>\n                                </a>\n                                                <div *ngIf=\"shoppingcartListCounter != 0\" class=\"dropdown-menu dropdown-primary dropdown-menu-right text-center\"  role=\"menu\" >\n                                                            <table class=\"table\">\n                                                                <thead>\n                                                                  <tr>\n                                                                    <th colspan=\"1\">No</th>\n                                                                    <th colspan=\"1\">Level</th>\n                                                                    <th colspan=\"1\">Price</th>\n                                                                    <th colspan=\"1\">Remove</th>\n                                                                  </tr>\n                                                                </thead>\n                                                                <tbody>\n\n                                                                  <tr *ngFor=\"let shoppingcartItem of shoppingcartLists\">\n\n                                                                    <td colspan=\"1\">\n                                                                        {{shoppingcartItem.examNo}}\n                                                                    </td>\n                                                                    <td colspan=\"1\">\n                                                                        {{shoppingcartItem.examLevel}}\n                                                                    </td>\n                                                                    <td colspan=\"1\">\n                                                                        {{shoppingcartItem.examPrice | currency : \"USD\" }}\n                                                                    </td>\n                                                                    <td colspan=\"1\">\n                                                                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"shoppingcartItemDelete(shoppingcartItem)\">\n                                                                            <span aria-hidden=\"true\">&times;</span>\n                                                                        </button>\n                                                                    </td>\n                                                                  </tr>\n                                                                </tbody>\n                                                             </table>\n                                                              <div class=\"dropdown-divider\"></div>\n                                                              <button mdbBtn type=\"button\" color=\"indigo\" rounded=\"true\" outline=\"true\" size=\"sm\"\n                                                                      (click)=\"goShoppingListCheckOut()\" mdbWavesEffect>\n                                                                      <mdb-icon icon=\"credit-card\" class=\"mr-1\"></mdb-icon>\n                                                                      CheckOut\n                                                              </button>\n                                                              <button mdbBtn class=\"mr-1\" type=\"button\" color=\"indigo\" rounded=\"true\" outline=\"true\" size=\"sm\"\n                                                              (click)=\"goShoppingListSave()\" mdbWavesEffect>\n                                                              <mdb-icon icon=\"credit-card\" class=\"mr-1\"></mdb-icon>\n                                                              Save\n                                                      </button>\n\n                                                </div>\n                          </li>\n\n      <!-- 사용자 profile dropdopw menu -->\n                          <li *ngIf=\"isAuth\" class=\"nav-item dropdown btn-group\" dropdown>\n                              <a dropdownToggle type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\n                                  <i class=\"fa fa-user-circle-o\"></i>\n                                  {{ this.userName }}\n                              </a>\n                              <div class=\"dropdown-menu dropdown-primary dropdown-menu-right\" role=\"menu\">\n                                  <a class=\"dropdown-item\" [routerLink]=\"['/auth/profile']\"><i class=\"fa fa-user-circle-o mr-1\"></i>Dashboard</a>\n                                  <a *ngIf=\"!isteacherAuth\" class=\"dropdown-item\" [routerLink]=\"['/auth/orderHistory']\"><i class=\"fa fa-info mr-1\"></i>Purchase History</a>\n                                  <a class=\"dropdown-item\" [routerLink]=\"['/auth/logout']\"><i class=\"fa fa-sign-out mr-1\"></i>LogOut</a>\n                              </div>\n                          </li>\n\n      <!-- 사용자 login/signup dropdown menu  -->\n                          <li *ngIf=\"!isAuth\" class=\"nav-item dropdown btn-group\" dropdown>\n                              <a dropdownToggle type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\n                                  <i class=\"fa fa-smile-o\"></i>\n                                  LogIn\n                              </a>\n                              <div class=\"dropdown-menu dropdown-primary dropdown-menu-right\" role=\"menu\">\n                                <a class=\"dropdown-item\" [routerLink]=\"['/auth/login']\">\n                                  <i class=\"fa fa-sign-in\"></i>\n                                  LogIn</a>\n                                <a class=\"dropdown-item\" [routerLink]=\"['/auth/signup']\">\n                                  <i class=\"fa fa-registered\"></i>\n                                  SignUp</a>\n                            </div>\n                          </li>\n\n                </ul>\n        </navlinks>\n    </mdb-navbar>\n\n"

/***/ }),

/***/ "./src/app/navigation/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/navigation/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/navigation/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/navigation/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _payment_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../payment/shoppingcart.service */ "./src/app/payment/shoppingcart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let HeaderComponent = class HeaderComponent {
    constructor(authService, shoppingcartService) {
        this.authService = authService;
        this.shoppingcartService = shoppingcartService;
        // 상단 navBar와 sideMenu와 관련한 변수설정
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // shoppingcart에 관한 변수설정
        this.shoppingcartLists = [];
        this.shoppingcartListCounter = 0;
    }
    ngOnInit() {
        // 인증관련 Subject설정
        this.authSubscription = this.authService.authChange.subscribe((authStatus) => {
            // 로그인 여부 확인
            this.isAuth = authStatus;
            // 로그인이 되어 있지 않으면 shoppingcartLists를 초기화한다
            if (!this.isAuth) {
                this.shoppingcartLists = [];
                this.shoppingcartListCounter = 0;
            }
            else {
                // 사용자 프로파일중 이름을 가져온다
                this.userName = this.authService.getUserName();
                console.log('인증후 현재 사용자 정보', this.userName);
                // 로그인이 되어 있고 teacher mode가 아니면 shopping cart를 활성화 시킨다
                if (!this.isteacherAuth) {
                    this.shoppingcartListSubscription = this.shoppingcartService.shoppingCartListAdded
                        .subscribe((shoppingcart) => {
                        // tslint:disable-next-line:max-line-length
                        this.shoppingcartLists = shoppingcart.sort((a, b) => 0 - (a.examNo > b.examNo ? -1 : 1));
                        // tslint:disable-next-line:max-line-length
                        this.shoppingcartListCounter = this.shoppingcartLists.length;
                    });
                    // 처음 angular가 접속하였을시 node server로 부터 인증된 user 정보에서 shopping cart 와 paidToeflLists 정보 가져오기
                    this.shoppingcartService.connectAuthShoppingCart();
                }
            }
            // 시험출제자 선생님 인증관련 영역
            this.teacherAuthSubscription = this.authService.teacherAuth.subscribe((teacherStatus) => {
                this.isteacherAuth = teacherStatus;
            });
        });
    }
    // 유저가 헤더부분에 있는 쇼핑목록을 지웠을때 실행됨.
    shoppingcartItemDelete(shoppingcartItem) {
        this.shoppingcartService.shoppingCartItemRemoved(shoppingcartItem);
    }
    // 헤더 쇼핑카트부분에 있는 체크아웃 버튼을 눌렀을때 paymentPreview Page로 이동합니다.
    goShoppingListCheckOut() {
        this.shoppingcartService.goCheckOut();
    }
    // 서버에 shopping cart내용을 정리한후 훗날 재사용할 수 있도록 하는 기능추가
    goShoppingListSave() {
        this.shoppingcartService.goSave();
    }
    onToggleSideNav() {
        this.sidenavToggle.emit();
    }
    ngOnDestroy() {
        this.authSubscription.unsubscribe();
        if (!this.isteacherAuth) {
            this.shoppingcartListSubscription.unsubscribe();
        }
        this.teacherAuthSubscription.unsubscribe();
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "sidenavToggle", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], HeaderComponent.prototype, "isAuth", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], HeaderComponent.prototype, "isteacherAuth", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], HeaderComponent.prototype, "userName", void 0);
HeaderComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! ./header.component.html */ "./src/app/navigation/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/navigation/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService_Local"],
        _payment_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingcartService"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n        <logo>\n          \n                <div class=\"logo-wrapper waves-light pl-4\">                                       \n                                        <img src=\"../../../assets/img/toeflLogo.png\"\n                                        class=\"rounded-circle img-fluid flex-center\"\n                                        style=\"max-height: 90px\">       \n                </div>\n                \n        </logo>\n\n     \n            <!-- Side navigation links -->\n            \n                <ul class=\"collapsible collapsible-accordion\">\n                    <mdb-squeezebox [multiple]=\"false\" aria-multiselectable=\"false\">\n\n                        <!-- Collapsible link -->\n                        <mdb-item>\n                            <mdb-item-head mdbWavesEffect>\n                                <i class=\"fa fa-chevron-right\"></i> Collapsible menu</mdb-item-head>\n                            <mdb-item-body>\n                                <ul>\n                                    <li>\n                                        <a class=\"waves-effect\" mdbWavesEffect>Link 1</a>\n                                    </li>\n                                    <li>\n                                        <a class=\"waves-effect\" mdbWavesEffect>Link 2</a>\n                                    </li>\n                                </ul>\n                            </mdb-item-body>\n                        </mdb-item>\n\n                        <!-- Simple link -->\n                        <mdb-item class=\"no-collase\">\n                            <mdb-item-head mdbWavesEffect>\n                                <i class=\"fa fa-hand-pointer-o\"></i> Simple link</mdb-item-head>\n                            <mdb-item-body></mdb-item-body>\n                        </mdb-item>\n\n                        <!-- Collapsible link -->\n                        <mdb-item>\n                            <mdb-item-head mdbWavesEffect>\n                                <i class=\"fa fa-eye\"></i> Collapsible menu 2</mdb-item-head>\n                            <mdb-item-body>\n                                <ul>\n                                    <li>\n                                        <a class=\"waves-effect\" mdbWavesEffect>Link 1</a>\n                                    </li>\n                                    <li>\n                                        <a class=\"waves-effect\" mdbWavesEffect>Link 2</a>\n                                    </li>\n                                </ul>\n                            </mdb-item-body>\n                        </mdb-item>\n\n                        <!-- Simple link -->\n                        <mdb-item class=\"no-collase\">\n                            <mdb-item-head mdbWavesEffect>\n                                <i class=\"fa fa-diamond\">\n                                    <a></a>\n                                </i> Logout </mdb-item-head>\n                            <mdb-item-body></mdb-item-body>\n                        </mdb-item>\n\n                    </mdb-squeezebox>\n                </ul>\n           \n            <!--/. Side navigation links -->\n       \n        <div class=\"sidenav-bg mask-strong\"></div>\n"

/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vc2lkZW5hdi1saXN0L3NpZGVuYXYtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: SidenavListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavListComponent", function() { return SidenavListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let SidenavListComponent = class SidenavListComponent {
};
SidenavListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sidenav-list',
        template: __webpack_require__(/*! ./sidenav-list.component.html */ "./src/app/navigation/sidenav-list/sidenav-list.component.html"),
        styles: [__webpack_require__(/*! ./sidenav-list.component.scss */ "./src/app/navigation/sidenav-list/sidenav-list.component.scss")]
    })
], SidenavListComponent);



/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mdbModal #basicModal=\"mdbModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"basicModal.hide()\">\n          <span aria-hidden=\"true\">×</span>\n        </button>\n        <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Page Not Found</h4>\n      </div>\n      <div class=\"modal-body\">\n        Can not find out a Page.......\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary waves-light\" aria-label=\"OK\" (click)=\"goBackToHome()\" mdbWavesEffect>Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-uikit-pro-standard */ "./node_modules/ng-uikit-pro-standard/fesm2015/ng-uikit-pro-standard.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let NotFoundComponent = class NotFoundComponent {
    constructor(router) {
        this.router = router;
    }
    ngAfterViewInit() {
        this.basicModal.show();
    }
    goBackToHome() {
        this.basicModal.hide();
        this.router.navigate(['/']);
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('basicModal'),
    __metadata("design:type", ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_0__["ModalDirective"])
], NotFoundComponent.prototype, "basicModal", void 0);
NotFoundComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
        styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], NotFoundComponent);



/***/ }),

/***/ "./src/app/payment/model/payment.model.ts":
/*!************************************************!*\
  !*** ./src/app/payment/model/payment.model.ts ***!
  \************************************************/
/*! exports provided: Payment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Payment", function() { return Payment; });
class Payment {
    constructor(userToken, shoppingCartLists, amount) {
        this.userToken = userToken;
        this.shoppingCartLists = shoppingCartLists;
        this.amount = amount;
    }
}


/***/ }),

/***/ "./src/app/payment/model/shoppingcart.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/payment/model/shoppingcart.model.ts ***!
  \*****************************************************/
/*! exports provided: Shoppingcart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shoppingcart", function() { return Shoppingcart; });
class Shoppingcart {
    constructor(examNo, examLevel, examPrice, cartDate) {
        this.examNo = examNo;
        this.examLevel = examLevel;
        this.examPrice = examPrice;
        this.cartDate = cartDate;
    }
}


/***/ }),

/***/ "./src/app/payment/model/stripeModel.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/model/stripeModel.ts ***!
  \**********************************************/
/*! exports provided: StripeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripeModel", function() { return StripeModel; });
class StripeModel {
    constructor(cardHolderName, cardHolderEmail, cardHolderZip, tokenId, userToken, shoppingCartLists, amount, cardNumber, cardExpiry, cardCvc) {
        this.cardHolderName = cardHolderName;
        this.cardHolderEmail = cardHolderEmail;
        this.cardHolderZip = cardHolderZip;
        this.tokenId = tokenId;
        this.userToken = userToken;
        this.shoppingCartLists = shoppingCartLists;
        this.amount = amount;
        this.cardNumber = cardNumber;
        this.cardExpiry = cardExpiry;
        this.cardCvc = cardCvc;
    }
}


/***/ }),

/***/ "./src/app/payment/payment-checkout/payment-notification/payment-notification.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/payment/payment-checkout/payment-notification/payment-notification.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/payment/payment-checkout/payment-notification/payment-notification.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/payment/payment-checkout/payment-notification/payment-notification.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  margin-left: 3rem;\n  margin-right: 3rem; }\n\n#totalAmount {\n  border-top: 2px solid #444444;\n  border-bottom: 2px solid; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmNoZW9saGEvRGVza3RvcC9leGFtc2ltdjIuMC4wLXB1Ymxpc2hlZC9zcmMvYXBwL3BheW1lbnQvcGF5bWVudC1jaGVja291dC9wYXltZW50LW5vdGlmaWNhdGlvbi9wYXltZW50LW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixrQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSw2QkFBNkI7RUFDN0Isd0JBQ0osRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvcGF5bWVudC1jaGVja291dC9wYXltZW50LW5vdGlmaWNhdGlvbi9wYXltZW50LW5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZXtcbiAgICBtYXJnaW4tbGVmdDogM3JlbTtcbiAgICBtYXJnaW4tcmlnaHQgOiAzcmVtO1xufVxuI3RvdGFsQW1vdW50e1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjNDQ0NDQ0O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/payment/payment-checkout/payment-notification/payment-notification.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/payment/payment-checkout/payment-notification/payment-notification.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PaymentNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentNotificationComponent", function() { return PaymentNotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Utility_shared_mainNavChange_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../Utility-shared/mainNavChange.model */ "./src/app/Utility-shared/mainNavChange.model.ts");
/* harmony import */ var _Utility_shared_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utility-shared/utility.service */ "./src/app/Utility-shared/utility.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _paymentAgency_Service_paypal_payment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../paymentAgency-Service/paypal-payment.service */ "./src/app/payment/paymentAgency-Service/paypal-payment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let PaymentNotificationComponent = class PaymentNotificationComponent {
    constructor(utilityService, router, route, authService, payPalService) {
        this.utilityService = utilityService;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.payPalService = payPalService;
    }
    ngOnInit() {
        console.log('this is a init result page');
        this.payPalService.getPaypalResult();
        this.mainNavModel = new _Utility_shared_mainNavChange_model__WEBPACK_IMPORTED_MODULE_1__["MainNavModel"](false, false, false);
        this.utilityService.mainNavChanged.next(this.mainNavModel); // main 화면 navigation활성화
        this.authService.authChange.next(true); // header component에 영향을 주는 authChange값
        this.authService.isAuthenticated = true;
        this.router.navigate(['/']);
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.utilityService.successToast('PayPal 결제가 완료되었습니다. 감사합니다', 'PayPal 결제완료 공지사항');
        }, 0);
    }
};
PaymentNotificationComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-payment-notification',
        template: __webpack_require__(/*! ./payment-notification.component.html */ "./src/app/payment/payment-checkout/payment-notification/payment-notification.component.html"),
        styles: [__webpack_require__(/*! ./payment-notification.component.scss */ "./src/app/payment/payment-checkout/payment-notification/payment-notification.component.scss")]
    }),
    __metadata("design:paramtypes", [_Utility_shared_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService_Local"],
        _paymentAgency_Service_paypal_payment_service__WEBPACK_IMPORTED_MODULE_5__["PaypalPaymentService"]])
], PaymentNotificationComponent);



/***/ }),

/***/ "./src/app/payment/payment-checkout/payment-order-summary/payment-order-summary.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/payment/payment-checkout/payment-order-summary/payment-order-summary.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mdb-card class=\"text-center\">\n    <mdb-card-header class=\"dark-grey-text\">\n      <h3><strong>Order Summary</strong></h3>\n    </mdb-card-header>\n\n      <div class=\"table-responsive\">\n          <table class=\"table text-right\">\n              <tbody>\n\n                  <td colspan=\"2\">Subtotal:</td>\n                  <td colspan=\"1\">{{ totalAmount | currency : \"USD\"}}</td>\n\n                  <tr>\n                      <td colspan=\"2\">\n                        Applied D/C:\n                      </td>\n                      <td colspan=\"2\">\n\n                      </td>\n                  </tr>\n\n                  <tr>\n                  <td colspan=\"2\">Estimated Tax:</td>\n                  <td colspan=\"1\"></td>\n                  </tr>\n                  <tr>\n                      <th colspan=\"2\">Total:</th>\n                      <th colspan=\"1\">{{ totalAmount | currency : \"USD\"}}</th>\n                  </tr>\n                  <tr>\n                    <td colspan=\"4\">\n                        <button class=\"btn btn-block btn-sm red\" id=\"couponBtn\" (click)=\"goCancel()\">Cancel</button>\n                    </td>\n                   </tr>\n              </tbody>\n          </table>\n      </div>\n\n    <mdb-card-footer class=\"text-muted success-color white-text\">\n      <p class=\"mb-0\">2 days ago</p>\n    </mdb-card-footer>\n  </mdb-card>\n\n"

/***/ }),

/***/ "./src/app/payment/payment-checkout/payment-order-summary/payment-order-summary.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/payment/payment-checkout/payment-order-summary/payment-order-summary.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvcGF5bWVudC1jaGVja291dC9wYXltZW50LW9yZGVyLXN1bW1hcnkvcGF5bWVudC1vcmRlci1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/payment/payment-checkout/payment-order-summary/payment-order-summary.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/payment/payment-checkout/payment-order-summary/payment-order-summary.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PaymentOrderSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentOrderSummaryComponent", function() { return PaymentOrderSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let PaymentOrderSummaryComponent = class PaymentOrderSummaryComponent {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.checkShoppingCart = false;
    }
    goCancel() {
        this.router.navigate(['/']);
    }
    getPromoCode() {
        console.log('promo click');
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Number)
], PaymentOrderSummaryComponent.prototype, "totalAmount", void 0);
PaymentOrderSummaryComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-payment-order-summary',
        template: __webpack_require__(/*! ./payment-order-summary.component.html */ "./src/app/payment/payment-checkout/payment-order-summary/payment-order-summary.component.html"),
        styles: [__webpack_require__(/*! ./payment-order-summary.component.scss */ "./src/app/payment/payment-checkout/payment-order-summary/payment-order-summary.component.scss")]
    }),
    __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], PaymentOrderSummaryComponent);



/***/ }),

/***/ "./src/app/payment/payment-checkout/payment-proceed/payment-proceed.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/payment/payment-checkout/payment-proceed/payment-proceed.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"row mx-0 p-3\">\n    <div class=\"col-md-9 mx-auto\">\n        <div class=\"card\">\n            <h3 class=\"card-header text-center\">Payment Method Selection</h3>\n            <mdb-progress-bar class=\"progress primary-color-dark\" mode=\"indeterminate\"></mdb-progress-bar>\n              <div class=\"card-body\">\n                  <div class=\"card\">\n                      <div class=\"card-body\">\n\n                          <div class=\"form-check\">\n                                      <input class=\"form-check-input\" [checked]=\"stripeCheckbox\" (change)=\"activeStripe()\" mdbInputDirective type=\"checkbox\"  id=\"checkbox1\">\n                                      <label class=\"form-check-label\" for=\"checkbox1\">Credit or Debit Card</label>\n                          </div>\n                          <form [formGroup]=\"stripeForm\" (ngSubmit)=\"onStripeSubmit()\">\n\n                              <fieldset [disabled]=\"!stripeisActive\">\n\n                                          <div class=\"row\">\n                                              <div class=\"col-md-1\"></div>\n                                              <div class=\"col-md-11\">\n                                                    <div class=\"md-form\">\n                                                            <input mdbInputDirective\n                                                                  type=\"text\"\n                                                                  id=\"cardHolderName\"\n                                                                  formControlName=\"cardHolderName\"\n                                                            class=\"form-control\">\n                                                            <label for=\"cardHolderName\">Name</label>\n                                                    </div>\n                                              </div>\n                                          </div>\n                                          <div class=\"row\">\n                                                    <div class=\"col-md-1\"></div>\n                                                    <div class=\"col-md-7\">\n                                                        <div class=\"md-form\">\n                                                              <input mdbInputDirective\n                                                                      type=\"email\"\n                                                                      id=\"cardHolderEmail\"\n                                                                      formControlName=\"cardHolderEmail\"\n                                                                      class=\"form-control\">\n                                                              <label for=\"cardHolderEmail\">Email</label>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"col-md-4\">\n                                                        <div class=\"md-form\">\n                                                              <input mdbInputDirective\n                                                                      type=\"text\"\n                                                                      id=\"cardHolderZip\"\n                                                                      formControlName=\"cardHolderZip\"\n                                                                      class=\"form-control\">\n                                                              <label for=\"cardHolderZip\">Zip</label>\n                                                        </div>\n                                                    </div>\n\n                                          </div>\n                                          <br>\n                                          <div class=\"row\">\n                                            <div class=\"col-md-12 text-center\">\n                                                  <div id=\"cardImages\" >\n                                                    <i class=\"fa fa-cc-mastercard\" id=\"fa-cc-mastercard\"  aria-hidden=\"true\"></i>\n                                                    <i class=\"fa fa-cc-visa\" size=\"2x\" aria-hidden=\"true\"></i>\n                                                    <i class=\"fa fa-cc-amex\" size=\"2x\" aria-hidden=\"true\"></i>\n                                                    <i class=\"fa fa-cc-stripe\" size=\"2x\" aria-hidden=\"true\"></i>\n                                                    <i class=\"fa fa-google-wallet\" size=\"2x\" aria-hidden=\"true\"></i>\n                                                    <i class=\"fa fa-cc-discover\" size=\"2x\" aria-hidden=\"true\"></i>\n                                                    <i class=\"fa fa-cc-jcb\" size=\"2x\" aria-hidden=\"true\"></i>\n                                                    <i class=\"fa fa-cc-diners-club\" size=\"2x\" aria-hidden=\"true\"></i>\n                                                  </div>\n                                            </div>\n                                          </div>\n\n                                          <hr>\n\n                                          <div class=\"row ml-2\">\n                                            <div class=\"col-md-3\">\n                                              <p>Card Number</p>\n                                            </div>\n                                              <div class=\"col-md-8\">\n                                                <div id=\"card-number\"></div>\n                                              </div>\n                                          </div>\n\n                                          <div class=\"row ml-2\">\n                                            <div class=\"col-md-3\">\n                                              <p>Expiration Date</p>\n                                            </div>\n                                              <div class=\"col-md-3\">\n                                                <div id=\"card-expiry\"></div>\n                                              </div>\n                                              <div class=\"col-md-3 ml-0\">\n                                                <p>CVC</p>\n                                              </div>\n                                                <div class=\"col-md-3\">\n                                                  <div id=\"card-cvc\"></div>\n                                                </div>\n\n                                          </div>\n\n                                          <div class=\"text-center mt-3\">\n                                              <button mdbBtn type=\"submit\" color=\"indigo\" size=\"md\" [disabled]=\"!stripeForm\" mdbWavesEffect>\n                                                  <mdb-icon icon=\"credit-card\" class=\"mr-1\"></mdb-icon>\n                                                            Checkout With Credit Card\n                                              </button>\n                                          </div>\n                              </fieldset>\n                          </form>\n                      </div>\n                  </div>\n                  <br>\n                  <div class=\"card\">\n                      <div class=\"card-body\">\n                          <br>\n                          <div class=\"row\">\n                            <div class=\"col-md-4 pt-3\">\n                                <div class=\"form-check align-middle\">\n                                    <input class=\"form-check-input\" [checked]= \"paypalCheckbox\" (change)=\"activePaypal()\" mdbInputDirective type=\"checkbox\"  id=\"checkbox2\">\n                                    <label class=\"form-check-label\" for=\"checkbox2\">\n                                    Check Out With Paypal</label>\n                                </div>\n                            </div>\n                            <div class=\"col-md-8\">\n                                <button mdbBtn\n                                                [disabled]=\"!paypalisActive\"\n                                                type=\"button\" color=\"indigo\" size=\"md\"\n                                                (click)=\"onPaypalSubmit()\"\n                                                mdbWavesEffect>\n                                                <mdb-icon icon=\"cc-paypal\" class=\"mr-1\"></mdb-icon>\n                                                Checkout With Paypal\n                                </button>\n\n                            </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n      </div>\n    </div>\n    <div class=\"col-md-3 mx-auto\">\n      <app-payment-order-summary [totalAmount]=\"totalAmount\" id=\"sticky\" class=\"z-depth-2\"></app-payment-order-summary>\n    </div>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/payment/payment-checkout/payment-proceed/payment-proceed.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/payment/payment-checkout/payment-proceed/payment-proceed.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  position: relative;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 4rem; }\n\n#cardImages > .fa {\n  font-size: 2em;\n  width: 1.5em;\n  height: 1.5em; }\n\n.fa-cc-mastercard {\n  color: #b71c1c; }\n\n.fa-cc-visa {\n  color: #0d47a1; }\n\n.fa-cc-amex {\n  color: #4285F4; }\n\n.fa-cc-discover {\n  color: #37474F; }\n\n.fa-cc-jcb {\n  color: #311b92; }\n\n.fa-cc-stripe {\n  color: #2BBBAD; }\n\n.fa-cc-diners-club {\n  color: #3F729B; }\n\n.fa-google-wallet {\n  color: #ffd600; }\n\n.fa-paypal {\n  margin-left: 1rem;\n  font-size: 1.5rem;\n  color: #0d47a1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmNoZW9saGEvRGVza3RvcC9leGFtc2ltdjIuMC4wLXB1Ymxpc2hlZC9zcmMvYXBwL3BheW1lbnQvcGF5bWVudC1jaGVja291dC9wYXltZW50LXByb2NlZWQvcGF5bWVudC1wcm9jZWVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNJLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUlqQjtFQUNJLGNBQWEsRUFBQTs7QUFFakI7RUFDRyxjQUNILEVBQUE7O0FBRUE7RUFDSSxjQUNKLEVBQUE7O0FBRUE7RUFDRyxjQUNILEVBQUE7O0FBRUE7RUFDSSxjQUNKLEVBQUE7O0FBRUE7RUFDSSxjQUNKLEVBQUE7O0FBRUE7RUFDSSxjQUNKLEVBQUE7O0FBQ0E7RUFDSSxjQUNKLEVBQUE7O0FBRUE7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvcGF5bWVudC1jaGVja291dC9wYXltZW50LXByb2NlZWQvcGF5bWVudC1wcm9jZWVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA0cmVtO1xufVxuXG4jY2FyZEltYWdlcz4uZmF7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbi5mYS1jYy1tYXN0ZXJjYXJke1xuICAgIGNvbG9yOiNiNzFjMWM7XG59XG4uZmEtY2MtdmlzYXtcbiAgIGNvbG9yOiAjMGQ0N2ExXG59XG5cbi5mYS1jYy1hbWV4e1xuICAgIGNvbG9yOiAjNDI4NUY0XG59XG5cbi5mYS1jYy1kaXNjb3ZlcntcbiAgIGNvbG9yOiAjMzc0NzRGXG59XG5cbi5mYS1jYy1qY2J7XG4gICAgY29sb3I6IzMxMWI5MlxufVxuXG4uZmEtY2Mtc3RyaXBle1xuICAgIGNvbG9yOiAjMkJCQkFEXG59XG5cbi5mYS1jYy1kaW5lcnMtY2x1YntcbiAgICBjb2xvcjogIzNGNzI5QlxufVxuLmZhLWdvb2dsZS13YWxsZXR7XG4gICAgY29sb3I6ICNmZmQ2MDBcbn1cblxuLmZhLXBheXBhbHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBjb2xvcjogIzBkNDdhMTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/payment/payment-checkout/payment-proceed/payment-proceed.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/payment/payment-checkout/payment-proceed/payment-proceed.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PaymentProceedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentProceedComponent", function() { return PaymentProceedComponent; });
/* harmony import */ var _Utility_shared_utility_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../Utility-shared/utility.service */ "./src/app/Utility-shared/utility.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/esm2015/ngx-stripe.js");
/* harmony import */ var _model_payment_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/payment.model */ "./src/app/payment/model/payment.model.ts");
/* harmony import */ var _model_stripeModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/stripeModel */ "./src/app/payment/model/stripeModel.ts");
/* harmony import */ var _shoppingcart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shoppingcart.service */ "./src/app/payment/shoppingcart.service.ts");
/* harmony import */ var _paymentAgency_Service_paypal_payment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../paymentAgency-Service/paypal-payment.service */ "./src/app/payment/paymentAgency-Service/paypal-payment.service.ts");
/* harmony import */ var _paymentAgency_Service_stripe_payment_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../paymentAgency-Service/stripe-payment.service */ "./src/app/payment/paymentAgency-Service/stripe-payment.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










let PaymentProceedComponent = class PaymentProceedComponent {
    constructor(fb, router, route, utilityService, shoppingcartService, paypalPaymentService, stripePaymentService, stripeService) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.utilityService = utilityService;
        this.shoppingcartService = shoppingcartService;
        this.paypalPaymentService = paypalPaymentService;
        this.stripePaymentService = stripePaymentService;
        this.stripeService = stripeService;
        this.totalAmount = 0;
        this.elementOptions = {
            locale: 'auto'
        };
        this.stripeCheckbox = false;
        this.stripeisActive = false;
        this.paypalCheckbox = false;
        this.paypalisActive = false;
    }
    ngOnInit() {
        this.userToken = localStorage.getItem('token');
        this.route.params.subscribe((params) => {
            this.totalAmount = +params['totalAmount'];
            console.log(this.totalAmount);
            this.shoppingCartLists = this.shoppingcartService.getShoppingCartLists();
        });
        this.stripeForm = this.fb.group({
            cardHolderName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cardHolderEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cardHolderZip: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.stripeService.elements(this.elementOptions)
            .subscribe(elements => {
            this.elements = elements;
            if (!this.cardNumber) {
                this.cardNumber = this.elements.create('cardNumber', {});
                this.cardNumber.mount('#card-number');
            }
            if (!this.cardExpiry) {
                this.cardExpiry = this.elements.create('cardExpiry', {});
                this.cardExpiry.mount('#card-expiry');
            }
            if (!this.cardCvc) {
                this.cardCvc = this.elements.create('cardCvc', {});
                this.cardCvc.mount('#card-cvc');
            }
        });
    }
    onStripeSubmit() {
        this.stripeService
            .createToken(this.cardNumber, { name })
            .subscribe(result => {
            if (result.token) {
                const stripeToken = result.token.id;
                this.stripeInfo = new _model_stripeModel__WEBPACK_IMPORTED_MODULE_6__["StripeModel"](this.stripeForm.value.cardHolderName, this.stripeForm.value.cardHolderEmail, this.stripeForm.value.cardHolderZip, stripeToken, this.userToken, this.shoppingCartLists, this.totalAmount * 100);
                this.stripePaymentService.gotoStripeCharge(this.stripeInfo);
            }
            else if (result.error) {
                console.log(result.error.message);
                this.utilityService.errorToast(result.error.message, 'Credit Card Payment Error');
            }
        });
    }
    onPaypalSubmit() {
        console.log('paypal click');
        console.log(this.totalAmount);
        this.payment = new _model_payment_model__WEBPACK_IMPORTED_MODULE_5__["Payment"](this.userToken, this.shoppingCartLists, this.totalAmount);
        this.paypalPaymentService.checkoutPaypal(this.payment);
    }
    activeStripe() {
        console.log(this.stripeCheckbox);
        if (this.stripeCheckbox) {
            this.stripeisActive = false;
            this.stripeCheckbox = false;
        }
        else if (!this.stripeCheckbox) {
            this.stripeCheckbox = true;
            this.stripeisActive = true;
        }
    }
    activePaypal() {
        console.log(this.paypalCheckbox);
        if (this.paypalCheckbox) {
            this.paypalCheckbox = false;
            this.paypalisActive = false;
        }
        else if (!this.paypalCheckbox) {
            this.paypalCheckbox = true;
            this.paypalisActive = true;
        }
    }
};
PaymentProceedComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-proceed',
        template: __webpack_require__(/*! ./payment-proceed.component.html */ "./src/app/payment/payment-checkout/payment-proceed/payment-proceed.component.html"),
        styles: [__webpack_require__(/*! ./payment-proceed.component.scss */ "./src/app/payment/payment-checkout/payment-proceed/payment-proceed.component.scss")]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _Utility_shared_utility_service__WEBPACK_IMPORTED_MODULE_0__["UtilityService"],
        _shoppingcart_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingcartService"],
        _paymentAgency_Service_paypal_payment_service__WEBPACK_IMPORTED_MODULE_8__["PaypalPaymentService"],
        _paymentAgency_Service_stripe_payment_service__WEBPACK_IMPORTED_MODULE_9__["StripePaymentService"],
        ngx_stripe__WEBPACK_IMPORTED_MODULE_4__["StripeService"]])
], PaymentProceedComponent);



/***/ }),

/***/ "./src/app/payment/payment.component.ts":
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let PaymentComponent = class PaymentComponent {
    constructor() { }
};
PaymentComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-payment',
        template: `
    <p> this is the check point .... </p>

    <router-outlet></router-outlet>`
    }),
    __metadata("design:paramtypes", [])
], PaymentComponent);



/***/ }),

/***/ "./src/app/payment/paymentAgency-Service/paypal-payment.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/payment/paymentAgency-Service/paypal-payment.service.ts ***!
  \*************************************************************************/
/*! exports provided: PaypalPaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalPaymentService", function() { return PaypalPaymentService; });
/* harmony import */ var _Utility_shared_globalConstantShare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utility-shared/globalConstantShare */ "./src/app/Utility-shared/globalConstantShare.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shoppingcart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shoppingcart.service */ "./src/app/payment/shoppingcart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let PaypalPaymentService = class PaypalPaymentService {
    constructor(http, shoppingCartService) {
        this.http = http;
        this.shoppingCartService = shoppingCartService;
        this.urlConfig = _Utility_shared_globalConstantShare__WEBPACK_IMPORTED_MODULE_0__["GlobalConstantShare"].httpUrl; // url 실제 주소가 있는곳
    }
    checkoutPaypal(payment) {
        console.log('paypal click');
        return this.http.post(this.urlConfig + '/paypal/createPayment', payment)
            .subscribe(data => {
            window.location.href = data.url;
        }),
            (error) => console.log(error);
    }
    getPaypalResult() {
        const token = localStorage.getItem('token');
        return this.http.get(this.urlConfig + '/paypal/paymentResult/' + '?token=' + token)
            .subscribe(data => {
            // tslint:disable-next-line:max-line-length
            const reInitSuccess = this.shoppingCartService.reInitialShoppingCartLists(data.payPalResult, data.paypalUserInfo);
        }, error => console.log(error));
    }
};
PaypalPaymentService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _shoppingcart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingcartService"]])
], PaypalPaymentService);



/***/ }),

/***/ "./src/app/payment/paymentAgency-Service/stripe-payment.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/payment/paymentAgency-Service/stripe-payment.service.ts ***!
  \*************************************************************************/
/*! exports provided: StripePaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripePaymentService", function() { return StripePaymentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
/* harmony import */ var _Utility_shared_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utility-shared/utility.service */ "./src/app/Utility-shared/utility.service.ts");
/* harmony import */ var _shoppingcart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shoppingcart.service */ "./src/app/payment/shoppingcart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Utility_shared_globalConstantShare__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Utility-shared/globalConstantShare */ "./src/app/Utility-shared/globalConstantShare.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let StripePaymentService = class StripePaymentService {
    constructor(http1, http, router, authService, shoppingCartService, utilityService) {
        this.http1 = http1;
        this.http = http;
        this.router = router;
        this.authService = authService;
        this.shoppingCartService = shoppingCartService;
        this.utilityService = utilityService;
        this.urlConfig = _Utility_shared_globalConstantShare__WEBPACK_IMPORTED_MODULE_6__["GlobalConstantShare"].httpUrl;
        this.shoppingCartLists = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.paidToeflLists = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    gotoStripeCharge(stripeCardInfo) {
        // const body = JSON.stringify(stripeCardInfo);
        // const header = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.urlConfig + '/stripepayment', stripeCardInfo)
            .subscribe(data => {
            this.utilityService.successToast('결제가 성공적으로 완료되었습니다. 감사합니다', '결제 공지사항');
            const reInitSuccess = this.shoppingCartService.reInitialShoppingCartLists(data.paidToeflLists, data.stripeUserInfo);
            if (reInitSuccess) {
                this.router.navigate(['/']);
            }
        }, (error) => console.error(error));
    }
};
StripePaymentService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService_Local"],
        _shoppingcart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingcartService"],
        _Utility_shared_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]])
], StripePaymentService);



/***/ }),

/***/ "./src/app/payment/shoppingcart.service.ts":
/*!*************************************************!*\
  !*** ./src/app/payment/shoppingcart.service.ts ***!
  \*************************************************/
/*! exports provided: ShoppingcartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingcartService", function() { return ShoppingcartService; });
/* harmony import */ var _Utility_shared_globalConstantShare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility-shared/globalConstantShare */ "./src/app/Utility-shared/globalConstantShare.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _Utility_shared_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Utility-shared/utility.service */ "./src/app/Utility-shared/utility.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let ShoppingcartService = class ShoppingcartService {
    constructor(http, router, authService, utilityService) {
        this.http = http;
        this.router = router;
        this.authService = authService;
        this.utilityService = utilityService;
        this.urlConfig = _Utility_shared_globalConstantShare__WEBPACK_IMPORTED_MODULE_0__["GlobalConstantShare"].httpUrl;
        this.shoppingCartLists = [];
        this.paidToeflLists = []; // 실제 shopping item을 저장하는 공간
        this.shoppingCartListAdded = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.paidToeflListAdded = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.userInfoListUpdated = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.paypalCheck = false;
    }
    // 사용자가 인증을 하였을시 자동으로 이 method를 이용하여 User에 저장된 shoppingCartList를 가저온다
    connectAuthShoppingCart() {
        this.serverCartListSubscription = this.authService.shoppingCartLists.subscribe((shoppingcart) => {
            this.shoppingCartLists = shoppingcart;
            this.shoppingCartListAdded.next(this.shoppingCartLists); // header에 있는 shopping list에 보냄
        });
        this.paidToeflListSubscription = this.authService.paidToeflLists.subscribe((paidToeflLists) => {
            this.paidToeflLists = paidToeflLists;
            this.paidToeflListAdded.next(this.paidToeflLists);
        });
    }
    // 사용자가 로그인이 완료된 시점에서만 작동하며 welcome.component->tabset->장바구니를 클릭하였을시 작동됨
    addShoppingCartList(newShoppingCartItem) {
        const findShoppingItem = this.shoppingCartLists.filter((shoppingCart) => {
            return shoppingCart.examNo === newShoppingCartItem.examNo;
        });
        console.log('새로운 쇼핑카트 아이템', newShoppingCartItem);
        console.log('현재 쇼핑 카트안에서 추가된 쇼핑 카트내에 존재하지 않으면 0 이고 새로운 카트에 리스트를 추가한다');
        if (findShoppingItem.length === 0) {
            console.log('new item listed on Shoppingcart.');
            this.shoppingCartLists.push(newShoppingCartItem);
            console.log(this.shoppingCartLists);
            this.utilityService.successToast('선택하신 회차가 장바구니에 담겼습니다.', '공지사항');
            this.shoppingCartListAdded.next(this.shoppingCartLists); // header에 있는 shopping list에 보냄
        }
        else {
            this.utilityService.errorToast('선택하신 회차가 이미 장바구니에 있습니다.', '에러공지');
        }
    }
    // header.component에서 cart 지우기를 눌렀을때 사용
    shoppingCartItemRemoved(shoppingCartItem) {
        const findItemNumber = this.shoppingCartLists.indexOf(shoppingCartItem);
        this.shoppingCartLists.splice(findItemNumber, 1); // shopping item 제거
        this.shoppingCartListAdded.next(this.shoppingCartLists); // update된 shopping list를 header로 보냄
    }
    // payPal and Stripe 결재후 shoppingcartlist와 paidToeflLists를 updated하는 모드
    reInitialShoppingCartLists(paidToeflLists, userInfo) {
        console.log(paidToeflLists);
        console.log(userInfo);
        this.shoppingCartLists = [];
        this.paidToeflLists = paidToeflLists;
        this.userInfo = userInfo;
        this.shoppingCartListAdded.next(this.shoppingCartLists); // shopping cart를 초기화로 updated시킬때 사용
        this.paidToeflListAdded.next(paidToeflLists); // welcomeComponent를 updated할대 사용하는 Subject
        return true;
    }
    getShoppingCartLists() {
        return this.shoppingCartLists;
    }
    getPaidToefltLists() {
        console.log(this.paidToeflLists);
        return this.paidToeflLists;
    }
    getUserInfoListFromShoppingCartService() {
        console.log(this.userInfo);
        return this.userInfo;
    }
    goCheckOut() {
        this.router.navigate(['/payment/shoppingcart']);
    }
    goSave() {
        const token = localStorage.getItem('token');
        const body = JSON.stringify(this.shoppingCartLists);
        const header = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-type': 'application/json' });
        this.http.post(this.urlConfig + '/shoppingcart/' + '?token=' + token, body, { headers: header })
            .subscribe((res) => {
            console.log(res);
            const data = res.json();
            console.log(data.result);
            this.shoppingCartLists = [];
            this.shoppingCartLists = data.result;
            this.shoppingCartListAdded.next(this.shoppingCartLists); // shopping cart 추가후 변화한 값 적용하기
        }, (error) => console.log(error));
    }
};
ShoppingcartService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService_Local"],
        _Utility_shared_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]])
], ShoppingcartService);



/***/ }),

/***/ "./src/app/payment/shoppingcart/order-summary/order-summary.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/payment/shoppingcart/order-summary/order-summary.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mdb-card class=\"text-center\">\n    <mdb-card-header class=\"dark-grey-text\">\n      <h3><strong>Order Summary</strong></h3>\n    </mdb-card-header>\n\n      <div class=\"table-responsive\">\n          <table class=\"table text-right\">\n              <tbody>\n\n                  <td colspan=\"2\">Subtotal</td>\n                  <td colspan=\"1\">{{ totalAmount | currency : \"USD\"}}</td>\n\n                  <tr>\n                  <td colspan=\"2\">Estimated Tax</td>\n                  <td colspan=\"1\"></td>\n                  </tr>\n                  <tr>\n                      <th colspan=\"2\">Total</th>\n                      <th colspan=\"1\">{{ totalAmount | currency : \"USD\"}}</th>\n                  </tr>\n                  <tr>\n                    <td colspan=\"3\">\n                        <button type=\"button\"\n                        class=\"btn blue-gradient btn-block z-depth-1a waves-light\"\n                        (click)=\"onCheckOut()\"\n                        mdbWavesEffect>Check Out\n                        </button>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td colspan=\"2\">\n                      Promo Code\n                    </td>\n                    <td colspan=\"2\">\n                        12345678\n                    </td>\n                  </tr>\n                  <tr>\n                    <td colspan=\"2\">\n                        <button class=\"btn btn-block btn-sm red\" id=\"couponBtn\" (click)=\"goCancel()\">Cancel</button>\n                    </td>\n                    <td colspan=\"2\">\n                        <button class=\"btn btn-block btn-sm green\" id=\"couponBtn\" (click)=\"getPromoCode()\">apply</button>\n                    </td>\n                  </tr>\n              </tbody>\n          </table>\n      </div>\n\n\n    <mdb-card-footer class=\"text-muted success-color white-text\">\n      <p class=\"mb-0\">2 days ago</p>\n    </mdb-card-footer>\n  </mdb-card>\n\n"

/***/ }),

/***/ "./src/app/payment/shoppingcart/order-summary/order-summary.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/payment/shoppingcart/order-summary/order-summary.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQvc2hvcHBpbmdjYXJ0L29yZGVyLXN1bW1hcnkvb3JkZXItc3VtbWFyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/payment/shoppingcart/order-summary/order-summary.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/payment/shoppingcart/order-summary/order-summary.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OrderSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSummaryComponent", function() { return OrderSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let OrderSummaryComponent = class OrderSummaryComponent {
    constructor(location, router) {
        this.location = location;
        this.router = router;
    }
    onCheckOut() {
        console.log('check out clicked');
        this.router.navigate(['/payment/checkout', this.totalAmount]);
    }
    goCancel() {
        this.location.back();
    }
    getPromoCode() {
        console.log('promo click');
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Number)
], OrderSummaryComponent.prototype, "totalAmount", void 0);
OrderSummaryComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-order-summary',
        template: __webpack_require__(/*! ./order-summary.component.html */ "./src/app/payment/shoppingcart/order-summary/order-summary.component.html"),
        styles: [__webpack_require__(/*! ./order-summary.component.scss */ "./src/app/payment/shoppingcart/order-summary/order-summary.component.scss")]
    }),
    __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], OrderSummaryComponent);



/***/ }),

/***/ "./src/app/payment/shoppingcart/shoppingcart.component.html":
/*!******************************************************************!*\
  !*** ./src/app/payment/shoppingcart/shoppingcart.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<section class=\"wrapper\">\n\n  <div class=\"row mx-0 p-3\">\n\n        <div class=\"col-md-9 mx-auto\">\n            <div class=\"card z-depth-1-half text-center\">\n                <h3 class=\"card-header primary-color white-text z-depth-1\">ShoppingList</h3>\n                <mdb-progress-bar class=\"progress primary-color-dark\" mode=\"indeterminate\"></mdb-progress-bar>\n\n                <div class=\"table-responsive\">\n                    <table class=\"table align-middle text-center\">\n\n                        <thead>\n                                <tr>\n                                  <th colspan=\"1\">Toefl No</th>\n                                  <th colspan=\"1\">Toefl Image</th>\n                                  <th colspan=\"1\">Toefl Level</th>\n                                  <th colspan=\"1\">Price</th>\n                                </tr>\n                        </thead>\n\n                        <tbody>\n                                <tr *ngFor=\"let shoppingItem of shoppingCartLists\">\n\n                                  <td colspan=\"1\" class=\"align-middle\">{{shoppingItem.examNo}}</td>\n                                  <td colspan=\"1\" class=\"align-middle\">\n                                    <img src=\"https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg\" class=\"avatar rounded-circle z-depth-1-half\"></td>\n                                  <td colspan=\"1\" class=\"align-middle\">{{shoppingItem.examLevel}}</td>\n                                  <td colspan=\"1\" class=\"align-middle\">{{shoppingItem.examPrice | currency: \"USD\"}}</td>\n\n                                </tr>\n                        </tbody>\n                <tr>\n                  <th colspan=\"2\"></th>\n                  <th colspan=\"1\"><strong>Total Price</strong></th>\n                  <th colspan=\"1\"><strong>{{ totalAmount | currency: \"USD\" }}</strong></th>\n                </tr>\n                    </table>\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"col-md-3 mx-auto\">\n              <app-order-summary [totalAmount]=\"totalAmount\" id=\"sticky\" class=\"z-depth-2\"></app-order-summary>\n        </div>\n\n   </div>\n\n\n\n</section>\n\n\n"

/***/ }),

/***/ "./src/app/payment/shoppingcart/shoppingcart.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/payment/shoppingcart/shoppingcart.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  position: relative;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 4rem; }\n\n#sidebar {\n  float: left; }\n\n/* The sticky */\n\n#sidebar {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmNoZW9saGEvRGVza3RvcC9leGFtc2ltdjIuMC4wLXB1Ymxpc2hlZC9zcmMvYXBwL3BheW1lbnQvc2hvcHBpbmdjYXJ0L3Nob3BwaW5nY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNZLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFJNUI7RUFDa0IsV0FBVyxFQUFBOztBQUk3QixlQUFBOztBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixNQUFNLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50L3Nob3BwaW5nY2FydC9zaG9wcGluZ2NhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLndyYXBwZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICB9XG5cblxuICAjc2lkZWJhciB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cblxuICAvKiBUaGUgc3RpY2t5ICovXG4gICNzaWRlYmFyIHtcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/payment/shoppingcart/shoppingcart.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/payment/shoppingcart/shoppingcart.component.ts ***!
  \****************************************************************/
/*! exports provided: ShoppingcartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingcartComponent", function() { return ShoppingcartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shoppingcart.service */ "./src/app/payment/shoppingcart.service.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ShoppingcartComponent = class ShoppingcartComponent {
    constructor(shoppingcartService, authService) {
        this.shoppingcartService = shoppingcartService;
        this.authService = authService;
        this.shoppingCartLists = [];
        this.shoppingCartListAdded = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.totalAmount = 0;
    }
    ngOnInit() {
        this.shoppingCartLists = this.shoppingcartService.getShoppingCartLists();
        console.log(this.shoppingCartLists);
        for (const amount of this.shoppingCartLists) {
            this.totalAmount += amount.examPrice;
        }
    }
};
ShoppingcartComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-shoppingcart',
        template: __webpack_require__(/*! ./shoppingcart.component.html */ "./src/app/payment/shoppingcart/shoppingcart.component.html"),
        styles: [__webpack_require__(/*! ./shoppingcart.component.scss */ "./src/app/payment/shoppingcart/shoppingcart.component.scss")]
    }),
    __metadata("design:paramtypes", [_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingcartService"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService_Local"]])
], ShoppingcartComponent);



/***/ }),

/***/ "./src/app/shared/pipe-collection/shorten.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/pipe-collection/shorten.pipe.ts ***!
  \********************************************************/
/*! exports provided: ShortenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortenPipe", function() { return ShortenPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ShortenPipe = class ShortenPipe {
    transform(value, limit) {
        if (value.length > limit) {
            return value.substr(0, limit) + ' ...';
        }
        return value;
    }
};
ShortenPipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'shorten'
    })
], ShortenPipe);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-uikit-pro-standard */ "./node_modules/ng-uikit-pro-standard/fesm2015/ng-uikit-pro-standard.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// For MDB Angular Pro

// For MDB Angular Pro

let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["WavesModule"],
            ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["PreloadersModule"],
            ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["ModalModule"],
            ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["InputsModule"]
        ],
    })
], SharedModule);



/***/ }),

/***/ "./src/app/toefl/models/join-paidtoefl-toefl.model.ts":
/*!************************************************************!*\
  !*** ./src/app/toefl/models/join-paidtoefl-toefl.model.ts ***!
  \************************************************************/
/*! exports provided: JoinPaidToefl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinPaidToefl", function() { return JoinPaidToefl; });
class JoinPaidToefl {
    constructor(toeflNo, toeflDesc, toeflLevel, toeflImage, paidToeflYesOrNo) {
        this.toeflNo = toeflNo;
        this.toeflDesc = toeflDesc;
        this.toeflLevel = toeflLevel;
        this.toeflImage = toeflImage;
        this.paidToeflYesOrNo = paidToeflYesOrNo;
    }
}


/***/ }),

/***/ "./src/app/toefl/toeflExam/advance-toefl-list/advance-toefl-list.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/toefl/toeflExam/advance-toefl-list/advance-toefl-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "        <!--Grid row-->\n        <div class=\"row d-flex justify-content-center\">\n\n          <!--Grid column-->\n          <div class=\"col-md-4 mb-3 \" *ngFor=\"let toefl of toefls.slice().reverse(); let indexNo=index\">\n\n\n            <div *ngIf=\"indexNo+1 >= firstVisibleIndex && indexNo+1 <= lastVisibleIndex\">\n\n              <mdb-card class=\"testimonial-card\">\n                  <!--Bacground color-->\n                  <div class=\"card-up indigo lighten-1\">\n                  </div>\n\n                  <!--Avatar-->\n                  <div class=\"avatar mx-auto\">\n                    <img src={{toefl.toeflImage}} class=\"rounded-circle\">\n                  </div>\n\n                  <mdb-card-body>\n                    <!--Name-->\n                    <mdb-card-title>\n                      <h4>{{ toefl.toeflNo }} 회차</h4>\n                      <h6> {{ toefl.toeflLevel }}</h6>\n                    </mdb-card-title>\n                    <hr>\n                    <!--Quotation-->\n                    <p>\n                        <i class=\"fa fa-quote-left\"></i> {{ toefl.toeflDesc | shorten:50 }}<i class=\"fa fa-quote-right\"></i>\n                    </p>\n\n                    <div *ngIf=\"isTeacherAuth\">\n                        <button mdbBtn type=\"button\" color=\"indigo\" rounded=\"true\" size=\"sm\"\n                        (click)=\"onTakeExam(toefl)\" mdbWavesEffect>\n                        <mdb-icon icon=\"credit-card\" class=\"mr-1\"></mdb-icon>\n                        Take Exam\n                        </button>\n                    </div>\n                    <div *ngIf=\"!isTeacherAuth\">\n                        <div *ngIf=\"toefl.paidToeflYesOrNo\">\n                            <button mdbBtn type=\"button\" color=\"light-green\" rounded=\"true\" size=\"sm\"\n                                  (click)=\"onPurchasedDetail()\" mdbWavesEffect>\n                                  <mdb-icon icon=\"cart-plus\" class=\"mr-1\"></mdb-icon>\n                                  Purchased\n                            </button>\n                            <button mdbBtn type=\"button\" color=\"indigo\" rounded=\"true\" size=\"sm\"\n                                  (click)=\"onTakeExam(toefl)\" mdbWavesEffect>\n                                  <mdb-icon icon=\"credit-card\" class=\"mr-1\"></mdb-icon>\n                                  Take Exam\n                            </button>\n                        </div>\n                        <div *ngIf=\"!toefl.paidToeflYesOrNo\">\n                            <button mdbBtn type=\"button\" color=\"secondary\" rounded=\"true\" size=\"sm\"\n                                  (click)=\"onShoppingcart(toefl)\" mdbWavesEffect>\n                                  <mdb-icon icon=\"cart-plus\" class=\"mr-1\"></mdb-icon>\n                                  Add Cart\n                            </button>\n                            <button mdbBtn type=\"button\" color=\"primary\" rounded=\"true\" size=\"sm\"\n                                  (click)=\"onDirectPayment(toefl)\" mdbWavesEffect>\n                                  <mdb-icon icon=\"credit-card\" class=\"mr-1\"></mdb-icon>\n                                  Purchase\n                            </button>\n                        </div>\n                    </div>\n\n                  </mdb-card-body>\n              </mdb-card>\n            </div>\n          </div>\n\n      </div>\n\n      <hr class=\"my-0\">\n\n      <!--Bottom Table UI-->\n      <div class=\"d-flex justify-content-center\">\n\n        <!--Pagination -->\n        <nav class=\"my-4 pt-2\">\n          <ul class=\"pagination pagination-circle pg-purple mb-0\">\n\n            <!--First-->\n            <li class=\"page-item clearfix d-none d-md-block\" (click)=\"firstPage()\" [ngClass]=\"{disabled: activePage == 1}\">\n              <a class=\"page-link\">First</a>\n            </li>\n\n            <!--Arrow left-->\n            <li class=\"page-item\" (click)=\"previousPage($event)\" [ngClass]=\"{disabled: activePage == 1}\">\n              <a class=\"page-link\" aria-label=\"Previous\">\n                <span aria-hidden=\"true\">&laquo;</span>\n                <span class=\"sr-only\">Previous</span>\n              </a>\n            </li>\n\n            <!--Numbers-->\n            <li #pages *ngFor=\"let page of paginators | slice:firstVisiblePaginator:lastVisiblePaginator; let i = index\" class=\"page-item\" [ngClass]=\"{active: i + firstVisiblePaginator + 1 == activePage}\">\n                <a class=\"page-link waves-light\" (click)=\"changePage($event)\" mdbWavesEffect>{{page}}</a>\n            </li>\n\n\n\n            <!--Arrow right-->\n            <li class=\"page-item\" (click)=\"nextPage($event)\" [ngClass]=\"{disabled: activePage == numberOfPaginators}\">\n              <a class=\"page-link\" aria-label=\"Next\">\n                <span aria-hidden=\"true\">&raquo;</span>\n                <span class=\"sr-only\">Next</span>\n              </a>\n            </li>\n\n            <!--First-->\n            <li class=\"page-item clearfix d-none d-md-block\" (click)=\"lastPage()\" [ngClass]=\"{disabled: activePage == numberOfPaginators}\">\n              <a class=\"page-link\">Last</a>\n            </li>\n\n          </ul>\n        </nav>\n        <!--/Pagination -->\n\n      </div>\n      <!--Bottom Table UI-->\n"

/***/ }),

/***/ "./src/app/toefl/toeflExam/advance-toefl-list/advance-toefl-list.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/toefl/toeflExam/advance-toefl-list/advance-toefl-list.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZWZsL3RvZWZsRXhhbS9hZHZhbmNlLXRvZWZsLWxpc3QvYWR2YW5jZS10b2VmbC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/toefl/toeflExam/advance-toefl-list/advance-toefl-list.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/toefl/toeflExam/advance-toefl-list/advance-toefl-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: AdvanceToeflListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceToeflListComponent", function() { return AdvanceToeflListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payment_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../payment/shoppingcart.service */ "./src/app/payment/shoppingcart.service.ts");
/* harmony import */ var _payment_model_shoppingcart_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../payment/model/shoppingcart.model */ "./src/app/payment/model/shoppingcart.model.ts");
/* harmony import */ var _Utility_shared_globalConstantShare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Utility-shared/globalConstantShare */ "./src/app/Utility-shared/globalConstantShare.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let AdvanceToeflListComponent = class AdvanceToeflListComponent {
    constructor(shoppingcartService, router, ref) {
        this.shoppingcartService = shoppingcartService;
        this.router = router;
        this.ref = ref;
        this.price = _Utility_shared_globalConstantShare__WEBPACK_IMPORTED_MODULE_4__["GlobalConstantShare"].price;
        this.itemsPerPage = 6;
        this.numberOfVisiblePaginators = 10;
        this.activePage = 1;
        this.firstVisibleIndex = 1;
        this.lastVisibleIndex = this.itemsPerPage;
        this.firstVisiblePaginator = 0;
        this.lastVisiblePaginator = this.numberOfVisiblePaginators;
    }
    onShoppingcart(toefl) {
        console.log('장바구니 클릭');
        if (this.isAuth) {
            const cart = new _payment_model_shoppingcart_model__WEBPACK_IMPORTED_MODULE_3__["Shoppingcart"](toefl.toeflNo, toefl.toeflLevel, this.price);
            this.shoppingcartService.addShoppingCartList(cart);
        }
        else {
            this.router.navigate(['/auth/login']);
        }
    }
    onDirectPayment(toefl) {
        console.log('장바구니 클릭' + toefl);
        console.log(this.isAuth);
        if (this.isAuth) {
            const cart = new _payment_model_shoppingcart_model__WEBPACK_IMPORTED_MODULE_3__["Shoppingcart"](toefl.toeflNo, toefl.toeflLevel, this.price);
            this.shoppingcartService.addShoppingCartList(cart);
        }
        else {
            this.router.navigate(['/auth/login']);
        }
    }
    onPurchasedDetail(toefl) {
        console.log('Purchased Detail has been clicked');
    }
    onTakeExam(toefl) {
        console.log('Take Action for exam has been clicked');
    }
    changePage(event) {
        if (event.target.text >= 1 && event.target.text <= this.numberOfPaginators) {
            this.activePage = +event.target.text;
            this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
            this.lastVisibleIndex = this.activePage * this.itemsPerPage;
        }
    }
    nextPage(event) {
        if (this.pages.last.nativeElement.classList.contains('active')) {
            if ((this.numberOfPaginators - this.numberOfVisiblePaginators) >= this.lastVisiblePaginator) {
                this.firstVisiblePaginator += this.numberOfVisiblePaginators;
                this.lastVisiblePaginator += this.numberOfVisiblePaginators;
            }
            else {
                this.firstVisiblePaginator += this.numberOfVisiblePaginators;
                this.lastVisiblePaginator = this.numberOfPaginators;
            }
        }
        this.activePage += 1;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
    }
    previousPage(event) {
        if (this.pages.first.nativeElement.classList.contains('active')) {
            if ((this.lastVisiblePaginator - this.firstVisiblePaginator) === this.numberOfVisiblePaginators) {
                this.firstVisiblePaginator -= this.numberOfVisiblePaginators;
                this.lastVisiblePaginator -= this.numberOfVisiblePaginators;
            }
            else {
                this.firstVisiblePaginator -= this.numberOfVisiblePaginators;
                this.lastVisiblePaginator -= (this.numberOfPaginators % this.numberOfVisiblePaginators);
            }
        }
        this.activePage -= 1;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
    }
    firstPage() {
        this.activePage = 1;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
        this.firstVisiblePaginator = 0;
        this.lastVisiblePaginator = this.numberOfVisiblePaginators;
    }
    lastPage() {
        this.activePage = this.numberOfPaginators;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
        if (this.numberOfPaginators % this.numberOfVisiblePaginators === 0) {
            this.firstVisiblePaginator = this.numberOfPaginators - this.numberOfVisiblePaginators;
            this.lastVisiblePaginator = this.numberOfPaginators;
        }
        else {
            this.lastVisiblePaginator = this.numberOfPaginators;
            this.firstVisiblePaginator = this.lastVisiblePaginator -
                (this.numberOfPaginators % this.numberOfVisiblePaginators);
        }
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], AdvanceToeflListComponent.prototype, "isAuth", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], AdvanceToeflListComponent.prototype, "isTeacherAuth", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Array)
], AdvanceToeflListComponent.prototype, "toefls", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Number)
], AdvanceToeflListComponent.prototype, "numberOfPaginators", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Array)
], AdvanceToeflListComponent.prototype, "paginators", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('pages'),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
], AdvanceToeflListComponent.prototype, "pages", void 0);
AdvanceToeflListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-advance-toefl-list',
        template: __webpack_require__(/*! ./advance-toefl-list.component.html */ "./src/app/toefl/toeflExam/advance-toefl-list/advance-toefl-list.component.html"),
        styles: [__webpack_require__(/*! ./advance-toefl-list.component.scss */ "./src/app/toefl/toeflExam/advance-toefl-list/advance-toefl-list.component.scss")]
    }),
    __metadata("design:paramtypes", [_payment_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingcartService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
], AdvanceToeflListComponent);



/***/ }),

/***/ "./src/app/toefl/toeflExam/basic-toefl-list/basic-toefl-list.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/toefl/toeflExam/basic-toefl-list/basic-toefl-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "        <!--Grid row-->\n        <div class=\"row d-flex justify-content-center\">\n\n          <!--Grid column-->\n          <div class=\"col-md-4 mb-3 \" *ngFor=\"let toefl of toefls.slice().reverse(); let indexNo=index\">\n\n\n            <div *ngIf=\"indexNo+1 >= firstVisibleIndex && indexNo+1 <= lastVisibleIndex\">\n\n              <mdb-card class=\"testimonial-card\">\n                  <!--Bacground color-->\n                  <div class=\"card-up indigo lighten-1\">\n                  </div>\n\n                  <!--Avatar-->\n                  <div class=\"avatar mx-auto\">\n                    <img src={{toefl.toeflImage}} class=\"rounded-circle\">\n                  </div>\n\n                  <mdb-card-body>\n                    <!--Name-->\n                    <mdb-card-title>\n                      <h4>{{ toefl.toeflNo }} 회차</h4>\n                      <h6> {{ toefl.toeflLevel }}</h6>\n                    </mdb-card-title>\n                    <hr>\n                    <!--Quotation-->\n                    <p>\n                        <i class=\"fa fa-quote-left\"></i> {{ toefl.toeflDesc | shorten:50 }}<i class=\"fa fa-quote-right\"></i>\n                    </p>\n\n\n                    <div *ngIf=\"isTeacherAuth\">\n                        <button mdbBtn type=\"button\" color=\"indigo\" rounded=\"true\" size=\"sm\"\n                        (click)=\"onTakeExam(toefl)\" mdbWavesEffect>\n                        <mdb-icon icon=\"credit-card\" class=\"mr-1\"></mdb-icon>\n                        Take Exam\n                       </button>\n                    </div>\n\n                    <div *ngIf=\"!isTeacherAuth\">\n                        <div *ngIf=\"toefl.paidToeflYesOrNo\">\n                            <button mdbBtn type=\"button\" color=\"light-green\" rounded=\"true\" size=\"sm\"\n                                  (click)=\"onPurchasedDetail()\" mdbWavesEffect>\n                                  <mdb-icon icon=\"cart-plus\" class=\"mr-1\"></mdb-icon>\n                                  Purchased\n                            </button>\n                            <button mdbBtn type=\"button\" color=\"indigo\" rounded=\"true\" size=\"sm\"\n                                  (click)=\"onTakeExam(toefl)\" mdbWavesEffect>\n                                  <mdb-icon icon=\"credit-card\" class=\"mr-1\"></mdb-icon>\n                                  Take Exam\n                            </button>\n                          </div>\n                          <div *ngIf=\"!toefl.paidToeflYesOrNo\">\n                            <button mdbBtn type=\"button\" color=\"secondary\" rounded=\"true\" size=\"sm\"\n                                  (click)=\"onShoppingcart(toefl)\" mdbWavesEffect>\n                                  <mdb-icon icon=\"cart-plus\" class=\"mr-1\"></mdb-icon>\n                                  Add Cart\n                            </button>\n                            <button mdbBtn type=\"button\" color=\"primary\" rounded=\"true\" size=\"sm\"\n                                  (click)=\"onDirectPayment(toefl)\" mdbWavesEffect>\n                                  <mdb-icon icon=\"credit-card\" class=\"mr-1\"></mdb-icon>\n                                  Purchase\n                            </button>\n                          </div>\n                    </div>\n\n                  </mdb-card-body>\n              </mdb-card>\n            </div>\n          </div>\n\n      </div>\n\n      <hr class=\"my-0\">\n\n      <!--Bottom Table UI-->\n      <div class=\"d-flex justify-content-center\">\n\n        <!--Pagination -->\n        <nav class=\"my-4 pt-2\">\n          <ul class=\"pagination pagination-circle pg-purple mb-0\">\n\n            <!--First-->\n            <li class=\"page-item clearfix d-none d-md-block\" (click)=\"firstPage()\" [ngClass]=\"{disabled: activePage == 1}\">\n              <a class=\"page-link\">First</a>\n            </li>\n\n            <!--Arrow left-->\n            <li class=\"page-item\" (click)=\"previousPage($event)\" [ngClass]=\"{disabled: activePage == 1}\">\n              <a class=\"page-link\" aria-label=\"Previous\">\n                <span aria-hidden=\"true\">&laquo;</span>\n                <span class=\"sr-only\">Previous</span>\n              </a>\n            </li>\n\n            <!--Numbers-->\n            <li #pages *ngFor=\"let page of paginators | slice:firstVisiblePaginator:lastVisiblePaginator; let i = index\" class=\"page-item\" [ngClass]=\"{active: i + firstVisiblePaginator + 1 == activePage}\">\n                <a class=\"page-link waves-light\" (click)=\"changePage($event)\" mdbWavesEffect>{{page}}</a>\n            </li>\n\n\n\n            <!--Arrow right-->\n            <li class=\"page-item\" (click)=\"nextPage($event)\" [ngClass]=\"{disabled: activePage == numberOfPaginators}\">\n              <a class=\"page-link\" aria-label=\"Next\">\n                <span aria-hidden=\"true\">&raquo;</span>\n                <span class=\"sr-only\">Next</span>\n              </a>\n            </li>\n\n            <!--First-->\n            <li class=\"page-item clearfix d-none d-md-block\" (click)=\"lastPage()\" [ngClass]=\"{disabled: activePage == numberOfPaginators}\">\n              <a class=\"page-link\">Last</a>\n            </li>\n\n          </ul>\n        </nav>\n        <!--/Pagination -->\n\n      </div>\n      <!--Bottom Table UI-->\n"

/***/ }),

/***/ "./src/app/toefl/toeflExam/basic-toefl-list/basic-toefl-list.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/toefl/toeflExam/basic-toefl-list/basic-toefl-list.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZWZsL3RvZWZsRXhhbS9iYXNpYy10b2VmbC1saXN0L2Jhc2ljLXRvZWZsLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/toefl/toeflExam/basic-toefl-list/basic-toefl-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/toefl/toeflExam/basic-toefl-list/basic-toefl-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: BasicToeflListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicToeflListComponent", function() { return BasicToeflListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payment_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../payment/shoppingcart.service */ "./src/app/payment/shoppingcart.service.ts");
/* harmony import */ var _payment_model_shoppingcart_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../payment/model/shoppingcart.model */ "./src/app/payment/model/shoppingcart.model.ts");
/* harmony import */ var _Utility_shared_globalConstantShare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Utility-shared/globalConstantShare */ "./src/app/Utility-shared/globalConstantShare.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let BasicToeflListComponent = class BasicToeflListComponent {
    constructor(shoppingcartService, router, ref) {
        this.shoppingcartService = shoppingcartService;
        this.router = router;
        this.ref = ref;
        this.price = _Utility_shared_globalConstantShare__WEBPACK_IMPORTED_MODULE_4__["GlobalConstantShare"].price;
        this.itemsPerPage = 6;
        this.numberOfVisiblePaginators = 10;
        this.activePage = 1;
        this.firstVisibleIndex = 1;
        this.lastVisibleIndex = this.itemsPerPage;
        this.firstVisiblePaginator = 0;
        this.lastVisiblePaginator = this.numberOfVisiblePaginators;
    }
    onShoppingcart(toefl) {
        console.log('장바구니 클릭');
        if (this.isAuth) {
            const cart = new _payment_model_shoppingcart_model__WEBPACK_IMPORTED_MODULE_3__["Shoppingcart"](toefl.toeflNo, toefl.toeflLevel, this.price);
            this.shoppingcartService.addShoppingCartList(cart);
        }
        else {
            this.router.navigate(['/auth/login']);
        }
    }
    onDirectPayment(toefl) {
        console.log('장바구니 클릭' + toefl);
        console.log(this.isAuth);
        if (this.isAuth) {
            const cart = new _payment_model_shoppingcart_model__WEBPACK_IMPORTED_MODULE_3__["Shoppingcart"](toefl.toeflNo, toefl.toeflLevel, this.price);
            this.shoppingcartService.addShoppingCartList(cart);
        }
        else {
            this.router.navigate(['/auth/login']);
        }
    }
    onPurchasedDetail(toefl) {
        console.log('Purchased Detail has been clicked');
    }
    onTakeExam(toefl) {
        console.log('Take Action for exam has been clicked');
    }
    changePage(event) {
        if (event.target.text >= 1 && event.target.text <= this.numberOfPaginators) {
            this.activePage = +event.target.text;
            this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
            this.lastVisibleIndex = this.activePage * this.itemsPerPage;
        }
    }
    nextPage(event) {
        if (this.pages.last.nativeElement.classList.contains('active')) {
            if ((this.numberOfPaginators - this.numberOfVisiblePaginators) >= this.lastVisiblePaginator) {
                this.firstVisiblePaginator += this.numberOfVisiblePaginators;
                this.lastVisiblePaginator += this.numberOfVisiblePaginators;
            }
            else {
                this.firstVisiblePaginator += this.numberOfVisiblePaginators;
                this.lastVisiblePaginator = this.numberOfPaginators;
            }
        }
        this.activePage += 1;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
    }
    previousPage(event) {
        if (this.pages.first.nativeElement.classList.contains('active')) {
            if ((this.lastVisiblePaginator - this.firstVisiblePaginator) === this.numberOfVisiblePaginators) {
                this.firstVisiblePaginator -= this.numberOfVisiblePaginators;
                this.lastVisiblePaginator -= this.numberOfVisiblePaginators;
            }
            else {
                this.firstVisiblePaginator -= this.numberOfVisiblePaginators;
                this.lastVisiblePaginator -= (this.numberOfPaginators % this.numberOfVisiblePaginators);
            }
        }
        this.activePage -= 1;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
    }
    firstPage() {
        this.activePage = 1;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
        this.firstVisiblePaginator = 0;
        this.lastVisiblePaginator = this.numberOfVisiblePaginators;
    }
    lastPage() {
        this.activePage = this.numberOfPaginators;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
        if (this.numberOfPaginators % this.numberOfVisiblePaginators === 0) {
            this.firstVisiblePaginator = this.numberOfPaginators - this.numberOfVisiblePaginators;
            this.lastVisiblePaginator = this.numberOfPaginators;
        }
        else {
            this.lastVisiblePaginator = this.numberOfPaginators;
            this.firstVisiblePaginator = this.lastVisiblePaginator -
                (this.numberOfPaginators % this.numberOfVisiblePaginators);
        }
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], BasicToeflListComponent.prototype, "isAuth", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], BasicToeflListComponent.prototype, "isTeacherAuth", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Array)
], BasicToeflListComponent.prototype, "toefls", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Number)
], BasicToeflListComponent.prototype, "numberOfPaginators", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Array)
], BasicToeflListComponent.prototype, "paginators", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('pages'),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
], BasicToeflListComponent.prototype, "pages", void 0);
BasicToeflListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-basic-toefl-list',
        template: __webpack_require__(/*! ./basic-toefl-list.component.html */ "./src/app/toefl/toeflExam/basic-toefl-list/basic-toefl-list.component.html"),
        styles: [__webpack_require__(/*! ./basic-toefl-list.component.scss */ "./src/app/toefl/toeflExam/basic-toefl-list/basic-toefl-list.component.scss")]
    }),
    __metadata("design:paramtypes", [_payment_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingcartService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
], BasicToeflListComponent);



/***/ }),

/***/ "./src/app/toefl/toeflExam/beginner-toefl-list/beginner-toefl-list.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/toefl/toeflExam/beginner-toefl-list/beginner-toefl-list.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "        <!--Grid row-->\n        <div class=\"row d-flex justify-content-center\">\n\n          <!--Grid column-->\n          <div class=\"col-md-4 mb-3 \" *ngFor=\"let toefl of toefls.slice().reverse(); let indexNo=index\">\n\n\n            <div *ngIf=\"indexNo+1 >= firstVisibleIndex && indexNo+1 <= lastVisibleIndex\">\n\n              <mdb-card class=\"testimonial-card\">\n                  <!--Bacground color-->\n                  <div class=\"card-up indigo lighten-1\">\n                  </div>\n\n                  <!--Avatar-->\n                  <div class=\"avatar mx-auto\">\n                    <img src={{toefl.toeflImage}} class=\"rounded-circle\">\n                  </div>\n\n                  <mdb-card-body>\n                    <!--Name-->\n                    <mdb-card-title>\n                      <h4>{{ toefl.toeflNo }} 회차</h4>\n                      <h6> {{ toefl.toeflLevel }}</h6>\n                    </mdb-card-title>\n                    <hr>\n                    <!--Quotation-->\n                    <p>\n                        <i class=\"fa fa-quote-left\"></i> {{ toefl.toeflDesc | shorten:50 }}<i class=\"fa fa-quote-right\"></i>\n                    </p>\n\n\n                    <div *ngIf=\"isTeacherAuth\">\n                        <button mdbBtn type=\"button\" color=\"indigo\" rounded=\"true\" size=\"sm\"\n                        (click)=\"onTakeExam(toefl)\" mdbWavesEffect>\n                        <mdb-icon icon=\"credit-card\" class=\"mr-1\"></mdb-icon>\n                        Take Exam\n                       </button>\n                    </div>\n\n                    <div *ngIf=\"!isTeacherAuth\">\n                        <div *ngIf=\"toefl.paidToeflYesOrNo\">\n                            <button mdbBtn type=\"button\" color=\"light-green\" rounded=\"true\" size=\"sm\"\n                                  (click)=\"onPurchasedDetail()\" mdbWavesEffect>\n                                  <mdb-icon icon=\"cart-plus\" class=\"mr-1\"></mdb-icon>\n                                  Purchased\n                            </button>\n                            <button mdbBtn type=\"button\" color=\"indigo\" rounded=\"true\" size=\"sm\"\n                                  (click)=\"onTakeExam(toefl)\" mdbWavesEffect>\n                                  <mdb-icon icon=\"credit-card\" class=\"mr-1\"></mdb-icon>\n                                  Take Exam\n                            </button>\n                          </div>\n                          <div *ngIf=\"!toefl.paidToeflYesOrNo\">\n                            <button mdbBtn type=\"button\" color=\"secondary\" rounded=\"true\" size=\"sm\"\n                                  (click)=\"onShoppingcart(toefl)\" mdbWavesEffect>\n                                  <mdb-icon icon=\"cart-plus\" class=\"mr-1\"></mdb-icon>\n                                  Add Cart\n                            </button>\n                            <button mdbBtn type=\"button\" color=\"primary\" rounded=\"true\" size=\"sm\"\n                                  (click)=\"onDirectPayment(toefl)\" mdbWavesEffect>\n                                  <mdb-icon icon=\"credit-card\" class=\"mr-1\"></mdb-icon>\n                                  Purchase\n                            </button>\n                          </div>\n                    </div>\n\n                  </mdb-card-body>\n              </mdb-card>\n            </div>\n          </div>\n\n      </div>\n\n      <hr class=\"my-0\">\n\n      <!--Bottom Table UI-->\n      <div class=\"d-flex justify-content-center\">\n\n        <!--Pagination -->\n        <nav class=\"my-4 pt-2\">\n          <ul class=\"pagination pagination-circle pg-purple mb-0\">\n\n            <!--First-->\n            <li class=\"page-item clearfix d-none d-md-block\" (click)=\"firstPage()\" [ngClass]=\"{disabled: activePage == 1}\">\n              <a class=\"page-link\">First</a>\n            </li>\n\n            <!--Arrow left-->\n            <li class=\"page-item\" (click)=\"previousPage($event)\" [ngClass]=\"{disabled: activePage == 1}\">\n              <a class=\"page-link\" aria-label=\"Previous\">\n                <span aria-hidden=\"true\">&laquo;</span>\n                <span class=\"sr-only\">Previous</span>\n              </a>\n            </li>\n\n            <!--Numbers-->\n            <li #pages *ngFor=\"let page of paginators | slice:firstVisiblePaginator:lastVisiblePaginator; let i = index\" class=\"page-item\" [ngClass]=\"{active: i + firstVisiblePaginator + 1 == activePage}\">\n                <a class=\"page-link waves-light\" (click)=\"changePage($event)\" mdbWavesEffect>{{page}}</a>\n            </li>\n\n\n\n            <!--Arrow right-->\n            <li class=\"page-item\" (click)=\"nextPage($event)\" [ngClass]=\"{disabled: activePage == numberOfPaginators}\">\n              <a class=\"page-link\" aria-label=\"Next\">\n                <span aria-hidden=\"true\">&raquo;</span>\n                <span class=\"sr-only\">Next</span>\n              </a>\n            </li>\n\n            <!--First-->\n            <li class=\"page-item clearfix d-none d-md-block\" (click)=\"lastPage()\" [ngClass]=\"{disabled: activePage == numberOfPaginators}\">\n              <a class=\"page-link\">Last</a>\n            </li>\n\n          </ul>\n        </nav>\n        <!--/Pagination -->\n\n      </div>\n      <!--Bottom Table UI-->\n"

/***/ }),

/***/ "./src/app/toefl/toeflExam/beginner-toefl-list/beginner-toefl-list.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/toefl/toeflExam/beginner-toefl-list/beginner-toefl-list.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZWZsL3RvZWZsRXhhbS9iZWdpbm5lci10b2VmbC1saXN0L2JlZ2lubmVyLXRvZWZsLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/toefl/toeflExam/beginner-toefl-list/beginner-toefl-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/toefl/toeflExam/beginner-toefl-list/beginner-toefl-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BeginnerToeflListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeginnerToeflListComponent", function() { return BeginnerToeflListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payment_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../payment/shoppingcart.service */ "./src/app/payment/shoppingcart.service.ts");
/* harmony import */ var _payment_model_shoppingcart_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../payment/model/shoppingcart.model */ "./src/app/payment/model/shoppingcart.model.ts");
/* harmony import */ var _Utility_shared_globalConstantShare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Utility-shared/globalConstantShare */ "./src/app/Utility-shared/globalConstantShare.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let BeginnerToeflListComponent = class BeginnerToeflListComponent {
    constructor(shoppingcartService, router, ref) {
        this.shoppingcartService = shoppingcartService;
        this.router = router;
        this.ref = ref;
        this.price = _Utility_shared_globalConstantShare__WEBPACK_IMPORTED_MODULE_4__["GlobalConstantShare"].price;
        this.itemsPerPage = 6;
        this.numberOfVisiblePaginators = 10;
        this.activePage = 1;
        this.firstVisibleIndex = 1;
        this.lastVisibleIndex = this.itemsPerPage;
        this.firstVisiblePaginator = 0;
        this.lastVisiblePaginator = this.numberOfVisiblePaginators;
    }
    onShoppingcart(toefl) {
        console.log('장바구니 클릭');
        if (this.isAuth) {
            const cart = new _payment_model_shoppingcart_model__WEBPACK_IMPORTED_MODULE_3__["Shoppingcart"](toefl.toeflNo, toefl.toeflLevel, this.price);
            this.shoppingcartService.addShoppingCartList(cart);
        }
        else {
            this.router.navigate(['/auth/login']);
        }
    }
    onDirectPayment(toefl) {
        console.log('장바구니 클릭' + toefl);
        console.log(this.isAuth);
        if (this.isAuth) {
            const cart = new _payment_model_shoppingcart_model__WEBPACK_IMPORTED_MODULE_3__["Shoppingcart"](toefl.toeflNo, toefl.toeflLevel, this.price);
            this.shoppingcartService.addShoppingCartList(cart);
        }
        else {
            this.router.navigate(['/auth/login']);
        }
    }
    onPurchasedDetail(toefl) {
        console.log('Purchased Detail has been clicked');
    }
    onTakeExam(toefl) {
        console.log('Take Action for exam has been clicked');
    }
    changePage(event) {
        if (event.target.text >= 1 && event.target.text <= this.numberOfPaginators) {
            this.activePage = +event.target.text;
            this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
            this.lastVisibleIndex = this.activePage * this.itemsPerPage;
        }
    }
    nextPage(event) {
        if (this.pages.last.nativeElement.classList.contains('active')) {
            if ((this.numberOfPaginators - this.numberOfVisiblePaginators) >= this.lastVisiblePaginator) {
                this.firstVisiblePaginator += this.numberOfVisiblePaginators;
                this.lastVisiblePaginator += this.numberOfVisiblePaginators;
            }
            else {
                this.firstVisiblePaginator += this.numberOfVisiblePaginators;
                this.lastVisiblePaginator = this.numberOfPaginators;
            }
        }
        this.activePage += 1;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
    }
    previousPage(event) {
        if (this.pages.first.nativeElement.classList.contains('active')) {
            if ((this.lastVisiblePaginator - this.firstVisiblePaginator) === this.numberOfVisiblePaginators) {
                this.firstVisiblePaginator -= this.numberOfVisiblePaginators;
                this.lastVisiblePaginator -= this.numberOfVisiblePaginators;
            }
            else {
                this.firstVisiblePaginator -= this.numberOfVisiblePaginators;
                this.lastVisiblePaginator -= (this.numberOfPaginators % this.numberOfVisiblePaginators);
            }
        }
        this.activePage -= 1;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
    }
    firstPage() {
        this.activePage = 1;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
        this.firstVisiblePaginator = 0;
        this.lastVisiblePaginator = this.numberOfVisiblePaginators;
    }
    lastPage() {
        this.activePage = this.numberOfPaginators;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
        if (this.numberOfPaginators % this.numberOfVisiblePaginators === 0) {
            this.firstVisiblePaginator = this.numberOfPaginators - this.numberOfVisiblePaginators;
            this.lastVisiblePaginator = this.numberOfPaginators;
        }
        else {
            this.lastVisiblePaginator = this.numberOfPaginators;
            this.firstVisiblePaginator = this.lastVisiblePaginator -
                (this.numberOfPaginators % this.numberOfVisiblePaginators);
        }
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], BeginnerToeflListComponent.prototype, "isAuth", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], BeginnerToeflListComponent.prototype, "isTeacherAuth", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Array)
], BeginnerToeflListComponent.prototype, "toefls", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Number)
], BeginnerToeflListComponent.prototype, "numberOfPaginators", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Array)
], BeginnerToeflListComponent.prototype, "paginators", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('pages'),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
], BeginnerToeflListComponent.prototype, "pages", void 0);
BeginnerToeflListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-beginner-toefl-list',
        template: __webpack_require__(/*! ./beginner-toefl-list.component.html */ "./src/app/toefl/toeflExam/beginner-toefl-list/beginner-toefl-list.component.html"),
        styles: [__webpack_require__(/*! ./beginner-toefl-list.component.scss */ "./src/app/toefl/toeflExam/beginner-toefl-list/beginner-toefl-list.component.scss")]
    }),
    __metadata("design:paramtypes", [_payment_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingcartService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
], BeginnerToeflListComponent);



/***/ }),

/***/ "./src/app/toefl/toeflExam/event-toefl-list/event-toefl-list.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/toefl/toeflExam/event-toefl-list/event-toefl-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n        <mdb-carousel [isControls]=\"true\" class=\"carousel-multi-item multi-animation\" [type]=\"'carousel-multi-item'\" [animation]=\"'slide'\">\n\n            <mdb-carousel-item>\n            <div class=\"col-md-4\">\n                <mdb-card class=\"mb-3\">\n                <mdb-card-img src=\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg\" alt=\"Card image cap\"></mdb-card-img>\n                <mdb-card-body>\n                    <mdb-card-title>\n                    <h4>Card title</h4>\n                    </mdb-card-title>\n                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                    <a href=\"#\" mdbBtn color=\"primary\" class=\"waves-light\" mdbWavesEffect>Button</a>\n                </mdb-card-body>\n                </mdb-card>\n            </div>\n            <div class=\"col-md-4 clearfix d-none d-md-block\">\n                <mdb-card class=\"mb-3\">\n                <mdb-card-img src=\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg\" alt=\"Card image cap\"></mdb-card-img>\n                <mdb-card-body>\n                    <mdb-card-title>\n                    <h4>Card title</h4>\n                    </mdb-card-title>\n                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                    <a href=\"#\" mdbBtn color=\"primary\" class=\"waves-light\" mdbWavesEffect>Button</a>\n                </mdb-card-body>\n                </mdb-card>\n            </div>\n            <div class=\"col-md-4 clearfix d-none d-md-block\">\n                <mdb-card class=\"mb-3\">\n                <mdb-card-img src=\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg\" alt=\"Card image cap\"></mdb-card-img>\n                <mdb-card-body>\n                    <mdb-card-title>\n                    <h4>Card title</h4>\n                    </mdb-card-title>\n                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                    <a href=\"#\" mdbBtn color=\"primary\" class=\"waves-light\" mdbWavesEffect>Button</a>\n                </mdb-card-body>\n                </mdb-card>\n            </div>\n            </mdb-carousel-item>\n\n\n            <mdb-carousel-item>\n            <div class=\"col-md-4\">\n                <mdb-card class=\"mb-3\">\n                <mdb-card-img src=\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg\" alt=\"Card image cap\"></mdb-card-img>\n                <mdb-card-body>\n                    <mdb-card-title>\n                    <h4>Card title</h4>\n                    </mdb-card-title>\n                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                    <a href=\"#\" mdbBtn color=\"primary\" class=\"waves-light\" mdbWavesEffect>Button</a>\n                </mdb-card-body>\n                </mdb-card>\n            </div>\n            <div class=\"col-md-4 clearfix d-none d-md-block\">\n                <mdb-card class=\"mb-3\">\n                <mdb-card-img src=\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg\" alt=\"Card image cap\"></mdb-card-img>\n                <mdb-card-body>\n                    <mdb-card-title>\n                    <h4>Card title</h4>\n                    </mdb-card-title>\n                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                    <a href=\"#\" mdbBtn color=\"primary\" class=\"waves-light\" mdbWavesEffect>Button</a>\n                </mdb-card-body>\n                </mdb-card>\n            </div>\n            <div class=\"col-md-4 clearfix d-none d-md-block\">\n                <mdb-card class=\"mb-3\">\n                <mdb-card-img src=\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg\" alt=\"Card image cap\"></mdb-card-img>\n                <mdb-card-body>\n                    <mdb-card-title>\n                    <h4>Card title</h4>\n                    </mdb-card-title>\n                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                    <a href=\"#\" mdbBtn color=\"primary\" class=\"waves-light\" mdbWavesEffect>Button</a>\n                </mdb-card-body>\n                </mdb-card>\n            </div>\n            </mdb-carousel-item>\n         \n         \n            <mdb-carousel-item>\n            <div class=\"col-md-4\">\n                <mdb-card class=\"mb-3\">\n                <mdb-card-img src=\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg\" alt=\"Card image cap\"></mdb-card-img>\n                <mdb-card-body>\n                    <mdb-card-title>\n                    <h4>Card title</h4>\n                    </mdb-card-title>\n                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                    <a href=\"#\" mdbBtn color=\"primary\" class=\"waves-light\" mdbWavesEffect>Button</a>\n                </mdb-card-body>\n                </mdb-card>\n            </div>\n            <div class=\"col-md-4 clearfix d-none d-md-block\">\n                <mdb-card class=\"mb-3\">\n                <mdb-card-img src=\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(51).jpg\" alt=\"Card image cap\"></mdb-card-img>\n                <mdb-card-body>\n                    <mdb-card-title>\n                    <h4>Card title</h4>\n                    </mdb-card-title>\n                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                    <a href=\"#\" mdbBtn color=\"primary\" class=\"waves-light\" mdbWavesEffect>Button</a>\n                </mdb-card-body>\n                </mdb-card>\n            </div>\n            <div class=\"col-md-4 clearfix d-none d-md-block\">\n                <mdb-card class=\"mb-3\">\n                <mdb-card-img src=\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg\" alt=\"Card image cap\"></mdb-card-img>\n                <mdb-card-body>\n                    <mdb-card-title>\n                    <h4>Card title</h4>\n                    </mdb-card-title>\n                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                    <a href=\"#\" mdbBtn color=\"primary\" class=\"waves-light\" mdbWavesEffect>Button</a>\n                </mdb-card-body>\n                </mdb-card>\n            </div>\n            </mdb-carousel-item>\n          \n        </mdb-carousel>\n"

/***/ }),

/***/ "./src/app/toefl/toeflExam/event-toefl-list/event-toefl-list.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/toefl/toeflExam/event-toefl-list/event-toefl-list.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZWZsL3RvZWZsRXhhbS9ldmVudC10b2VmbC1saXN0L2V2ZW50LXRvZWZsLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/toefl/toeflExam/event-toefl-list/event-toefl-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/toefl/toeflExam/event-toefl-list/event-toefl-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: EventToeflListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventToeflListComponent", function() { return EventToeflListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let EventToeflListComponent = class EventToeflListComponent {
    constructor() { }
    ngOnInit() {
    }
};
EventToeflListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-event-toefl-list',
        template: __webpack_require__(/*! ./event-toefl-list.component.html */ "./src/app/toefl/toeflExam/event-toefl-list/event-toefl-list.component.html"),
        styles: [__webpack_require__(/*! ./event-toefl-list.component.scss */ "./src/app/toefl/toeflExam/event-toefl-list/event-toefl-list.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], EventToeflListComponent);



/***/ }),

/***/ "./src/app/toefl/toeflExam/intermediate-toefl-list/intermediate-toefl-list.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/toefl/toeflExam/intermediate-toefl-list/intermediate-toefl-list.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n        <div class=\"row d-flex justify-content-center\">\n\n          <div class=\"col-md-4 mt-1 \" *ngFor=\"let toefl of toefls.slice().reverse(); let indexNo=index\">\n\n\n              <div *ngIf=\"indexNo+1 >= firstVisibleIndex && indexNo+1 <= lastVisibleIndex\">\n\n                <mdb-card class=\"testimonial-card\">\n\n                    <div class=\"card-up indigo lighten-1\">\n                    </div>\n                    <div class=\"avatar mx-auto\">\n                      <img src={{toefl.toeflImage}} class=\"rounded-circle\">\n                    </div>\n\n                    <mdb-card-body>\n\n                      <mdb-card-title>\n                        <h4>{{ toefl.toeflNo }} 회차</h4>\n                        <h6> {{ toefl.toeflLevel }}</h6>\n                      </mdb-card-title>\n                      <hr>\n\n                      <p>\n                          <i class=\"fa fa-quote-left\"></i> {{ toefl.toeflDesc | shorten:50 }}<i class=\"fa fa-quote-right\"></i>\n                      </p>\n\n                      <div *ngIf=\"isTeacherAuth\">\n                          <button mdbBtn type=\"button\" color=\"indigo\" rounded=\"true\" size=\"sm\"\n                          (click)=\"onTakeExam(toefl)\" mdbWavesEffect>\n                          <mdb-icon icon=\"credit-card\" class=\"mr-1\"></mdb-icon>\n                          Take Exam\n                         </button>\n                      </div>\n\n                      <div *ngIf=\"!isTeacherAuth\">\n                          <div *ngIf=\"toefl.paidToeflYesOrNo\">\n                              <button mdbBtn type=\"button\" color=\"light-green\" rounded=\"true\" size=\"sm\"\n                                    (click)=\"onPurchasedDetail()\" mdbWavesEffect>\n                                    <mdb-icon icon=\"cart-plus\" class=\"mr-1\"></mdb-icon>\n                                    Purchased\n                              </button>\n                              <button mdbBtn type=\"button\" color=\"indigo\" rounded=\"true\" size=\"sm\"\n                                    (click)=\"onTakeExam(toefl)\" mdbWavesEffect>\n                                    <mdb-icon icon=\"credit-card\" class=\"mr-1\"></mdb-icon>\n                                    Take Exam\n                              </button>\n                          </div>\n                          <div *ngIf=\"!toefl.paidToeflYesOrNo\">\n                              <button mdbBtn type=\"button\" color=\"secondary\" rounded=\"true\" size=\"sm\"\n                                    (click)=\"onShoppingcart(toefl)\" mdbWavesEffect>\n                                    <mdb-icon icon=\"cart-plus\" class=\"mr-1\"></mdb-icon>\n                                    Add Cart\n                              </button>\n                              <button mdbBtn type=\"button\" color=\"primary\" rounded=\"true\" size=\"sm\"\n                                    (click)=\"onDirectPayment(toefl)\" mdbWavesEffect>\n                                    <mdb-icon icon=\"credit-card\" class=\"mr-1\"></mdb-icon>\n                                    Purchase\n                              </button>\n                          </div>\n                      </div>\n\n                      </mdb-card-body>\n                </mdb-card>\n              </div>\n\n            </div>\n\n      </div>\n\n      <hr class=\"my-0\">\n\n      <div class=\"d-flex justify-content-center\">\n\n        <nav class=\"my-4 pt-1\">\n          <ul class=\"pagination pagination-circle pg-purple mb-0\">\n            <li class=\"page-item clearfix d-none d-md-block\" (click)=\"firstPage()\" [ngClass]=\"{disabled: activePage == 1}\">\n              <a class=\"page-link\">First</a>\n            </li>\n            <li class=\"page-item\" (click)=\"previousPage($event)\" [ngClass]=\"{disabled: activePage == 1}\">\n              <a class=\"page-link\" aria-label=\"Previous\">\n                <span aria-hidden=\"true\">&laquo;</span>\n                <span class=\"sr-only\">Previous</span>\n              </a>\n            </li>\n            <li #pages *ngFor=\"let page of paginators | slice:firstVisiblePaginator:lastVisiblePaginator; let i = index\" class=\"page-item\" [ngClass]=\"{active: i + firstVisiblePaginator + 1 == activePage}\">\n                <a class=\"page-link waves-light\" (click)=\"changePage($event)\" mdbWavesEffect>{{page}}</a>\n            </li>\n\n            <!--Arrow right-->\n            <li class=\"page-item\" (click)=\"nextPage($event)\" [ngClass]=\"{disabled: activePage == numberOfPaginators}\">\n              <a class=\"page-link\" aria-label=\"Next\">\n                <span aria-hidden=\"true\">&raquo;</span>\n                <span class=\"sr-only\">Next</span>\n              </a>\n            </li>\n\n            <!--First-->\n            <li class=\"page-item clearfix d-none d-md-block\" (click)=\"lastPage()\" [ngClass]=\"{disabled: activePage == numberOfPaginators}\">\n              <a class=\"page-link\">Last</a>\n            </li>\n\n          </ul>\n        </nav>\n        <!--/Pagination -->\n\n      </div>\n      <!--Bottom Table UI-->\n"

/***/ }),

/***/ "./src/app/toefl/toeflExam/intermediate-toefl-list/intermediate-toefl-list.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/toefl/toeflExam/intermediate-toefl-list/intermediate-toefl-list.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZWZsL3RvZWZsRXhhbS9pbnRlcm1lZGlhdGUtdG9lZmwtbGlzdC9pbnRlcm1lZGlhdGUtdG9lZmwtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/toefl/toeflExam/intermediate-toefl-list/intermediate-toefl-list.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/toefl/toeflExam/intermediate-toefl-list/intermediate-toefl-list.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: IntermediateToeflListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntermediateToeflListComponent", function() { return IntermediateToeflListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payment_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../payment/shoppingcart.service */ "./src/app/payment/shoppingcart.service.ts");
/* harmony import */ var _payment_model_shoppingcart_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../payment/model/shoppingcart.model */ "./src/app/payment/model/shoppingcart.model.ts");
/* harmony import */ var _Utility_shared_globalConstantShare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Utility-shared/globalConstantShare */ "./src/app/Utility-shared/globalConstantShare.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let IntermediateToeflListComponent = class IntermediateToeflListComponent {
    constructor(shoppingcartService, router, ref) {
        this.shoppingcartService = shoppingcartService;
        this.router = router;
        this.ref = ref;
        this.price = _Utility_shared_globalConstantShare__WEBPACK_IMPORTED_MODULE_4__["GlobalConstantShare"].price;
        this.itemsPerPage = 6;
        this.numberOfVisiblePaginators = 10;
        this.activePage = 1;
        this.firstVisibleIndex = 1;
        this.lastVisibleIndex = this.itemsPerPage;
        this.firstVisiblePaginator = 0;
        this.lastVisiblePaginator = this.numberOfVisiblePaginators;
    }
    onShoppingcart(toefl) {
        console.log('장바구니 클릭');
        if (this.isAuth) {
            const cart = new _payment_model_shoppingcart_model__WEBPACK_IMPORTED_MODULE_3__["Shoppingcart"](toefl.toeflNo, toefl.toeflLevel, this.price);
            this.shoppingcartService.addShoppingCartList(cart);
        }
        else {
            this.router.navigate(['/auth/login']);
        }
    }
    onDirectPayment(toefl) {
        console.log('장바구니 클릭' + toefl);
        console.log(this.isAuth);
        if (this.isAuth) {
            const cart = new _payment_model_shoppingcart_model__WEBPACK_IMPORTED_MODULE_3__["Shoppingcart"](toefl.toeflNo, toefl.toeflLevel, this.price);
            this.shoppingcartService.addShoppingCartList(cart);
        }
        else {
            this.router.navigate(['/auth/login']);
        }
    }
    onPurchasedDetail(toefl) {
        console.log('Purchased Detail has been clicked');
    }
    onTakeExam(toefl) {
        console.log('Take Action for exam has been clicked');
    }
    changePage(event) {
        if (event.target.text >= 1 && event.target.text <= this.numberOfPaginators) {
            this.activePage = +event.target.text;
            this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
            this.lastVisibleIndex = this.activePage * this.itemsPerPage;
        }
    }
    nextPage(event) {
        if (this.pages.last.nativeElement.classList.contains('active')) {
            if ((this.numberOfPaginators - this.numberOfVisiblePaginators) >= this.lastVisiblePaginator) {
                this.firstVisiblePaginator += this.numberOfVisiblePaginators;
                this.lastVisiblePaginator += this.numberOfVisiblePaginators;
            }
            else {
                this.firstVisiblePaginator += this.numberOfVisiblePaginators;
                this.lastVisiblePaginator = this.numberOfPaginators;
            }
        }
        this.activePage += 1;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
    }
    previousPage(event) {
        if (this.pages.first.nativeElement.classList.contains('active')) {
            if ((this.lastVisiblePaginator - this.firstVisiblePaginator) === this.numberOfVisiblePaginators) {
                this.firstVisiblePaginator -= this.numberOfVisiblePaginators;
                this.lastVisiblePaginator -= this.numberOfVisiblePaginators;
            }
            else {
                this.firstVisiblePaginator -= this.numberOfVisiblePaginators;
                this.lastVisiblePaginator -= (this.numberOfPaginators % this.numberOfVisiblePaginators);
            }
        }
        this.activePage -= 1;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
    }
    firstPage() {
        this.activePage = 1;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
        this.firstVisiblePaginator = 0;
        this.lastVisiblePaginator = this.numberOfVisiblePaginators;
    }
    lastPage() {
        this.activePage = this.numberOfPaginators;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
        if (this.numberOfPaginators % this.numberOfVisiblePaginators === 0) {
            this.firstVisiblePaginator = this.numberOfPaginators - this.numberOfVisiblePaginators;
            this.lastVisiblePaginator = this.numberOfPaginators;
        }
        else {
            this.lastVisiblePaginator = this.numberOfPaginators;
            this.firstVisiblePaginator = this.lastVisiblePaginator -
                (this.numberOfPaginators % this.numberOfVisiblePaginators);
        }
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], IntermediateToeflListComponent.prototype, "isAuth", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], IntermediateToeflListComponent.prototype, "isTeacherAuth", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Array)
], IntermediateToeflListComponent.prototype, "toefls", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Number)
], IntermediateToeflListComponent.prototype, "numberOfPaginators", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Array)
], IntermediateToeflListComponent.prototype, "paginators", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('pages'),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
], IntermediateToeflListComponent.prototype, "pages", void 0);
IntermediateToeflListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-intermediate-toefl-list',
        template: __webpack_require__(/*! ./intermediate-toefl-list.component.html */ "./src/app/toefl/toeflExam/intermediate-toefl-list/intermediate-toefl-list.component.html"),
        styles: [__webpack_require__(/*! ./intermediate-toefl-list.component.scss */ "./src/app/toefl/toeflExam/intermediate-toefl-list/intermediate-toefl-list.component.scss")]
    }),
    __metadata("design:paramtypes", [_payment_shoppingcart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingcartService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
], IntermediateToeflListComponent);



/***/ }),

/***/ "./src/app/toefl/toeflExam/toefl-exam.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/toefl/toeflExam/toefl-exam.component.ts ***!
  \*********************************************************/
/*! exports provided: ToeflExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToeflExamComponent", function() { return ToeflExamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ToeflExamComponent = class ToeflExamComponent {
    constructor() { }
};
ToeflExamComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-toefl',
        template: `
          <router-outlet></router-outlet>
  `
    }),
    __metadata("design:paramtypes", [])
], ToeflExamComponent);



/***/ }),

/***/ "./src/app/toefl/toeflExam/toefl-list/toefl-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/toefl/toeflExam/toefl-list/toefl-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n        <div class=\"row d-flex justify-content-center\">\n\n          <div class=\"col-md-4 mt-1 \" *ngFor=\"let toefl of toefls.slice().reverse(); let indexNo=index\">\n\n\n              <div *ngIf=\"indexNo+1 >= firstVisibleIndex && indexNo+1 <= lastVisibleIndex\">\n\n                <mdb-card class=\"testimonial-card\">\n\n                    <div class=\"card-up indigo lighten-1\">\n                    </div>\n                    <div class=\"avatar mx-auto\">\n                      <img src={{toefl.toeflImage}} class=\"rounded-circle\">\n                    </div>\n\n                    <mdb-card-body>\n\n                      <mdb-card-title>\n                        <h4>{{ toefl.toeflNo }} 회차</h4>\n                        <h6> {{ toefl.toeflLevel }}</h6>\n                      </mdb-card-title>\n                      <hr>\n\n                      <p>\n                          <i class=\"fa fa-quote-left\"></i> {{ toefl.toeflDesc | shorten:50 }}<i class=\"fa fa-quote-right\"></i>\n                      </p>\n\n                      <div *ngIf=\"isTeacherAuth\">\n                          <button mdbBtn type=\"button\" color=\"indigo\" rounded=\"true\" size=\"sm\"\n                          (click)=\"onTakeExam(toefl)\" mdbWavesEffect>\n                          <mdb-icon icon=\"credit-card\" class=\"mr-1\"></mdb-icon>\n                          Take Exam\n                         </button>\n                      </div>\n\n                      <div *ngIf=\"!isTeacherAuth\">\n                          <div *ngIf=\"toefl.paidToeflYesOrNo\">\n                              <button mdbBtn type=\"button\" color=\"light-green\" rounded=\"true\" size=\"sm\"\n                                    (click)=\"onPurchasedDetail()\" mdbWavesEffect>\n                                    <mdb-icon icon=\"cart-plus\" class=\"mr-1\"></mdb-icon>\n                                    Purchased\n                              </button>\n                              <button mdbBtn type=\"button\" color=\"indigo\" rounded=\"true\" size=\"sm\"\n                                    (click)=\"onTakeExam(toefl)\" mdbWavesEffect>\n                                    <mdb-icon icon=\"credit-card\" class=\"mr-1\"></mdb-icon>\n                                    Take Exam\n                              </button>\n                          </div>\n                          <div *ngIf=\"!toefl.paidToeflYesOrNo\">\n                              <button mdbBtn type=\"button\" color=\"secondary\" rounded=\"true\" size=\"sm\"\n                                    (click)=\"onShoppingcart(toefl)\" mdbWavesEffect>\n                                    <mdb-icon icon=\"cart-plus\" class=\"mr-1\"></mdb-icon>\n                                    Add Cart\n                              </button>\n                              <button mdbBtn type=\"button\" color=\"primary\" rounded=\"true\" size=\"sm\"\n                                    (click)=\"onDirectPayment(toefl)\" mdbWavesEffect>\n                                    <mdb-icon icon=\"credit-card\" class=\"mr-1\"></mdb-icon>\n                                    Purchase\n                              </button>\n                          </div>\n                      </div>\n\n                      </mdb-card-body>\n                </mdb-card>\n              </div>\n\n            </div>\n\n      </div>\n\n      <hr class=\"my-0\">\n\n      <div class=\"d-flex justify-content-center\">\n\n        <nav class=\"my-4 pt-1\">\n          <ul class=\"pagination pagination-circle pg-purple mb-0\">\n            <li class=\"page-item clearfix d-none d-md-block\" (click)=\"firstPage()\" [ngClass]=\"{disabled: activePage == 1}\">\n              <a class=\"page-link\">First</a>\n            </li>\n            <li class=\"page-item\" (click)=\"previousPage($event)\" [ngClass]=\"{disabled: activePage == 1}\">\n              <a class=\"page-link\" aria-label=\"Previous\">\n                <span aria-hidden=\"true\">&laquo;</span>\n                <span class=\"sr-only\">Previous</span>\n              </a>\n            </li>\n            <li #pages *ngFor=\"let page of paginators | slice:firstVisiblePaginator:lastVisiblePaginator; let i = index\" class=\"page-item\" [ngClass]=\"{active: i + firstVisiblePaginator + 1 == activePage}\">\n                <a class=\"page-link waves-light\" (click)=\"changePage($event)\" mdbWavesEffect>{{page}}</a>\n            </li>\n\n            <!--Arrow right-->\n            <li class=\"page-item\" (click)=\"nextPage($event)\" [ngClass]=\"{disabled: activePage == numberOfPaginators}\">\n              <a class=\"page-link\" aria-label=\"Next\">\n                <span aria-hidden=\"true\">&raquo;</span>\n                <span class=\"sr-only\">Next</span>\n              </a>\n            </li>\n\n            <!--First-->\n            <li class=\"page-item clearfix d-none d-md-block\" (click)=\"lastPage()\" [ngClass]=\"{disabled: activePage == numberOfPaginators}\">\n              <a class=\"page-link\">Last</a>\n            </li>\n\n          </ul>\n        </nav>\n        <!--/Pagination -->\n\n      </div>\n      <!--Bottom Table UI-->\n"

/***/ }),

/***/ "./src/app/toefl/toeflExam/toefl-list/toefl-list.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/toefl/toeflExam/toefl-list/toefl-list.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n  background: url('students.jpg') no-repeat center center;\n  background-size: cover;\n  height: 100vh; }\n\n.navbar {\n  z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmNoZW9saGEvRGVza3RvcC9leGFtc2ltdjIuMC4wLXB1Ymxpc2hlZC9zcmMvYXBwL3RvZWZsL3RvZWZsRXhhbS90b2VmbC1saXN0L3RvZWZsLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx1REFBeUU7RUFDekUsc0JBQXNCO0VBQ3RCLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RvZWZsL3RvZWZsRXhhbS90b2VmbC1saXN0L3RvZWZsLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi52aWV3IHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0dWRlbnRzLmpwZ1wiKW5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubmF2YmFyIHtcbiAgei1pbmRleDogMTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/toefl/toeflExam/toefl-list/toefl-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/toefl/toeflExam/toefl-list/toefl-list.component.ts ***!
  \********************************************************************/
/*! exports provided: ToeflListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToeflListComponent", function() { return ToeflListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payment_model_shoppingcart_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../payment/model/shoppingcart.model */ "./src/app/payment/model/shoppingcart.model.ts");
/* harmony import */ var _payment_shoppingcart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../payment/shoppingcart.service */ "./src/app/payment/shoppingcart.service.ts");
/* harmony import */ var _Utility_shared_globalConstantShare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Utility-shared/globalConstantShare */ "./src/app/Utility-shared/globalConstantShare.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let ToeflListComponent = class ToeflListComponent {
    constructor(shoppingcartService, router, ref) {
        this.shoppingcartService = shoppingcartService;
        this.router = router;
        this.ref = ref;
        this.itemsPerPage = 6;
        this.numberOfVisiblePaginators = 10;
        this.activePage = 1;
        this.firstVisibleIndex = 1;
        this.lastVisibleIndex = this.itemsPerPage;
        this.firstVisiblePaginator = 0;
        this.lastVisiblePaginator = this.numberOfVisiblePaginators;
        // shopping cart내 toefl 가격 명시 global 변수: 10불기준
        this.price = _Utility_shared_globalConstantShare__WEBPACK_IMPORTED_MODULE_4__["GlobalConstantShare"].price;
    }
    onShoppingcart(toefl) {
        console.log('장바구니 클릭');
        if (this.isAuth) {
            const cart = new _payment_model_shoppingcart_model__WEBPACK_IMPORTED_MODULE_2__["Shoppingcart"](toefl.toeflNo, toefl.toeflLevel, this.price);
            this.shoppingcartService.addShoppingCartList(cart);
        }
        else {
            this.router.navigate(['/auth/login']);
        }
    }
    onDirectPayment(toefl) {
        console.log('장바구니 클릭' + toefl);
        console.log(this.isAuth);
        if (this.isAuth) {
            const cart = new _payment_model_shoppingcart_model__WEBPACK_IMPORTED_MODULE_2__["Shoppingcart"](toefl.toeflNo, toefl.toeflLevel, this.price);
            this.shoppingcartService.addShoppingCartList(cart);
        }
        else {
            this.router.navigate(['/auth/login']);
        }
    }
    onPurchasedDetail(toefl) {
        console.log('Purchased Detail has been clicked');
    }
    onTakeExam(toefl) {
        console.log('Take Action for exam has been clicked');
    }
    changePage(event) {
        if (event.target.text >= 1 && event.target.text <= this.numberOfPaginators) {
            this.activePage = +event.target.text;
            this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
            this.lastVisibleIndex = this.activePage * this.itemsPerPage;
        }
    }
    nextPage(event) {
        if (this.pages.last.nativeElement.classList.contains('active')) {
            if ((this.numberOfPaginators - this.numberOfVisiblePaginators) >= this.lastVisiblePaginator) {
                this.firstVisiblePaginator += this.numberOfVisiblePaginators;
                this.lastVisiblePaginator += this.numberOfVisiblePaginators;
            }
            else {
                this.firstVisiblePaginator += this.numberOfVisiblePaginators;
                this.lastVisiblePaginator = this.numberOfPaginators;
            }
        }
        this.activePage += 1;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
    }
    previousPage(event) {
        if (this.pages.first.nativeElement.classList.contains('active')) {
            if ((this.lastVisiblePaginator - this.firstVisiblePaginator) === this.numberOfVisiblePaginators) {
                this.firstVisiblePaginator -= this.numberOfVisiblePaginators;
                this.lastVisiblePaginator -= this.numberOfVisiblePaginators;
            }
            else {
                this.firstVisiblePaginator -= this.numberOfVisiblePaginators;
                this.lastVisiblePaginator -= (this.numberOfPaginators % this.numberOfVisiblePaginators);
            }
        }
        this.activePage -= 1;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
    }
    firstPage() {
        this.activePage = 1;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
        this.firstVisiblePaginator = 0;
        this.lastVisiblePaginator = this.numberOfVisiblePaginators;
    }
    lastPage() {
        this.activePage = this.numberOfPaginators;
        this.firstVisibleIndex = this.activePage * this.itemsPerPage - this.itemsPerPage + 1;
        this.lastVisibleIndex = this.activePage * this.itemsPerPage;
        if (this.numberOfPaginators % this.numberOfVisiblePaginators === 0) {
            this.firstVisiblePaginator = this.numberOfPaginators - this.numberOfVisiblePaginators;
            this.lastVisiblePaginator = this.numberOfPaginators;
        }
        else {
            this.lastVisiblePaginator = this.numberOfPaginators;
            this.firstVisiblePaginator = this.lastVisiblePaginator -
                (this.numberOfPaginators % this.numberOfVisiblePaginators);
        }
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], ToeflListComponent.prototype, "isAuth", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], ToeflListComponent.prototype, "isTeacherAuth", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Array)
], ToeflListComponent.prototype, "toefls", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Number)
], ToeflListComponent.prototype, "numberOfPaginators", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Array)
], ToeflListComponent.prototype, "paginators", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('pages'),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
], ToeflListComponent.prototype, "pages", void 0);
ToeflListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-toefl-list',
        template: __webpack_require__(/*! ./toefl-list.component.html */ "./src/app/toefl/toeflExam/toefl-list/toefl-list.component.html"),
        styles: [__webpack_require__(/*! ./toefl-list.component.scss */ "./src/app/toefl/toeflExam/toefl-list/toefl-list.component.scss")]
    }),
    __metadata("design:paramtypes", [_payment_shoppingcart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingcartService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
], ToeflListComponent);



/***/ }),

/***/ "./src/app/toefl/toeflExam/toefl-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/toefl/toeflExam/toefl-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: toeflExamRoutes, ToeflExamRoutingModule, toeflExamRoutingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toeflExamRoutes", function() { return toeflExamRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToeflExamRoutingModule", function() { return ToeflExamRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toeflExamRoutingComponents", function() { return toeflExamRoutingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _toefl_exam_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toefl-exam.component */ "./src/app/toefl/toeflExam/toefl-exam.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const toeflExamRoutes = [
    { path: 'toeflexam', component: _toefl_exam_component__WEBPACK_IMPORTED_MODULE_2__["ToeflExamComponent"], children: [] }
];
let ToeflExamRoutingModule = class ToeflExamRoutingModule {
};
ToeflExamRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(toeflExamRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], ToeflExamRoutingModule);

const toeflExamRoutingComponents = [
    _toefl_exam_component__WEBPACK_IMPORTED_MODULE_2__["ToeflExamComponent"]
];


/***/ }),

/***/ "./src/app/toefl/toeflExam/toeflexam.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/toefl/toeflExam/toeflexam.module.ts ***!
  \*****************************************************/
/*! exports provided: ToeflExamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToeflExamModule", function() { return ToeflExamModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _toefl_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toefl-routing.module */ "./src/app/toefl/toeflExam/toefl-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _toeflexam_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toeflexam.service */ "./src/app/toefl/toeflExam/toeflexam.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ToeflExamModule = class ToeflExamModule {
};
ToeflExamModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _toefl_routing_module__WEBPACK_IMPORTED_MODULE_2__["toeflExamRoutingComponents"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _toefl_routing_module__WEBPACK_IMPORTED_MODULE_2__["ToeflExamRoutingModule"]
        ],
        providers: [_toeflexam_service__WEBPACK_IMPORTED_MODULE_4__["ToeflExamService"]]
    })
], ToeflExamModule);



/***/ }),

/***/ "./src/app/toefl/toeflExam/toeflexam.service.ts":
/*!******************************************************!*\
  !*** ./src/app/toefl/toeflExam/toeflexam.service.ts ***!
  \******************************************************/
/*! exports provided: ToeflExamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToeflExamService", function() { return ToeflExamService; });
/* harmony import */ var _Utility_shared_globalConstantShare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utility-shared/globalConstantShare */ "./src/app/Utility-shared/globalConstantShare.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ToeflExamService = class ToeflExamService {
    constructor(http) {
        this.http = http;
        this.loginStatusChecked = false;
        this.urlConfig = _Utility_shared_globalConstantShare__WEBPACK_IMPORTED_MODULE_0__["GlobalConstantShare"].httpUrl; // 실제 url 주소가 있는곳
        this.toefls = [];
        this.toeflListChanged = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    getAllToeflLists() {
        this.http.get(this.urlConfig + '/showExam/')
            .subscribe((postToefls) => {
            this.toefls = postToefls.toefls;
            this.toeflListChanged.next([...this.toefls]);
        }, (error) => console.log(error));
    }
};
ToeflExamService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], ToeflExamService);



/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- 메인화면 모드 -->\n\n<div class=\"view\">\n  <div class=\"full-bg-img\">\n      <div class=\"mask rgba-black-light flex-center\">\n          <div class=\"container\">\n              <div class=\"white-text text-center wow fadeInUp\">\n                  <h2 class=\"font-weight-bold\">TOEFL EXAM SIMULATOR</h2>\n                  <h5 class=\"font-weight-bold\">When you need to get better scores</h5>\n                  <br>\n                  <p>In your heart, You know you can get the TOEFL SCORES eaily and fast that you want !!! </p>\n          </div>\n      </div>\n  </div>\n</div>\n</div>\n\n<!-- 두번째 2개 카드 모드 -->\n\n<section class=\"pt-3 pb-3\">\n    <div class=\"row\" id=\"floatingCard\">\n        <div class=\"col-md-1\"></div>\n        <div class=\"col-md-5\">\n            <div class=\"border border-gray rounded z-depth-4\">\n                <div class=\"card white text-center\">\n                        <!-- Card content -->\n                        <mdb-card-body cascade=\"true\" class=\"text-center\">\n\n                                <!--Title-->\n                                <mdb-card-title>\n                                <h4>\n                                    <strong><i class=\"fa fa-share-alt-square\"></i> To Share Your Tests</strong>\n                                </h4>\n                                </mdb-card-title>\n\n                                <hr>\n                                <button type=\"button\" class=\"btn indigo accent-4 btn-rounded\">SignUp</button>\n                                <mdb-card-text class=\"mt-3\">\n                                    If you want to share your Toefl Test, Please Sign Up for Sharing...\n                                </mdb-card-text>\n\n                                <a type=\"button\" class=\"btn-floating btn-sm btn-fb\"><i class=\"fa fa-facebook\"></i></a>\n                                <a type=\"button\" class=\"btn-floating btn-sm btn-ins\"><i class=\"fa fa-instagram\"></i></a>\n                                <a type=\"button\" class=\"btn-floating btn-sm btn-yt\"><i class=\"fa fa-youtube\"></i></a>\n\n                        </mdb-card-body>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-5\">\n          <div class=\"border border-gray rounded z-depth-4\">\n              <div class=\"card white text-center\">\n                      <!-- Card content -->\n                      <mdb-card-body cascade=\"true\" class=\"text-center\">\n\n                              <!--Title-->\n                              <mdb-card-title>\n                              <h4>\n                                  <strong><i class=\"fa fa-pencil-square\"></i> To Take Our Best Toefl Exams</strong>\n                              </h4>\n                              </mdb-card-title>\n\n                              <hr>\n                              <button type=\"button\" class=\"btn deep-orange darken-4 btn-rounded\">   SignUp   </button>\n                              <mdb-card-text class=\"mt-3\">\n                                  If you want to take Our Toefl Test, Please Sign Up for taking...\n                              </mdb-card-text>\n\n                              <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" class=\"btn-fb waves-light\" mdbWavesEffect>\n                                 <i class=\"fa fa-facebook\"></i></a>\n                              <a type=\"button\" mdbBtn floating=\"true\" size=\"sm\" class=\" btn-gplus waves-light\" mdbWavesEffect>\n                                 <i class=\"fa fa-google-plus\"></i></a>\n\n                      </mdb-card-body>\n              </div>\n          </div>\n        </div>\n    </div>\n</section>\n\n<!-- 세번째 이영역을 carousal을 구현하는 영역임 -->\n<section class=\"pb-3\">\n\n    <h2 class=\"h1 py-5 font-weight-bold text-center\">Do You Want To Take Our Free Toefl Exams?</h2>\n\n    <p class=\"px-5 mb-3 pb-3 lead grey-text text-center\">\n        Please just SignUp or Login to take our Free Toefl Exams to help your decisions.\n    </p>\n\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n\n          <mdb-carousel [isControls]=\"true\" [animation]=\"'slide'\">\n\n              <mdb-carousel-item>\n                  <img class=\"view1\" src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg\" alt=\"First slide\">\n                    <div class=\"mask rgba-black-light waves-light\" mdbWavesEffect></div>\n                    <div class=\"carousel-caption\">\n                        <h3 class=\"py-3 font-weight-bold\">\n                            <strong>으메이징한 무료시험 체험하기</strong>\n                        </h3>\n                        <button class=\"btn btn-secondary btn-rounded btn-md  waves-light\" mdbWavesEffect>\n                            <i class=\"fa fa-clone left\"></i>무료시험 보러가기\n                        </button>\n                      </div>\n              </mdb-carousel-item>\n              <mdb-carousel-item>\n                  <img class=\"view1\" src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg\" alt=\"Second slide\">\n                  <div class=\"mask rgba-black-light waves-light\" mdbWavesEffect></div>\n                  <div class=\"carousel-caption\">\n                      <h3 class=\"py-3 font-weight-bold\">\n                          <strong>으메이징한 무료시험 체험하기</strong>\n                      </h3>\n                      <button class=\"btn btn-secondary btn-rounded btn-md  waves-light\" mdbWavesEffect>\n                          <i class=\"fa fa-clone left\"></i>무료시험 보러가기\n                      </button>\n                    </div>\n              </mdb-carousel-item>\n              <mdb-carousel-item>\n                  <img class=\"view1\" src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg\" alt=\"Third slide\">\n                  <div class=\"mask rgba-black-light waves-light\" mdbWavesEffect></div>\n                  <div class=\"carousel-caption\">\n                      <h3 class=\"py-3 font-weight-bold\">\n                          <strong>으메이징한 무료시험 체험하기</strong>\n                      </h3>\n                      <button class=\"btn btn-secondary btn-rounded btn-md  waves-light\" mdbWavesEffect>\n                          <i class=\"fa fa-clone left\"></i>무료시험 보러가기\n                      </button>\n                    </div>\n              </mdb-carousel-item>\n\n          </mdb-carousel>\n\n      </div>\n  </div>\n\n</section>\n\n<!-- 네번째 이영역은 핫 이벤트 세일이 가능한 toefl list를 전시하고 결재가 이루어 지도록 한다 -->\n<section class=\"pb-3\">\n\n  <h2 class=\"h1 py-5 font-weight-bold text-center\">The Latest Tests With The Highest Hit Rate? 75%Off</h2>\n  <p class=\"px-5 mb-3 pb-3 lead grey-text text-center\">\n      You can take a Toefl Exam with one of the hottest deals for our best Toefl Exams.\n  </p>\n\n  <div class=\"row\">\n      <div class=\"col-md-11 mx-auto\">\n              <app-event-toefl-list></app-event-toefl-list>\n      </div>\n  </div>\n\n\n</section>\n\n\n<!-- 다섯번째 tab을 이용한 모든 토플 시험을 볼수 있도록 구성한다 -->\n<section class=\"text-center\">\n\n  <h2 class=\"h1-responsive font-weight-bold text-center my-5\">Current Toefl Exams</h2>\n  <p class=\"grey-text text-center w-responsive mx-auto mb-5\">Look at our best Toefl Exams for your success. Please try to select one of them to get your best results for your Toefl Scores</p>\n\n<div *ngIf=\"toefls\">\n  <div class=\"row\">\n      <div class=\"col-md-11 p-0 mx-auto\">\n              <mdb-tabset #staticTabs [buttonClass]=\"'md-tabs tabs-6 pills-secondary blue lighten-2'\" [contentClass]=\"''\">\n\n                          <mdb-tab heading=\"All Exams\">\n                              <div class=\"row\">\n                                  <div class=\"col-12\">\n\n                                      <app-toefl-list\n                                                    [toefls]=\"jointPaidToeflLists\"\n                                                    [numberOfPaginators]=\"numberOfPaginators\"\n                                                    [paginators]=\"paginators\"\n                                                    [isAuth]=\"isAuth\"\n                                                    [isTeacherAuth]=\"isTeacherAuth\"></app-toefl-list>\n                                  </div>\n                              </div>\n                          </mdb-tab>\n\n\n                          <mdb-tab heading=\"Beginners Exams\">\n                              <div class=\"row\">\n                                  <div class=\"col-12 \">\n\n                                      <app-beginner-toefl-list\n                                                              [toefls]=\"beginnerToefls\"\n                                                              [numberOfPaginators]=\"beginnerNumberOfPaginators\"\n                                                              [paginators]=\"beginnerPaginators\"\n                                                              [isAuth]=\"isAuth\"\n                                                              [isTeacherAuth]=\"isTeacherAuth\"></app-beginner-toefl-list>\n                                  </div>\n                              </div>\n                          </mdb-tab>\n\n\n                          <mdb-tab heading=\"Basic Exams\">\n                              <div class=\"row\">\n                                  <div class=\"col-12\">\n\n                                      <app-basic-toefl-list\n                                                            [toefls]=\"basicToefls\"\n                                                            [numberOfPaginators]=\"basicNumberOfPaginators\"\n                                                            [paginators]=\"basicPaginators\"\n                                                            [isAuth]=\"isAuth\"\n                                                            [isTeacherAuth]=\"isTeacherAuth\"></app-basic-toefl-list>\n                                  </div>\n                              </div>\n                          </mdb-tab>\n\n\n                          <mdb-tab heading=\"Intermediate Exams\">\n                              <div class=\"row\">\n                                  <div class=\"col-12\">\n\n                                      <app-intermediate-toefl-list\n                                                                  [toefls]=\"intermediateToefls\"\n                                                                  [numberOfPaginators]=\"interNumberOfPaginators\"\n                                                                  [paginators]=\"interPaginators\"\n                                                                  [isAuth]=\"isAuth\"\n                                                                  [isTeacherAuth]=\"isTeacherAuth\"></app-intermediate-toefl-list>\n                                  </div>\n                              </div>\n                          </mdb-tab>\n\n\n                          <mdb-tab heading=\"Advanced Exams\">\n                              <div class=\"row\">\n                                  <div class=\"col-12\">\n\n                                      <app-advance-toefl-list\n                                                            [toefls]=\"advancedToefls\"\n                                                            [numberOfPaginators]=\"advNumberOfPaginators\"\n                                                            [paginators]=\"advPaginators\"\n                                                            [isAuth]=\"isAuth\"\n                                                            [isTeacherAuth]=\"isTeacherAuth\"></app-advance-toefl-list>\n                                  </div>\n                              </div>\n                          </mdb-tab>\n\n\n                          <mdb-tab heading=\"Each Section Exams\">\n                                  <div class=\"row\">\n                                      <div class=\"col-12\">\n\n                                          <app-toefl-list\n                                                        [toefls]=\"jointPaidToeflLists\"\n                                                        [numberOfPaginators]=\"numberOfPaginators\"\n                                                        [paginators]=\"paginators\"\n                                                        [isAuth]=\"isAuth\"\n                                                        [isTeacherAuth]=\"isTeacherAuth\"></app-toefl-list>\n                                        </div>\n                                  </div>\n                          </mdb-tab>\n\n              </mdb-tabset>\n      </div>\n  </div>\n</div>\n</section>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.scss":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n  background: url('university.jpg') no-repeat center center;\n  background-size: cover;\n  height: 80vh; }\n\n.view1 {\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 30rem; }\n\n#floatingCard {\n  position: relative;\n  bottom: 50px; }\n\n.navbar {\n  z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbmNoZW9saGEvRGVza3RvcC9leGFtc2ltdjIuMC4wLXB1Ymxpc2hlZC9zcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlEQUFzRTtFQUN0RSxzQkFBc0I7RUFDdEIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUdmO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFHZDtFQUNFLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnZpZXcge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvdW5pdmVyc2l0eS5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogODB2aDtcbn1cblxuLnZpZXcxIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcmVtO1xufVxuXG4jZmxvYXRpbmdDYXJke1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNTBweDtcbn1cblxuLm5hdmJhciB7XG4gIHotaW5kZXg6IDE7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _toefl_toeflExam_toeflexam_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toefl/toeflExam/toeflexam.service */ "./src/app/toefl/toeflExam/toeflexam.service.ts");
/* harmony import */ var _payment_shoppingcart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../payment/shoppingcart.service */ "./src/app/payment/shoppingcart.service.ts");
/* harmony import */ var _toefl_models_join_paidtoefl_toefl_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toefl/models/join-paidtoefl-toefl.model */ "./src/app/toefl/models/join-paidtoefl-toefl.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let WelcomeComponent = class WelcomeComponent {
    constructor(toeflExamService, authService, shoppincartService) {
        this.toeflExamService = toeflExamService;
        this.authService = authService;
        this.shoppincartService = shoppincartService;
        // 원본 toefl list init
        this.toefls = [];
        // 지불이 완료된 toefl list
        this.newPaidToeflLists = [];
        this.jointPaidToeflLists = [];
        this.beginnerToefls = [];
        this.basicToefls = [];
        this.intermediateToefls = [];
        this.advancedToefls = [];
        // 각 인증에 필요한 기능 설정
        this.paidToeflCheck = false;
        this.isAuth = false;
        this.isTeacherAuth = false;
        // bootstrap tab에서 사용하는 각종 기능규정
        this.itemsPerPage = 6;
        this.paginators = [];
        this.beginnerPaginators = [];
        this.basicPaginators = [];
        this.interPaginators = [];
        this.advPaginators = [];
    }
    ngOnInit() {
        /* 새로 결재된 토플명단을 추출하는 subject: this.shoppincartService.paidToeflListAdded
                                            paidToeflListAdded observable 위치: authservice내 로그인시
                                                                               shoppingcat 연결시
        */
        this.paidToeflListSubscription = this.shoppincartService.paidToeflListAdded
            .subscribe((paidToeflLists) => {
            this.newPaidToeflLists = paidToeflLists;
            console.log('updated newPaid Toefl Lists: ' + this.newPaidToeflLists);
        });
        this.toeflListSubscription = this.toeflExamService.toeflListChanged
            .subscribe((toefls) => {
            this.toefls = toefls;
            console.log('original toefl lists: ' + this.toefls);
            console.log('new paid toefl lists: ' + this.newPaidToeflLists);
            if (this.newPaidToeflLists.length !== 0) {
                this.jointPaidToeflLists = [];
                for (const toeflItem of this.toefls) {
                    this.paidToeflCheck = false;
                    for (const paidToeflItem of this.newPaidToeflLists) {
                        if (toeflItem.toeflNo === paidToeflItem.examNo) {
                            this.paidToeflCheck = true;
                        }
                    }
                    this.joinPaidToefl = new _toefl_models_join_paidtoefl_toefl_model__WEBPACK_IMPORTED_MODULE_4__["JoinPaidToefl"](toeflItem.toeflNo, toeflItem.toeflDesc, toeflItem.toeflLevel, toeflItem.toeflImage, this.paidToeflCheck);
                    this.jointPaidToeflLists.push(this.joinPaidToefl);
                }
            }
            else {
                this.jointPaidToeflLists = [];
                for (const toeflItem of this.toefls) {
                    this.paidToeflCheck = false;
                    this.joinPaidToefl = new _toefl_models_join_paidtoefl_toefl_model__WEBPACK_IMPORTED_MODULE_4__["JoinPaidToefl"](toeflItem.toeflNo, toeflItem.toeflDesc, toeflItem.toeflLevel, toeflItem.toeflImage, this.paidToeflCheck);
                    this.jointPaidToeflLists.push(this.joinPaidToefl);
                }
            }
            for (const eachToefl of this.jointPaidToeflLists) {
                if (eachToefl.toeflLevel === 'Beginner') {
                    this.beginnerToefls.push(eachToefl);
                }
                else if (eachToefl.toeflLevel === 'Basic') {
                    this.basicToefls.push(eachToefl);
                }
                else if (eachToefl.toeflLevel === 'InterMediate') {
                    this.intermediateToefls.push(eachToefl);
                }
                else if (eachToefl.toeflLevel === 'Advanced') {
                    this.advancedToefls.push(eachToefl);
                }
            }
            this.calculatePagenator(this.jointPaidToeflLists, this.beginnerToefls, this.basicToefls, this.intermediateToefls, this.advancedToefls);
            console.log('this is join paid toefl lists: ' + this.jointPaidToeflLists);
        });
        this.toeflExamService.getAllToeflLists();
        this.newPaidToeflLists = this.shoppincartService.getPaidToefltLists();
        this.isAuth = this.authService.isAuthenticated; // 일반 사용자 인증
        this.isTeacherAuth = this.authService.isteacherAuthenticated; // teacher 관리자 인증
    }
    ngOnDestroy() {
        this.toeflListSubscription.unsubscribe();
        this.paidToeflListSubscription.unsubscribe();
    }
    calculatePagenator(toefls, beginnerToefls, basicToefls, interToefls, advancedToefls) {
        // 모든 토플 명단에 관한 pagenator 산출
        if (toefls.length % this.itemsPerPage === 0) {
            this.numberOfPaginators = Math.floor(toefls.length / this.itemsPerPage);
        }
        else {
            this.numberOfPaginators = Math.floor(toefls.length / this.itemsPerPage + 1);
        }
        for (let i = 1; i <= this.numberOfPaginators; i++) {
            this.paginators.push(i);
        }
        // beginner level toefl pagenator 산출
        if (beginnerToefls.length % this.itemsPerPage === 0) {
            this.beginnerNumberOfPaginators = Math.floor(beginnerToefls.length / this.itemsPerPage);
        }
        else {
            this.beginnerNumberOfPaginators = Math.floor(beginnerToefls.length / this.itemsPerPage + 1);
        }
        for (let i = 1; i <= this.beginnerNumberOfPaginators; i++) {
            this.beginnerPaginators.push(i);
        }
        // basic level toefl pagenator 산출
        if (basicToefls.length % this.itemsPerPage === 0) {
            this.basicNumberOfPaginators = Math.floor(basicToefls.length / this.itemsPerPage);
        }
        else {
            this.basicNumberOfPaginators = Math.floor(basicToefls.length / this.itemsPerPage + 1);
        }
        for (let i = 1; i <= this.basicNumberOfPaginators; i++) {
            this.basicPaginators.push(i);
        }
        // intermediate level toefl pagenator 산출
        if (interToefls.length % this.itemsPerPage === 0) {
            this.interNumberOfPaginators = Math.floor(interToefls.length / this.itemsPerPage);
        }
        else {
            this.interNumberOfPaginators = Math.floor(interToefls.length / this.itemsPerPage + 1);
        }
        for (let i = 1; i <= this.interNumberOfPaginators; i++) {
            this.interPaginators.push(i);
        }
        // advanced level toefl pagenator 산출
        if (advancedToefls.length % this.itemsPerPage === 0) {
            this.advNumberOfPaginators = Math.floor(advancedToefls.length / this.itemsPerPage);
        }
        else {
            this.advNumberOfPaginators = Math.floor(advancedToefls.length / this.itemsPerPage + 1);
        }
        for (let i = 1; i <= this.advNumberOfPaginators; i++) {
            this.advPaginators.push(i);
        }
    }
};
WelcomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-welcome',
        template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
        styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/welcome/welcome.component.scss")]
    }),
    __metadata("design:paramtypes", [_toefl_toeflExam_toeflexam_service__WEBPACK_IMPORTED_MODULE_2__["ToeflExamService"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService_Local"],
        _payment_shoppingcart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingcartService"]])
], WelcomeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, getAuthServiceConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
function getAuthServiceConfigs() {
    const config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__["FacebookLoginProvider"]('506098316522281')
        },
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_0__["GoogleLoginProvider"]('97692696799-l8i6pfujb3fnh1at7bgch6t48pdh90fo.apps.googleusercontent.com')
        }
    ]);
    return config;
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/incheolha/Desktop/examsimv2.0.0-published/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map