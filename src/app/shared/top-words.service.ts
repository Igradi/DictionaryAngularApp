import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TopWordsService {

  constructor(private httpClient: HttpClient) { }

  getTopWords() {
    return this.httpClient.get("https://localhost:7153/api/Has/topWords", { responseType: "json" });
  }

}
