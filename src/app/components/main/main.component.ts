import { Component, OnInit } from '@angular/core';
import { RandomWordService } from "../../shared/random-word.service";
import { Word } from "../../shared/word.model";
import { WordDefinitionService } from "../../shared/word-definition.service";
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {



  constructor(private _randomWord: RandomWordService, private _wordDefinition: WordDefinitionService) {

  }
  public word: Word = new Word();

  ngOnInit(): void {
    this._randomWord.getWord().subscribe(
      data => {
        console.log(data);
        this.word.wordString = data.word;
        this.word.definition = data.results[0].definition;
        this.word.synonyms = data.results[0].synonyms;
        this.word.wordType = data.results[0].partOfSpeech;
        for (let i = 0; i < data.results.length; i++) {
          if (data.results[i].example == undefined) {
            continue;
          } else {
            this.word.example = data.results[i].example;
            break;
          }
        }
        console.log(this.word.synonyms);
        console.log(this.word.wordString);
        this._wordDefinition.getWordExample(this.word.wordString).subscribe(
          dta => {

          }
        )
      }
    )
  }
}


