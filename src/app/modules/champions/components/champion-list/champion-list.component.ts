/**
 * Created by kyle on 2/25/2017.
 */
import {Component, OnInit, OnChanges, Input, Output, EventEmitter} from "@angular/core";
import {Champion} from "../../../../types/champion/champion";
import {ChampionService} from "../../../champion-services/services/champion.service";
import {ChampionInfo} from "../../../../types/champion-info/champion-info";

@Component({
  moduleId: module.id,
  selector: 'champion-list',
  templateUrl: 'champion-list.component.html'
})
export class ChampionListComponent implements OnInit, OnChanges{
  @Input()
  championInfoList: ChampionInfo[];

  @Input()
  listName: string;

  @Output()
  notify: EventEmitter<Champion> = new EventEmitter<Champion>();

  champions: Champion[];

  private splashUrl = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"

  constructor(private championService: ChampionService){}

  getChampions(): void {
    this.champions = [];
    for(let i = 0; i < this.championInfoList.length; i ++){
      this.championService
        .getChampionById(this.championInfoList[i].id)
        .then(champion => {
          this.champions.push(champion);
        });
    }
  }

  getChampionImage(champion: Champion): string {
    return this.splashUrl + champion.key+ "_0.jpg";
  }

  selectChampion(): void {

  }

  ngOnChanges(){
  }

  ngOnInit(){
    this.getChampions();
  }
}
