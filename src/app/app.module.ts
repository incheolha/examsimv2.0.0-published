// anglar 순수 modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

// MDBBootstrap모들
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

// 제 3자에서 제공하는 모듈
import { MatDialogModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
import { NgxStripeModule } from 'ngx-stripe';

// http Module
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// component 모듈
import { AppComponent } from './app.component';

// routing 모둘
import { AppRoutingModule, appRoutingComponent } from './app-routing.module';

// 사용자 정의 모듈
import { ToeflExamModule } from './toefl/toeflExam/toeflexam.module';
import { AuthModule } from './auth/auth.module';

// 유틸리티 모듈
import { SharedModule } from './shared/shared.module';

// error관련 모둘
import { ErrorComponent } from './error/error.component';
import { ErrorInterceptor } from './error-interceptor';

// 각종 서비스 모듈
import { AuthService } from './auth/auth.service';
import { UtilityService } from './Utility-shared/utility.service';
import { ShoppingcartService } from './payment/shoppingcart.service';
import { PaypalPaymentService } from './payment/paymentAgency-Service/paypal-payment.service';
import { StripePaymentService } from './payment/paymentAgency-Service/stripe-payment.service';

@NgModule({
  declarations: [
    AppComponent,
    
    ErrorComponent,
    appRoutingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    AuthModule,
    ToeflExamModule,
    AppRoutingModule,
    SharedModule,
    NgxStripeModule.forRoot('pk_test_erzDoCmLOPEP1n4tLjvtT7Y2'),
    ToastrModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    MatDialogModule
   ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
              MDBSpinningPreloader,
              AuthService,
              UtilityService,
              ShoppingcartService,
              PaypalPaymentService,
              StripePaymentService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule { }
