import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private httpClient: HttpClient) { }
  getStats() {

    var params = new HttpParams().set("id", Number(localStorage.getItem("user")));
    return this.httpClient.get("https://localhost:7153/api/Words/getTypes", { params: params, responseType: "json" });

  }
  public numOfWords: number
  getPercentage() {

    this.httpClient.get("https://localhost:7153/api/Words/" + localStorage.getItem("user"), { responseType: "json" }).subscribe(data => { this.numOfWords = Number(data); });

    return this.numOfWords;
  }
}
