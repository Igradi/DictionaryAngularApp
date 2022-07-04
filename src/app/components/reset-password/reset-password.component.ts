import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private httpclient: HttpClient, private service: UserService) { }

  ngOnInit(): void {
  }
  submitEmail(email: string) {
    this.service.forgotPass(email).subscribe(
      data => {
        console.log(data);
      }, err => { console.log(err); }
    )

  }
}
