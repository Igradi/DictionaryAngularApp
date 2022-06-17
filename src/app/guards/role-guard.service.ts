import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { HeaderComponent } from '../components/header/header.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(public auth: AuthGuardService, public router: Router, private jwtHelper: JwtHelperService, private compa: HeaderComponent) { }


  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = localStorage.getItem('jwt') || "";
    const tokenPayload = decode(token);
    if (this.compa.isUserAuthenticated() && (<any>tokenPayload).role == 'admin') {
      return true;
    }
    this.router.navigate(["/alert"]);
    return false;
  }

}