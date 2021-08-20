import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
/*
  // *************************************
  // ***         CICLO DE VIDA         ***
  // *************************************
*/
@Component({
  selector: 'savc-comp3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() name;

  constructor() {
    console.log('CONSTRUCTOR');
  }

  myName = 'Default Name';
  myVarName = 'Name';
  myVarLastName = 'Last Name';

  test3(event) {
    console.log('Event click: ', event);
    console.log('DATA: ', this.myVarName + ' ' + this.myVarLastName);
    this.myName = this.myVarName + ' ' + this.myVarLastName;
  }

  /*
      OnChanges:
      Responde cuando Angular establece o restablece propiedades de entrada vinculadas a datos. El método recibe un objeto SimpleChanges de valores de propiedad actuales y anteriores.

      Tenga en cuenta que esto sucede con mucha frecuencia, por lo que cualquier operación que realice aquí tendrá un impacto significativo en el rendimiento. 

      Llamado antes de ngOnInit () y cada vez que cambian una o más propiedades de entrada enlazadas a datos.

  */
  ngOnChanges(changes:any) {
    console.log('ON CHANGES',changes);
  }

  /*
      OnInit:
      Inicialice la directiva o componente después de que Angular muestre por primera vez las propiedades enlazadas a datos y establezca las propiedades de entrada de la directiva o componente.

      Llamado una vez, después de los primeros ngOnChanges ().

  */
  ngOnInit() {
    console.log('ON INIT');
  }

  /*
      DoCheck:
      Detecta y actúa sobre los cambios que Angular no puede o no detectará por sí solo. 

      Invocado inmediatamente después de ngOnChanges () en cada ejecución de detección de cambio, e inmediatamente después de ngOnInit () en la primera ejecución.
  */
  ngDoCheck() {
    console.log('DO CHECK');
  }

  /*
      OnDestroy:
      La limpieza justo antes de que Angular destruya la directiva o el componente. Anule la suscripción de Observables y separe los controladores de eventos para evitar pérdidas de memoria.

      Llamado inmediatamente antes de que Angular destruya la directiva o componente.
  */
 ngOnDestroy(){
    console.log('ON DESTROY');
 }

 /*
      AfterContentInit:
      Responda después de que Angular proyecte contenido externo en la vista del componente o en la vista en la que se encuentra una directiva.

      Llamado una vez después del primer ngDoCheck ().
 */
 ngAfterContentInit(){
    console.log('CONTENT INIT');
 }

 /*
      AfterContentChecked:
      Responde después de que Angular verifique el contenido proyectado en la directiva o componente.

      Llamado después de ngAfterContentInit () y cada ngDoCheck () posterior.
 */
 ngAfterContentChecked(){
    console.log('CONTENT CHECKED');
 }

 /*
      AfterViewInit:
      Responda después de que Angular inicialice las vistas del componente y las vistas secundarias, o la vista que contiene la directiva.

      Llamado una vez después del primer ngAfterContentChecked ().
 */
 ngAfterViewInit(){
    console.log('VIEW INIT');
 }

 /*
      AfterViewChecked:
      Responda después de que Angular verifique las vistas del componente y las vistas secundarias, o la vista que contiene la directiva.

      Llamado después de ngAfterViewInit () y cada ngAfterContentChecked () posterior.    
 */
 ngAfterViewChecked(){
    console.log('VIEW CHECKED');
 }
}
