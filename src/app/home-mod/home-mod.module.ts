import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeCompModComponent } from './home-comp-mod/home-comp-mod.component';
import { Home1ModComponent } from './home-comp-mod/home1-mod/home1-mod.component';
import { Home2ModComponent } from './home-comp-mod/home2-mod/home2-mod.component';
import { SubhomeModComponent } from './subhome-mod/subhome-mod.component';

const routes: Routes = [
  {path: '', redirectTo: 'home-comp-mod', pathMatch: 'full'},
  {path: 'home-comp-mod', component: HomeCompModComponent,
  children: [
    {
      path: 'home1-mod', component: Home1ModComponent
    },
    {
      path: 'home2-mod', component: Home2ModComponent
    }
  ]
  },
  {
    path:'subhome-mod', component: SubhomeModComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SubhomeModComponent,
    Home1ModComponent,
    Home2ModComponent,
    HomeCompModComponent
  ]
})
export class HomeModModule { }

