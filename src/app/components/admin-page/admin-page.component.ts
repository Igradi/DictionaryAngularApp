import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { ShortUser } from "../../shared/short-user.model";
import { User } from 'src/app/shared/user.model';
import { AdminStats } from 'src/app/shared/admin-stats.model';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  public view: number[];
  constructor(private httpClient: HttpClient) {
    this.view = [innerWidth / 1.15, 300];
  }
  public wordStats: AdminStats[];
  public users: ShortUser[];
  public index: number = 0;
  public idDeletingUser: number;
  onResize(width: any) {
    this.view = [width / 1.15, 300];

  }

  ngOnInit(): void {

    this.httpClient.get("https://localhost:7153/api/User", { responseType: "json" }).subscribe(
      data => {
        this.users = <ShortUser[]>data;

      }

    );
    this.getStats();
  }
  saveId(id: number) {
    this.idDeletingUser = id;
  }
  deleteUser() {

    let params = new HttpParams().set('id', this.idDeletingUser);
    this.httpClient.delete("https://localhost:7153/api/Has/id", { params: params }).subscribe(
      dta => {
        this.ngOnInit();
      },
      err => { console.log(err); }
    );
  }
  getStats() {

    this.httpClient.get("https://localhost:7153/api/Words/NumberOfwordsOfUsers").subscribe(
      dta => {
        this.wordStats = <AdminStats[]>dta;
        console.log(this.wordStats);
      }
    )

  }
}
