import { AuthService } from './auth/auth.service';
import { Component, OnInit, ChangeDetectorRef, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UtilityService } from './Utility-shared/utility.service';
import { MainNavModel } from './Utility-shared/mainNavChange.model';
import { Subscription } from 'rxjs/Subscription';
import { ProfileInfo } from './auth/profile.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked, OnDestroy {

  title = 'app';
  profileInfo: ProfileInfo;
  mainNavHide = false;
  isAuth = false;
  isteacherAuth = false;
  val = 0;

  utilitySubscription: Subscription;

  constructor(private utilityService: UtilityService,
              private authService: AuthService,
              private router: Router,
              private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
   this.utilitySubscription = this.utilityService.mainNavChanged.subscribe((navStatus: MainNavModel) => {
      this.mainNavHide = navStatus.showMainNav;
      console.log('main nav 상태점검', this.mainNavHide);

      if (navStatus.checkLogoutOrNot) {               // logout상태가 호출되었으므로 모든것이 초기화됨

                                        this.isAuth = false;
                                        this.isteacherAuth = false;
      } else if (!navStatus.isTeacherLogin) {              // 일반 사용자 로그인
                                         this.isAuth = true;
                                         this.isteacherAuth = false;
                                         this.profileInfo = this.authService.getProfileInfo1();

      } else {                                        // login상태에서 홈버튼이 click한경우  teacher모드로 기존 토큰이 존재함
        this.isAuth = true;
        this.isteacherAuth = true;
        this.profileInfo = this.authService.getProfileInfo1();
      }

    });

      this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
    };


  this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
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
}
