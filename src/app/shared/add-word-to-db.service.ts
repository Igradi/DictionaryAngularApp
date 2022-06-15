import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddWordToDbService {

  constructor(private httpClient: HttpClient) { }

  addWord(word: string, wordType: string) {

    let IdString = localStorage.getItem('user');
    let id = Number(IdString);

    let params = new HttpParams().append("id", id).append("wordName", word).append("wordType", wordType);
    console.log(params);
    this.httpClient.get('https://localhost:7153/api/Words/' + id + ',' + word + ',' + wordType).subscribe(err => console.log(err));

  }
}
