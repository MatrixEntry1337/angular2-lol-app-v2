/**
 * Created by kyle on 3/9/2017.
 */

import {Pipe, PipeTransform} from "@angular/core";
import {Champion} from "../../../types/champion/champion";

@Pipe({name: 'tags'})
export class TagPipe implements PipeTransform{

  transform(value: any[], args?: any): any[]{
    //debug
    console.log("Values passed to Tag Pipe:");
    console.log(value);
    console.log(args.toString());

    let dataArray: any[] = [];

    if(args)
      value.forEach(object => {
        let found = object.tags.find((tag:any)=>{
          return tag === args;
        });

        if(found) dataArray.push(object);
      });

    return dataArray;
  }
}
