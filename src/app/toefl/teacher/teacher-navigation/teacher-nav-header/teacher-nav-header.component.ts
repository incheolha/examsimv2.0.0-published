
import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../../../../Utility-shared/utility.service';
import { MainNavModel } from './../../../../Utility-shared/mainNavChange.model';
import { ProfileInfo } from '../../../../auth/profile.model';
import { AuthService } from '../../../../auth/auth.service';

@Component({
  selector: 'app-teacher-nav-header',
  templateUrl: './teacher-nav-header.component.html',
  styleUrls: ['./teacher-nav-header.component.scss']
})

export class TeacherNavHeaderComponent implements OnInit {

  mainNavModel: MainNavModel;
  profileInfo: ProfileInfo;

  @Output() sidenavToggle1 = new EventEmitter<void>();

  constructor(private router: Router,
              private authService: AuthService,
              private utilityService: UtilityService) { }

  ngOnInit() {
      this.profileInfo = this.authService.getProfileInfo1();
  }

  goBackHome() {
    console.log('메인 홈페이지로 이등하는 기능');
    this.utilityService.audioPlaySevice('', '0', false);           // audio를 초기화한다
    this.mainNavModel = new MainNavModel(false, false, true);      // 앞에것은 showNav값 이고 뒤에것은 logout이 아닌경우 즉 home button click시
    this.utilityService.mainNavChanged.next(this.mainNavModel);    // main 화면 navigation활성화
    this.router.navigate(['/']);
  }

  onToggleSideNav() {
    console.log('side button clicked');
    this.sidenavToggle1.emit();
  }
}
