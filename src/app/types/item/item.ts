/**Created by kyle on 2/20/2017.*/
import {Stats} from "./stat";
import {Gold} from "./gold";
import {Image} from "./image";
export class Item{
  id: number;
  name: string;
  sanitizedDescription: string;
  plaintext: string;
  tags: string[];
  depth: number;
  stats: Stats;
  into: string[];
  from: string[];
  gold: Gold;
  image: Image;
}
