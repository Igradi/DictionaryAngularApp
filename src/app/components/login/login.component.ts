import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/guards/auth-guard.service';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean | undefined;
  constructor(private router: Router, private http: HttpClient, private service: AuthGuardService, private userService: UserService) { }
  private user = new User();
  login(form: NgForm) {
    const credentials = {
      'username': form.value.username,
      'password': form.value.password
    }
    this.http.post("https://localhost:7153/api/auth/login", credentials)
      .subscribe(response => {
        const token = (<any>response).token;
        localStorage.setItem("jwt", token);
        this.invalidLogin = false;
        this.router.navigate(["/home"]);
        let tokenCopy = localStorage.getItem('jwt');
        let decodedJWT = JSON.parse(window.atob(tokenCopy!.split('.')[1]));


        localStorage.setItem("user", decodedJWT.id);
        this.userService.getUserNick(Number(localStorage.getItem("user")));
      }, err => {
        this.invalidLogin = true;
      })
  }
  ngOnInit(): void {
  }
}