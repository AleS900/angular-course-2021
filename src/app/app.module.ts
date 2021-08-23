import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { WalletsComponent } from './wallets/wallets.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { DatePipe } from './transactions/date.pipe';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TransactionsComponent, WalletsComponent,DatePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
