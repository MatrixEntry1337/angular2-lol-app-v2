/**
 * Created by kyle on 3/7/2017.
 */

import {Component, OnInit, Input, OnChanges} from "@angular/core";
import {Stats} from "../../../../types/rune/stats";
@Component({
  moduleId: module.id,
  selector: 'rune-stats',
  templateUrl: 'rune-stats.component.html'
})

export class RuneStatsComponent implements OnInit, OnChanges{

  @Input()
  private stats: Stats;

  private keys: string[];

  constructor(){}

  getKeys(): void{
    this.keys = Object.keys(this.stats);
    console.log("Keys of Stats:");
    console.log(this.keys);
  }

  ngOnInit(){
    this.getKeys();
  }

  ngOnChanges(){
    this.getKeys();
  }

}
