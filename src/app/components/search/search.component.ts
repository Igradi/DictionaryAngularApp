import { Component, OnInit } from '@angular/core';
import { AddWordToDbService } from 'src/app/shared/add-word-to-db.service';
import { WordDefinitionService } from 'src/app/shared/word-definition.service';
import { Word } from 'src/app/shared/word.model';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public service: WordDefinitionService, private wordService: AddWordToDbService) { }
  public word: Word = new Word();
  ngOnInit(): void {

  }
  public wordFound = false;
  showWord(word: string): void {
    console.log(word);
    this.wordFound = false
    this.service.searchWord(word).subscribe(
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
        this.wordService.addWord(this.word.wordString, this.word.wordType);
        this.wordFound = true;

      },
      error => {
        this.word.wordString = " This Word hasnt been found";
        this.wordFound = false
      },

    )
  }
}