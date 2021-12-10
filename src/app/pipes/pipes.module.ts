import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';
import { DiaSemanaPipe } from './dia-semana.pipe';



@NgModule({
  declarations: [
    ImagenPipe,
    DiaSemanaPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ImagenPipe, DiaSemanaPipe]
})
export class PipesModule { }
