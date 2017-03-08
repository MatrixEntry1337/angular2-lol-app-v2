/**
 * Created by kyle on 3/4/2017.
 */
import {NgModule} from "@angular/core";
import {Pipes} from "../pipes/pipes.module";
import {RuneStatsComponent} from "./components/rune-stats/rune-stats.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [RuneStatsComponent],
  imports: [BrowserModule,Pipes],
  exports: [RuneStatsComponent]

})
export class RunesModule{}
