import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { VotacionModule } from './modules/votacion/votacion.module';
import { JuradoModule } from './modules/jurado/jurado.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, VotacionModule,JuradoModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
