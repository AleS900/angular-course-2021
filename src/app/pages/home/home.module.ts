import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    Home1Component,
    Home2Component
  ]
})
export class HomeModule { }