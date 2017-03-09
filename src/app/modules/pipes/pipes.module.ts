/**
 * Created by kyle on 2/16/2017.
 */

import {NgModule} from "@angular/core";
import {ObjectValuesPipe} from "./object-iteration/object-values.pipe";
import {TagPipe} from "./array-iteration/tag.pipe";

@NgModule({
  declarations: [ObjectValuesPipe, TagPipe],
  exports: [ObjectValuesPipe, TagPipe]
})

export class Pipes{}

