import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from '../../auth.service';
import { ShoppingcartService } from '../../../payment/shoppingcart.service';
import { PaidToeflList } from './../../../payment/model/paidToeflLists.model';

import { Router } from '@angular/router';
import { User } from '../../user.model';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {


  userInfo: User;

  itemsPerPage = 3;
  numberOfPaginators: number;
  paginators: Array<any> = [];

  currentDate = new Date();
  totalAmount = 0;

  paidToeflLists: PaidToeflList[] = [];

  constructor(private authService: AuthService,
              private router: Router,
              private shoppingCartService: ShoppingcartService) { }

  ngOnInit() {
         this.userInfo = this.authService.getUserInfo();    // 로그인한 사용자 정보 가저오기

         this.paidToeflLists = this.shoppingCartService.getPaidToefltLists();
                  if ( this.paidToeflLists.length !== 0 ) {
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
            } else {
            this.numberOfPaginators = Math.floor(paidToeflists.length / this.itemsPerPage + 1);
           }

            for (let i = 1; i <= this.numberOfPaginators; i++) {
                  this.paginators.push(i);
            }
}

onReturn() {
  this.router.navigate(['/']);
}

}
