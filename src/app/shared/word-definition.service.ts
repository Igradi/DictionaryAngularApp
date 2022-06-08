import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";
import { catchError, Observable, observable } from 'rxjs';
import { RandomWordService } from './random-word.service';

@Injectable({
  providedIn: 'root'
})
export class WordDefinitionService {

  constructor(private httpClient: HttpClient, private _randomWord: RandomWordService) {

  }
  searchWord(word: string): Observable<any> {

    let headers = new HttpHeaders({
      'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
      'x-rapidapi-key': 'e122d46126mshe6792ce4559808cp174d94jsn71ebf07ea543'
    });
    let params = new HttpParams().set('hasDetails', 'definitions').set('random', 'true');
    return this.httpClient.get('https://wordsapiv1.p.rapidapi.com/words/' + word, { headers: headers, params: params });
  }
}


