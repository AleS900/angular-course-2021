import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { LoaderComponent } from './loader/loader.component';
import { ExponentPipe } from './exponent.pipe';
import { ExponentPipe2 } from './exponent2.pipe';
import { PurePipe } from './pipes/pure.pipe';
import { ImpurePipe } from './pipes/impure.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent,
    LoaderComponent,
    ExponentPipe,
    ExponentPipe2,
    PurePipe,
    ImpurePipe
  ],
  exports: [
    CardComponent,
    LoaderComponent,
    ExponentPipe,
    ExponentPipe2,
    PurePipe,
    ImpurePipe
  ]
})
export class SharedModule { }