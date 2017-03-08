/**
 * Created by kyle on 3/8/2017.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class LoggerService{

  constructor(){}

  log(message: string): void{
    console.log(message);
  }

  debug(message: string): void{
    console.debug(message);
  }

  warning(message: string): void{
    console.warn(message);
  }

  error(message: string): void{
    console.error(message);
  }

}

