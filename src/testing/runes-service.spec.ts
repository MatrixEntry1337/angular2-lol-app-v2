/**
 * Created by kyle on 3/4/2017.
 */
import {TestBed, async, inject} from "@angular/core/testing";
import {HttpModule} from "@angular/http";
import {Properties} from "../app/properties";
import {RunesService} from "../app/modules/runes-services/services/runes.service";

describe('runes-service test', ()=>{

  let keys: string[];

  beforeEach(() =>{
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [RunesService, Properties]
    })
  });

  it('should give me back an array of rune objects',
    async(inject([RunesService], (service: RunesService) =>{
      service.getAllRunes()
        .then(runes => {
          keys = Object.keys(runes);
          expect(runes).toBeTruthy();
          expect(keys.length).toBeCloseTo(296);
        });
    }))
  );

});
