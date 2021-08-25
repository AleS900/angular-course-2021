import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import {BehaviorSubject, of, Subscription} from 'rxjs';
import { filter, map,delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2021';
  myStatus = 'my status';
  myNameTest = 'my name';
  color = 'colorRandom';
  font = '50';
  sw=true;
  tictock = of([1,2,3,4,5]);
  personASub : Subscription;
  video = 1;
  tictock2 = new BehaviorSubject(this.video);
  @Input() nameList = [
    {name:'Juan', lastName:'Gutiérrez'},
    {name:'Santiago', lastName:'Vargas'},
    {name:'Gabriel', lastName:'Claure'},
    {name:'Natalia', lastName:'Velarde'},
    {name:'Daniel', lastName:'Zabalaga'},
    {name:'Andrés', lastName:'Céspedes'}
  ];
  @ViewChild('myDiv1') myDiv1: ElementRef;
  @ViewChild("myDiv2") myDiv2: ElementRef;
  @ViewChild('myCompAleS') myCompAleS: any;
  @ViewChild("myDiv3") myDivHW: ElementRef;

  constructor(){
    this.pure(2,3);
    this.pure(10,2);
    this.pure(5,5);


    this.impure(2,3);
    this.impure(10,2);
    this.impure(5,5);
  }


  pure(a:number, b:number){
    console.log(a + b)
    return a + b;
  }

  impure(a:number, b:number){
    const aux = Math.random();
    console.log( a + b + aux)
    return a + b + aux;
  }
}