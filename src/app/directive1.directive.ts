import { Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output } from '@angular/core';
// DIRECTIVA DE ATRIBUTO
@Directive({
  selector: '[directive1Test]'
})
export class Directive1Directive implements OnChanges{

  @Input() directive1Test: string = 'yellow';
  @Output() outputTest = new EventEmitter<any>(null);

  /*
      HOSTLISTENER:
      Se encarga de escuchar culquieR cambio a nivel de DOM
      -- click, al hacer click en el componente
      -- window, al hacer click en cualquier lado de la
         aplicacion
      -- mouseleave, cuando el puntero deja el componente
      -- mouseenter, cuando el puntero entra al componente

      NOTA: Las directivas no pueden usarse en component pero si
            en cualquier otro elemento HTML, al no tener nativeElement
            como por ejemplo los parrafos.

            De poder se puede pero usualmente se hace en 
            elementos HTML.
  */
  @HostListener('click') onClick() {
    console.log('BBBBBBBBBBBBBBBBBB',this.directive1Test);
    this.setBackgroundColor('cyan');
  }

  @HostListener('mouseleave') onMouseleave() {
    this.setBackgroundColor(this.directive1Test);
    this.outputTest.emit('Test MY Output');
  }

  @HostListener('mouseenter') onMouseenter() {
    this.setBackgroundColor('orange');
    this.element.nativeElement.style.backgroundColor = 'orange';
  }

  // Tenemos que poner private o public
  constructor(private element: ElementRef) {
    console.log('AAAAAAAAAAAAAAAAAAA', this.element)
    this.setBackgroundColor(this.directive1Test);
    this.element.nativeElement.style.border = '10px gold solid';
  }

  // Esta función es para factorizar codigo
  setBackgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

  ngOnChanges(changes:any){
    this.setBackgroundColor(changes.directive1Test.Value);
  }
}