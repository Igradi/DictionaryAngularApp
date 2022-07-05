import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/shared/user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private httpclient: HttpClient, private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(email: string) {
    this.service.forgotPass(email).subscribe(
      data => {
        console.log(data);
      }, err => { console.log(err); }
    )
    this.router.navigateByUrl('/forgot-password-form');
  }
}
