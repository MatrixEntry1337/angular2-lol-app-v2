/**
 * Created by kyle on 2/26/2017.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {ChampionInfo} from "../../../types/champion-info/champion-info";
import {Properties} from "../../../properties";


@Injectable()
export class ChampionInfoService {

  private championInfoUrl = 'https://na.api.pvp.net/api/lol/na/v1.2/champion';

  constructor(private http: Http, private properties: Properties){}

  getFreeToPlayChampions(): Promise<ChampionInfo[]>{
    return this.http.get(this.championInfoUrl + '?freeToPlay=true&api_key=' + this.properties.getAPIKey())
      .toPromise().then(response => {
        console.log('ChampionsModule Info:');
        console.log(response.json());
        return response.json().champions;
    });
  }
}
