import { NgModule } from '@angular/core';
import { ImagenPipe } from './imagen.pipe';
import { GroupPipe } from './groups.pipe';


@NgModule({
  declarations: [
    ImagenPipe,
    GroupPipe
  ],
  imports: [],
  exports: [
    ImagenPipe,
    GroupPipe
  ]
})
export class PipesModule { }
