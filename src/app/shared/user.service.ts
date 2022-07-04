import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient, HttpParams } from "@angular/common/http";
import { EditUser } from './edit-user.model';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }
  user = new User();
  formData: User = new User();
  editFormData: EditUser = new EditUser();
  readonly baseUrl = 'https://localhost:7153/api/User/POST'
  readonly editUrl = 'https://localhost:7153/api/User'
  readonly forgotPassword = 'https://localhost:7153/api/User/forgot-password'
  postUser() {
    return this.http.post(this.baseUrl, this.formData);
  }
  putUserProfile() {
    return this.http.put(`${this.editUrl}?id=${localStorage.getItem("user")}`, this.editFormData);
  }
  getUserNick(id: number) {

    this.http.get('https://localhost:7153/api/User/' + id, { responseType: 'text' }).subscribe(
      data => {
        this.user.nickname = data;
      }

    )
    return this.user.nickname;
  }
  forgotPass(mail: string) {
    var params = new HttpParams().set("email", mail);
    return this.http.post(this.forgotPassword, { params: params });
  }
}

