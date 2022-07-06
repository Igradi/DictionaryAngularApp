import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.css']
})
export class ResetPasswordFormComponent implements OnInit {

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmitResetPassword(userInput: { token: string, password: string, confirmPassword: string }) {
    this.http.post('https://localhost:7153/api/User/reset-password', userInput)
      .subscribe(res => {
        this.toastr.success('Congratulations, you have reset your password!', 'Updating password');
        this.router.navigate(['/login']);
      }, err => { this.toastr.warning('Something went wrong', 'ERROR'); });

  }
}
