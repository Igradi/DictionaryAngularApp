import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthGuardService } from 'src/app/guards/auth-guard.service';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private jwtHelper: JwtHelperService, private service: AuthGuardService, private userService: UserService) { }
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
      this.user.nickname = this.userService.user.nickname;
      return true;
    } else
      return false;
  }

  ngOnInit() {
    this.user.nickname = this.userService.getUserNick(Number(localStorage.getItem("user")));
  }

}
