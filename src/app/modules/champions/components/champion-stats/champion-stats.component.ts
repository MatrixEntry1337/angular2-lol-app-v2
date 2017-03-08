import {Component, Input, OnInit} from "@angular/core";
import {Stats} from "../../../../types/champion/stats";
/**
 * Created by kyle on 2/18/2017.
 */

@Component({
  moduleId: module.id,
  selector: 'champion-stats',
  templateUrl: './champion-stats.component.html'
})
export class ChampionStatsComponent implements OnInit {
  @Input()
  stats: Stats;
  keys: string[];

  constructor(){}

  getKeys(): void{
    this.keys = Object.keys(this.stats);
    console.log("Keys of Stats:");
    console.log(this.keys);
  }

  ngOnInit(): void{
    this.getKeys();
  }

}
