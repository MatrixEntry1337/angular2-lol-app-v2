
import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {Champion} from "../../../../types/champion/champion";
@Component({
  moduleId: module.id,
  selector: 'champion-tag-list',
  templateUrl: 'champion-tag-list.component.html'
})

export class ChampionTagListComponent{

  @Input()
  champions: Champion[];

  @Input()
  championTag: string;

  @Output()
  notify: EventEmitter<Champion> = new EventEmitter<Champion>();

  private showChampions = false;

  toggleChampions(): void{
    this.showChampions = true;
  }

  selectChampion(champion: Champion): void{
    this.notify.emit(champion);
  }
}
