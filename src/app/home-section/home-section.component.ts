import {Component, OnInit} from '@angular/core';
import {ChampionInfoService} from "../modules/champion-services/services/champion-info.service";
import {ChampionInfo} from "../types/champion-info/champion-info";

@Component({
  moduleId: module.id,
  selector: 'home',
  styleUrls: ['home-section.component.css'],
  templateUrl: './home-section.html'
})
export class HomeSectionComponent implements OnInit{

  private championInfoList: ChampionInfo[];
  private freeToPlay = 'Free To Play';

  constructor(private championInfoService: ChampionInfoService){}

  getChampionList(): void {
    this.championInfoService
      .getFreeToPlayChampions()
      .then(championInfoList =>{
        console.log(championInfoList);
        this.championInfoList = championInfoList;
      });
  }

  ngOnInit(){
    this.getChampionList();
  }
}
