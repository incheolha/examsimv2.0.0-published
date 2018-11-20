
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { UtilityService } from './../Utility-shared/utility.service';
import { MainNavModel } from './../Utility-shared/mainNavChange.model';
import { User } from './user.model';

import { Shoppingcart } from '../payment/model/shoppingcart.model';
import { PaidToeflList } from '../payment/model/paidToeflLists.model';
import { ProfileInfo } from './profile.model';


@Injectable()
export class AuthService {

  authChange = new Subject<boolean>();
  teacherAuth = new Subject<boolean>();

  mainNavModel: MainNavModel;

  profileInfo: ProfileInfo;

  clearPaidToeflLists: PaidToeflList[] = [];
  clearShoppingCartLists: Shoppingcart[] = [];
  clearProfileInfoPassed: ProfileInfo = null;

  isAuthenticated = false;
  isteacherAuthenticated = false;

  public shoppingCartLists = new Subject<Shoppingcart[]>();
  public paidToeflLists = new Subject<PaidToeflList[]>();
  public profileInfoPassed = new Subject<ProfileInfo>();

  constructor(private http: HttpClient,
              private router: Router,
              private utilityService: UtilityService) {}


  signup(user: User) {

        this.utilityService.loadingStateChanged.next(true);
        this.http.post
                      <{ message: string,
                          token: string,
                          userId: string,
                          userName: string,
                          userEmail: string,
                          permissionTag: string,
                          shoppingCartLists: Shoppingcart[],
                          paidToeflLists: PaidToeflList[]
                        }>
                        ('https://examsimv100.herokuapp.com/user/signup', user)

                        .subscribe((result) => {

                                localStorage.setItem('token', result.token);
                                localStorage.setItem('userId', result.userId);
                                localStorage.setItem('userName', result.userName);
                                localStorage.setItem('userEmail', result.userEmail);

                                this.authSuccess(result.permissionTag);
                                this.utilityService.loadingStateChanged.next(false);
                                this.shoppingCartLists.next(result.shoppingCartLists);
                                this.paidToeflLists.next(result.paidToeflLists);
                                this.router.navigate(['/']);
                    });
  }

  login(user: User) {

        this.utilityService.loadingStateChanged.next(true);
        this.http.post
                      <{ message: string,
                          token: string,
                          userId: string,
                          userName: string,
                          userEmail: string,
                          permissionTag: string,
                          shoppingCartLists: Shoppingcart[],
                          paidToeflLists: PaidToeflList[]
                        }>
                        (' https://examsimv100.herokuapp.com/user/login', user)

                        .subscribe((result) => {
                                localStorage.setItem('token', result.token);
                                localStorage.setItem('userId', result.userId);
                                localStorage.setItem('userName', result.userName);
                                localStorage.setItem('userEmail', result.userEmail);

                                this.authSuccess(result.permissionTag);
                                this.utilityService.loadingStateChanged.next(false);
                                this.shoppingCartLists.next(result.shoppingCartLists);
                                this.paidToeflLists.next(result.paidToeflLists);
                                this.router.navigate(['/']);
                    });
              }

  private authSuccess(teacherAuth: string) {
    this.authChange.next(true);
    console.log(this.authChange);

        if (localStorage.getItem('token') !== null) {
            this.isAuthenticated = true;
        }
        if (teacherAuth === 'teacher') {
          this.teacherAuth.next(true);
          this.isteacherAuthenticated = true;
        } else {
          this.teacherAuth.next(false);
          this.isteacherAuthenticated = false;
        }
        this.router.navigate(['/']);
  }

  logout() {
              localStorage.clear();
              this.authChange.next(false);                             // 사용자 인증 logout
              this.teacherAuth.next(false);                            // teacher permission 초기화
              this.isAuthenticated = false;                             // 인증 취소
              this.isteacherAuthenticated = false;                      // 관리자 선생님 인증 취소

              this.paidToeflLists.next(this.clearPaidToeflLists);            // paid ToeflList 초기화
              this.shoppingCartLists.next(this.clearShoppingCartLists);      // shopping cart list 초기화

              this.mainNavModel = new MainNavModel(false, true);             // 인증 clear

              this.utilityService.mainNavChanged.next(this.mainNavModel);    // main 화면 navigation활성화
              this.router.navigate(['/']);                                   // main 홈페이지 화면으로 돌아감
  }

  isAuth() {
              console.log(this.isAuthenticated);
              return this.isAuthenticated;
  }


  isTecherAuth() {                                                 // welcome component에서 teacher인증여부를 각 tabl에 injection하여
              return this.isteacherAuthenticated;                            // 선생님 관리자 모드인 경우 장바구니버튼과 purchase버튼을 보여주지 않을목적으로 설정됨
  }

  getProfileInfo() {
              console.log('get Info Profile check');
              this.profileInfo = new ProfileInfo(localStorage.getItem('userEmail'), localStorage.getItem('userName'));
              this.profileInfoPassed.next(this.profileInfo);
              return this.profileInfo;
  }

}
