import { Component, OnInit } from '@angular/core';
import { TopWordsService } from "../../shared/top-words.service";
import { TopWords } from "../../shared/top-words.model";
@Component({
  selector: 'app-words-ranked-list',
  templateUrl: './words-ranked-list.component.html',
  styleUrls: ['./words-ranked-list.component.css']
})
export class WordsRankedListComponent implements OnInit {

  constructor(private topWordsService: TopWordsService) { }
  public words: TopWords[];
  ngOnInit(): void {
    this.topWordsService.getTopWords().subscribe(
      data => {
        this.words = <TopWords[]>data;
        console.log(this.words);
      }

    )
  }

}
