import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { VotacionModule } from './modules/votacion/votacion.module';
import { JuradosModule } from './modules/jurados/jurados.module';
import { WalletsComponent } from './wallets/wallets.component';
import { DatePipe } from './transactions/date.pipe';
import { TransactionsComponent } from './transactions/transactions.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, VotacionModule,JuradosModule ],
  declarations: [ AppComponent, WalletsComponent, DatePipe, TransactionsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
