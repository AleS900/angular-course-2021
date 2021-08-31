import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminCompModComponent } from './admin-comp-mod/admin-comp-mod.component';
import { Admin1ModComponent } from './admin-comp-mod/admin1-mod/admin1-mod.component';
import { Admin2ModComponent } from './admin-comp-mod/admin2-mod/admin2-mod.component';
import { SubadminModComponent } from './subadmin-mod/subadmin-mod.component';

const routes: Routes = [
  {path: '', redirectTo: 'admin-comp-mod', pathMatch: 'full'},
  {path: 'admin-comp-mod', component: AdminCompModComponent,
  children: [
    {
      path: 'admin1-mod', component: Admin1ModComponent
    },
    {
      path: 'admin2-mod', component: Admin2ModComponent
    }
  ]
  },
  {
    path:'subadmin-mod', component: SubadminModComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    Admin1ModComponent,
    Admin2ModComponent,
    SubadminModComponent,
    AdminCompModComponent
  ]
})
export class AdminModModule { }

