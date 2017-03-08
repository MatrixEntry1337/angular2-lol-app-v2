/**
 * Created by kyle on 3/7/2017.
 */

import {Component, OnInit, Input, OnChanges} from "@angular/core";
import {Stats} from "../../../../types/rune/stats";
import {Rune} from "../../../../types/rune/rune";
@Component({
  moduleId: module.id,
  selector: 'rune-stats',
  templateUrl: 'rune-stats.component.html'
})

export class RuneStatsComponent implements OnInit, OnChanges{

  @Input()
  private rune: Rune;

  private statsKeys: string[];
  private imageUrl = 'http://ddragon.leagueoflegends.com/cdn/7.5.1/img/rune/';

  constructor(){}

  getStatsKeys(): void{
    this.statsKeys = Object.keys(this.rune.stats);
    console.log("Keys of Stats:");
    console.log(this.statsKeys);
  }

  getRuneImage(): string{
    return this.imageUrl + this.rune.image.full;
  }

  ngOnInit(){
    this.getStatsKeys();
  }

  ngOnChanges(){
    this.getStatsKeys();
  }

}
