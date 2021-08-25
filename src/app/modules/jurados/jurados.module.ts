import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { Jurados1Component } from './jurados1/jurados1.component';
import { Jurados2Component } from './jurados2/jurados2.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    Jurados1Component,
    Jurados2Component
  ],
  exports: [
    Jurados1Component,
    Jurados2Component
  ]
})
export class JuradosModule { }