import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreTModule } from './core/core.module';
import { Directive1Directive } from './directive1.directive';
import { Directive2Directive } from './directive2.directive';
import { AdminModule } from './pages/admin/admin.module';
import { BuyModule } from './pages/buy/buy.module';
import { HomeModule } from './pages/home/home.module';
import { SharedModule } from './shared/shared.module';
//import { Module1Module } from './module1/module1.module';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { View1sub1Component } from './view1/view1sub1/view1sub1.component';
import { View1sub2Component } from './view1/view1sub2/view1sub2.component';
import { HomeCompComponent } from './home-comp/home-comp.component';

import { AdminCompComponent } from './admin-comp/admin-comp.component';
import { Home1CompComponent } from './home-comp/home1-comp/home1-comp.component';
import { Home2CompComponent } from './home-comp/home2-comp/home2-comp.component';
import { Admin1CompComponent } from './admin-comp/admin1-comp/admin1-comp.component';
import { Admin2CompComponent } from './admin-comp/admin2-comp/admin2-comp.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'view1', pathMatch: 'full'
  },
  {
    path: 'view1', component: View1Component,
    children: [
      {
        path: '', redirectTo: 'view1sub1', pathMatch: 'full'
      },
      {
        path: 'view1sub1', component: View1sub1Component,
      },
      {
        path: 'view1sub2', component: View1sub2Component,
      }
    ]
  },
  {
    path: 'view2/:id/sub/:id2', component: View2Component
  },
  {
    path: 'view3', loadChildren: () => import('./view3/view3.module').then(m => m.View3Module)
  },
  {
    path: 'home-comp', component: HomeCompComponent,
    children: [
      {
        path: '', redirectTo: 'home1-comp', pathMatch: 'full'
      },
      {
        path: 'home1-comp', component: Home1CompComponent,
      },
      {
        path: 'home2-comp', component: Home2CompComponent,
      }
    ]
  },
  {
    path: 'admin-comp', component: AdminCompComponent,
    children: [
      {
        path: '', redirectTo: 'admin1-comp', pathMatch: 'full'
      },
      {
        path: 'admin1-comp', component: Admin1CompComponent,
      },
      {
        path: 'admin2-comp', component: Admin2CompComponent,
      }
    ]
  },
  {
    path: 'home-mod', loadChildren: () => import('./home-mod/home-mod.module').then(m => m.HomeModModule)
  },
  {
    path: 'admin-mod', loadChildren: () => import('./admin-mod/admin-mod.module').then(m => m.AdminModModule)
  }
];

@NgModule({
  declarations: [             // Aquí van los componenetes
    AppComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    Directive1Directive,
    Directive2Directive,
    View1Component,
    View2Component,
    View1sub1Component,
    View1sub2Component,
    HomeCompComponent,
    Home1CompComponent,
    Home2CompComponent,
    AdminCompComponent,
    Admin1CompComponent,
    Admin2CompComponent
  ],
  imports: [                 // Aquí van los módulos
    BrowserModule,
    FormsModule,
    HomeModule,
    AdminModule,
    BuyModule,
    CoreTModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
