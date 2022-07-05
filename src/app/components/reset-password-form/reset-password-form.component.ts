import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.css']
})
export class ResetPasswordFormComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onSubmitResetPassword(userInput: { token: string, password: string, confirmPassword: string }) {
    this.http.post('https://localhost:7153/api/User/reset-password', userInput)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
