import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { LoaderComponent } from './loader/loader.component';
import { ExponentPipe } from './exponent.pipe';
import { ExponentPipe2 } from './exponent2.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent,
    LoaderComponent,
    ExponentPipe,
    ExponentPipe2
  ],
  exports: [
    CardComponent,
    LoaderComponent,
    ExponentPipe,
    ExponentPipe2
  ]
})
export class SharedModule { }