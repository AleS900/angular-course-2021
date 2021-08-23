import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home1Module } from './home1/home1.module';
import { Home2Module } from './home2/home2.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    Home1Module,
    Home2Module
  ]
})
export class HomeModule { }