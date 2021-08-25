import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WalletsComponent } from './wallets/wallets.component';
import { DatePipe } from './transactions/date.pipe';
import { TransactionsComponent } from './transactions/transactions.component';
import { JuradosModule } from './modules/jurados/jurados.module';
import { VotacionModule } from './modules/votacion/votacion.module';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    JuradosModule,
    VotacionModule
  ],
  declarations: [ 
    AppComponent, 
    WalletsComponent, 
    DatePipe, 
    TransactionsComponent, 
  ],
  bootstrap:    [ 
    AppComponent 
  ]
})
export class AppModule { }
