import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { StripeModel } from '../model/stripeModel';
import { PaidToeflList } from './../model/paidToeflLists.model';
import { User } from '../../auth/user.model';
import { Shoppingcart } from '../model/shoppingcart.model';

import { GlobalConstantShare } from '../../Utility-shared/globalConstantShare';

import { UtilityService } from '../../Utility-shared/utility.service';
import { ShoppingcartService } from '../shoppingcart.service';


@Injectable()
export class StripePaymentService {

  urlConfig = GlobalConstantShare.httpUrl;

  shoppingCartLists = new Subject<Shoppingcart[]>();
  paidToeflLists = new Subject<PaidToeflList[]>();
    constructor(private http: HttpClient,
                private router: Router,
                private shoppingCartService: ShoppingcartService,
                private utilityService: UtilityService) {}

  gotoStripeCharge(stripeCardInfo: StripeModel) {

      return this.http.post<{ message: string, paidToeflLists: PaidToeflList[], shoppingCartLists: Shoppingcart[], stripeUserInfo: User}>
                      (this.urlConfig + '/stripepayment', stripeCardInfo)
                      .subscribe( data => {

                                  this.utilityService.successToast('결제가 성공적으로 완료되었습니다. 감사합니다', '결제 공지사항');
                                  const reInitSuccess = this.shoppingCartService.reInitialShoppingCartLists(data.paidToeflLists, data.stripeUserInfo);
                if (reInitSuccess) {
                  this.router.navigate(['/']);
                }

            },
            (error) => console.error(error)
          );

    }
}
