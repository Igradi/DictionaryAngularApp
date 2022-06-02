import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomWordService {

  constructor(private httpClient: HttpClient) { }
  getWord(): Observable<any> {

    let headers = new HttpHeaders({
      'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
      'x-rapidapi-key': 'e122d46126mshe6792ce4559808cp174d94jsn71ebf07ea543'
    });
    let params = new HttpParams().set('hasDetails', 'definitions').set('random', 'true').set('hasDetails', 'synonyms').set('hasDetails', 'examples');

    console.log("u random");
    return this.httpClient.get("https://wordsapiv1.p.rapidapi.com/words/", { headers: headers, params: params });
  }
}
