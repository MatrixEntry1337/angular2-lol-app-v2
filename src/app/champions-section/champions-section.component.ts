/**
 * Created by kyle on 2/16/2017.
 */
import {Component, OnInit} from "@angular/core";
import {ChampionGroup} from "../types/champion/champion.group";
import {Champion} from "../types/champion/champion";
import {ChampionService} from "../modules/champion-services/services/champion.service";


@Component({
  moduleId: module.id,
  selector: 'champions-section',
  templateUrl: './champions-section.component.html',
  styleUrls: ['champions-sections.component.css']
})
export class ChampionsSectionComponent implements OnInit{
  private champions: Champion[];
  private selectedChampion: Champion;

  private championTagList: string[] = ['Fighter', 'Assassin', 'Mage', 'Tank', 'Support', 'Marksman'];
  private currentChampionTag = 0;

  constructor(private championService: ChampionService){}

  //
  getChampions(): void {
    this.championService.getAllChampions()
      .then(champions => {
        // console.log("Objects in ChampionsComponent: ");
        // console.log(champions);
        this.prep(champions);
      });
  }

  //
  private prep(champions: ChampionGroup): void{
    // push champions into array
    let keys = Object.keys(champions);
    this.champions = [];
    for(let key of keys){
      this.champions.push(champions[key]);
    }

    // sort champions - name
    this.champions.sort(function(a, b){
      return (a.name > b.name) ? 1: -1;
    });

    // select random champion
    let randChamp = Math.trunc(Math.random() % 100 * 100);
    this.getChampion(this.champions[randChamp]);
  }

  //
  getChampion(champion: Champion): void{
    this.championService.getChampion(champion)
      .then(champion => {
        console.log("Obtained Champion data");
        console.log(champion);
        return this.selectedChampion = champion;
      });
  }

  //
  selectTag(tagNumber: number): void{
    this.currentChampionTag = tagNumber;
  }

  ngOnInit(): void {
    this.getChampions();
  }
}
