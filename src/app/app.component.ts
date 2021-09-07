import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import {BehaviorSubject, of, Subscription} from 'rxjs';
import { filter, map,delay } from 'rxjs/operators';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './appPart.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  id:number = 3;
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
  data = [1,2,3,4,5,6,7,8,9];
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

  constructor(private router: Router){
    this.pure(2,3);
    this.pure(10,2);
    this.pure(5,5);


    this.impure(2,3);
    this.impure(10,2);
    this.impure(5,5);
  }

  onGoView2FromTS():void{
    this.router.navigate(
      ['view2', this.id, 'sub', 33333],
      {queryParams: {name: 'Gabriel', lastName: 'Claure'}}
    )
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