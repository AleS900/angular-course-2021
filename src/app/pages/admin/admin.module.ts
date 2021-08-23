import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Admin1Module } from './admin1/admin1.module';
import { Admin2Module } from './admin2/admin2.module';
import { SharedModule } from '../../shared/shared.module';
import { Admin1Component } from './admin1/admin1.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    Admin1Module,
    Admin2Module
  ],
  exports: [
    Admin1Component
  ]
})
export class AdminModule { }