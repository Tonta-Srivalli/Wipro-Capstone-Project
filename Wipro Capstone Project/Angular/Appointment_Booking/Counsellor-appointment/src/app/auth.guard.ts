import { Injectable } from '@angular/core';

import { UserService } from './user.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private service: UserService, private router: Router) { }
  canActivate(): boolean {
    if (this.service.getUserLoggedStatus()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
