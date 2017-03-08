/**
 * Created by kyle on 3/2/2017.
 */

import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {RuneGroup} from "../types/rune/rune.group";
import {RunesService} from "../modules/runes-services/services/runes.service";
import {Rune} from "../types/rune/rune";

@Component({
  moduleId: module.id,
  selector: 'runes-section',
  templateUrl: 'runes-section.component.html',
})

export class RunesSectionComponent implements OnInit{

  private runes: RuneGroup;

  private selectedRune: Rune;

  constructor(private http: Http, private runesService: RunesService){}

  getAllRunes(): void{
    this.runesService.getAllRunes()
      .then(runes => {
        this.runes = runes;
      });
  }

  selectRune(rune: Rune): void{
    this.selectedRune = rune;
  }

  ngOnInit(){
    this.getAllRunes();
  }
}

