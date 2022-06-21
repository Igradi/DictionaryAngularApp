import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
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
  ngOnInit(): void {

    this.httpClient.get("https://localhost:7153/api/User", { responseType: "json" }).subscribe(
      data => {
        this.user = <ShortUser[]>data;
        console.log(this.user);
        this.index = this.user.length;
      }

    );

  }
}
