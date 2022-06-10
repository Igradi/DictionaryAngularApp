import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  onSubmitEdit(form: NgForm) {
    this.service.postUserProfile().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Congratulations, you have edited your profile!', 'Success');
      },
      err => {

        this.toastr.warning('Something went wrong', 'ERROR');
        this.resetForm(form);
      }
    )
  };
  resetForm(form: NgForm) {
    form.form.reset();
  }
}
