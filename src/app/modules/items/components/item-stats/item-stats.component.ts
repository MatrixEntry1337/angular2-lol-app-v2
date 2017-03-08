/**
 * Created by kyle on 2/20/2017.
 */

import {Component, Input, OnInit, OnChanges} from "@angular/core";
import {Stats} from "../../../../types/item/stat";
import {Logger} from "angular2-logger/core";
import {Item} from "../../../../types/item/item";
@Component({
  moduleId: module.id,
  selector: 'item-stats',
  templateUrl: './item-stats.component.html'
})
export class ItemStatsComponent implements OnInit, OnChanges{

  @Input()
  item: Item;
  stats: Stats;
  keys: string[];
  imageUrl = 'http://ddragon.leagueoflegends.com/cdn/7.3.3/img/item/';

  constructor(){}

  // get stat keys
  getKeys(): void{
    this.stats = this.item.stats;
    this.keys = Object.keys(this.stats);
    console.log("Keys of Stats:");
    console.log(this.keys);
  }

  // get image
  getFullImage(): string{
    return this.imageUrl + this.item.image.full;
  }

  ngOnChanges(): void{
    this.getKeys();
    this.getFullImage();
  }

  ngOnInit(): void{
    this.getKeys();
    this.getFullImage();
  }
}
