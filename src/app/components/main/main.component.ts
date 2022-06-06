
import { Component, OnInit } from '@angular/core';
import { RandomWordService } from "../../shared/random-word.service";
import { Word } from "../../shared/word.model";
import { WordDefinitionService } from "../../shared/word-definition.service";
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { ConnectableObservable } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';


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
        this.word.wordString = data.word;
        this.word.definition = data.results[0].definition;
        this.word.wordType = data.results[0].partOfSpeech;
        try {
          this.word.example = data.results[0].examples[0];
        }
        catch (err) {
          this.word.example = "  Sorry, we havent found any example for this word";
        } finally {
          try {
            this.word.synonyms = data.results[0].synonyms;
          }
          catch (err) {
            this.word.synonyms[0] = " This word has no synonyms";
          }
        }
        if (this.word.synonyms == undefined) {
          this.word.synonyms = [" This word has no synonyms"];
        }
      }
    )

  }
}
