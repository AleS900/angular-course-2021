import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Buy1Module } from './buy1/buy1.module';
import { Buy2Module } from './buy2/buy2.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    Buy1Module,
    Buy2Module
  ]
})
export class BuyModule { }