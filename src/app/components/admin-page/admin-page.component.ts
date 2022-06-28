import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { ShortUser } from "../../shared/short-user.model";
import { User } from 'src/app/shared/user.model';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  public user: ShortUser[];
  public index: number = 0;
  public idDeletingUser: number;
  ngOnInit(): void {

    this.httpClient.get("https://localhost:7153/api/User", { responseType: "json" }).subscribe(
      data => {
        this.user = <ShortUser[]>data;
        console.log(this.user);
        this.index = this.user.length;
      }

    );

  }
  saveId(id: number) {
    console.log("usa u saveiD");
    this.idDeletingUser = id;
  }
  deleteUser() {
    console.log(this.idDeletingUser);
    let params = new HttpParams().set('id', this.idDeletingUser);
    this.httpClient.delete("https://localhost:7153/api/Has/id", { params: params }).subscribe(
      dta => {
        this.ngOnInit();
      },
      err => { console.log(err); }
    );
  }

}
