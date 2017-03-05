/**
 * Created by kyle on 3/2/2017.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

// promise
import 'rxjs/add/operator/toPromise';
import {Rune} from "../../../types/rune/rune";
import {Properties} from "../../../properties";
import {RuneGroup} from "../../../types/rune/rune.group";

@Injectable()
export class RunesService{

  private runesUrl = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/rune';

  constructor(private http: Http, private properties: Properties){}

  getAllRunes(): Promise<RuneGroup>{
    return this.http.get(this.runesUrl + "?runeListData=tags&api_key=" + this.properties.getAPIKey())
      .toPromise()
      .then(response => {
        console.log("Obtained Runes:" + response.toString());
        return response.json().data as RuneGroup;
      });
  }

}
