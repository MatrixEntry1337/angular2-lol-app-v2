/**
 * Created by kyle on 2/14/2017.
 */
import { Spell } from './spell'
import {Skin} from "./skin";
import {Stats} from "./stats";
import {Info} from "./info";

export class Champion{
  id: number;
  key: string;
  title: string;
  name: string;
  lore: string;
  tags: string[];
  enemytips: string[];
  allytips: string[];
  info: Info[];
  spells: Spell[];
  skins: Skin[];
  stats: Stats;
}
