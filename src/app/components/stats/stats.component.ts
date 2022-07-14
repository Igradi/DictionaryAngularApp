import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { StatsService } from 'src/app/shared/stats.service';


class ReceivedTypes {
  public nouns: number = 0;
  public adjectives: number = 0;
  public verb: number = 0;
  public adverb: number = 0;
}

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})

export class StatsComponent implements OnInit {

  constructor(private httpClient: HttpClient, private stats: StatsService) { }

  public percent: number = 0;
  public received: ReceivedTypes;
  ngOnInit(): void {
    this.stats.getStats().subscribe(
      data => {
        this.received = <any>data;
        console.log(this.received);


      }, err => { console.log(err); }

    )

    this.percent = (this.stats.getPercentage() / 300000) * 100;
    console.log(this.percent);
  }

}
