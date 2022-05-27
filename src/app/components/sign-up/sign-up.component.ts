import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';

import { User } from "../../shared/user.model";
import { UserService } from "../../shared/user.service";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public service: UserService,private toastr:ToastrService) {
    
   }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.service.postUser().subscribe(
      res =>{
        this.resetForm(form);
        this.toastr.success('Congratulations, you have created your account!','Registering');
      },
      err =>{
        
        this.toastr.warning('Something went wrong','ERROR');}
      
    )
  };
  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new User();
  }
}
