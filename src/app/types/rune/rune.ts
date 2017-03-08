import {Stats} from "./stats";
import {Image} from "./image";
import {RuneType} from "./rune.type";
/**
 * Created by kyle on 2/26/2017.
 */
export class Rune{
  id: number;
  name: string;
  tags: string[];
  stats: Stats;
  image: Image;
  rune: RuneType;
  sanitizedDescription: string;
}
