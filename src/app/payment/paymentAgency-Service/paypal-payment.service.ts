import { GlobalConstantShare } from '../../Utility-shared/globalConstantShare';
import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ShoppingcartService } from './../shoppingcart.service';
import { Payment } from './../model/payment.model';
import { PaidToeflList } from '../model/paidToeflLists.model';
import { User } from '../../auth/user.model';

@Injectable()
export class PaypalPaymentService {

    payment: Payment;
    urlConfig = GlobalConstantShare.httpUrl;     // url 실제 주소가 있는곳
    constructor(private http: HttpClient,
                private shoppingCartService: ShoppingcartService) {}


    checkoutPaypal(payment: Payment) {

      console.log('paypal click');

      return this.http.post<{ url: string }>(this.urlConfig + '/paypal/createPayment', payment)
                      .subscribe(data => {
                          window.location.href = data.url;
                      }),
                      (error) => console.log(error);
    }

    getPaypalResult() {
        const token = localStorage.getItem('token');

        return this.http.get<{ payPalResult: PaidToeflList[], paypalUserInfo: User}>
                        (this.urlConfig + '/paypal/paymentResult/' + '?token=' + token)

                        .subscribe( data => {
                            // tslint:disable-next-line:max-line-length
                            const reInitSuccess = this.shoppingCartService.reInitialShoppingCartLists(data.payPalResult, data.paypalUserInfo);
                        },
                        error => console.log(error)
                    );
    }

}
