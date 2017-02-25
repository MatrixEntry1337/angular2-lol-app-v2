/**
 * Created by kyle on 2/20/2017.
 */

import {NgModule} from "@angular/core";
import {ItemStatsComponent} from "./components/item-stats/item-stats.component";
import {BrowserModule} from "@angular/platform-browser";
import {Pipes} from "../pipes/pipes.module";
import {ItemListsComponent} from "./components/item-lists/item-lists.component";

@NgModule({
  declarations: [ItemStatsComponent, ItemListsComponent],
  imports:[Pipes, BrowserModule],
  exports:[ItemStatsComponent, ItemListsComponent]
})

export class ItemsModule{

}
