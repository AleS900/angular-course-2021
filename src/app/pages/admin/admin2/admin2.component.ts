import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin2',
  template: `
    <p class="hola">
      admin2 works!efsdsdf
    </p>
    <p>{{test2 ?? test3}}</p>
    <p>{{test2 || 'Soy la Segunda Opcion'}}</p>
    <button (click)="testParams('Soy una prueba')">test</button>
  `,
  styles: [
    `
     .hola{
       background-color: yellow;
       color: red;
     }
    `
  ]
})
export class Admin2Component implements OnInit {

  test2 = null;
  test3 = 'Gabriel';

  constructor() { }

  ngOnInit() {
  }

    /** 
   * @params name 
   * @params lastName 
   * return name and lastName joined
  */
  public testParams(name:string, lastName?: string = 'Vargas'): string{
    const aux = 'juan';
    console.log((name ?? aux)  + ' ' + lastName)
    return name + ' ' + lastName;
  }

}