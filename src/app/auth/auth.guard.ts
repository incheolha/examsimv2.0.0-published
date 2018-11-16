
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) {}

   canActivate(route: ActivatedRouteSnapshot,
               state: RouterStateSnapshot
               ): boolean | Observable<boolean> | Promise<boolean> {
     if (this.authService.isAuth()) {
       return true;
     } else {
       this.router.navigate(['/auth/login']);
     }
  }
}

