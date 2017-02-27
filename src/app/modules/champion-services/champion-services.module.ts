/**
 * Created by kyle on 2/16/2017.
 */

// modules
import { NgModule } from '@angular/core';

// services
import { ChampionService } from './services/champion.service'
import {ChampionInfoService} from "./services/champion-info.service";

@NgModule({
  providers:[ChampionService, ChampionInfoService],
})

export class ChampionServiceModule{}
