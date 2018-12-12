import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilityService } from './../../Utility-shared/utility.service';
import { MainNavModel } from './../../Utility-shared/mainNavChange.model';
import { ActivatedRoute } from '@angular/router';
import { ProfileInfo } from '../../auth/profile.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-register-toefl',
  templateUrl: './register-toefl.component.html',
  styleUrls: ['./register-toefl.component.scss']
})
export class RegisterToeflComponent implements OnInit {

  mainNavModel: MainNavModel;
  teacherName = '';
  constructor(private utilityService: UtilityService,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.mainNavModel = new MainNavModel(true, false);                // 이모드는 teacher 권한을 갖는 사람이 젒속하여 시험을 출제하는 모드임
    this.utilityService.mainNavChanged.next(this.mainNavModel);

  }

}
