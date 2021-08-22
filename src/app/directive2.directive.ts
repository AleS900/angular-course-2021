import { Directive, EventEmitter, Input, OnChanges, Output, TemplateRef, ViewContainerRef } from '@angular/core';
// DIRECTIVA DE Estructura
@Directive({
  selector: '[ngIfAleS]'
})

/*
    Una direcitva estructural solamente puede tener un input
    y este debe de tener el mismo nombre que la directiva

    En caso de los Outputs pese a nno lanzar un error de consola 
    estos no funcionan adecuadamente
*/
export class Directive2Directive implements OnChanges{

  @Input() ngIfAleS = true;

  @Output() test = new EventEmitter<any>(null);

  constructor(private _templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef) { 
    /*if (this.ngIfAleS){
      this.viewContainerRef.createEmbeddedView(this._templateRef);
    } else {
      this.viewContainerRef.clear();
    }*/
  }

  ngOnChanges(changes:any){
    console.log('changes: ', changes.ngIfAleS.currentValue)
    this.setViewContainer(changes.ngIfAleS.currentValue);

  }

  setViewContainer(show:boolean){
    if(show){
      this.test.emit('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      this.viewContainerRef.createEmbeddedView(this._templateRef)
    } else {
      this.viewContainerRef.clear();
    } 
  }

}