import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  formData:User = new User();
  readonly baseUrl = 'https://localhost:7153/api/User/POST'
  postUser(){
   return this.http.post(this.baseUrl,this.formData);
  }
}
