import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthGuardService } from 'src/app/guards/auth-guard.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private jwtHelper: JwtHelperService, private service: AuthGuardService) { }
  public user = new User();
  isUserAuthenticated() {
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    } else {
      return false;
    }
  }

  logOut() {
    localStorage.removeItem("jwt");
  }
  getUser() {
    if (this.isUserAuthenticated()) {
      this.user.email = localStorage.getItem("user")!;



      return true;
    } else
      return false;
  }

  ngOnInit(): void {

  }

}
