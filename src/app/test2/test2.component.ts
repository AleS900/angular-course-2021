import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component {
  /*
  EJERCICIO 5: 08/05/2021
  Crear dos inputs uno llamado name y otro llamado lastName de tipo string mostrar estos datos de entrada a dar click en un boton concatenado con
  "general data"
  EJEMPLO:
      Juan Gutierrez
  */
  @Input('name') inputName: string = 'Name';

  @Input('lastName') inputLastName: string = 'Last Name';

  @Output('onGeneralData') generalData = new EventEmitter(null);
  @Output('onGeneralDataCORRECTED') generalDataCORRECTED = new EventEmitter(null);

  /*
    La salida con el nombre de E5 es el ejercicio resuelto 
    en un inicio; el ejercicio corregido es el que lleva en salida
    CHILD COMP SEND DATA
  */
  onClickShowData(event: any) {
    console.log('EVENT CLICK', event);

    this.generalData.emit({

      name: 'Santiago',
      lastName: 'Vargas'
    });

    this.generalDataCORRECTED.emit('General Data ' + this.inputName + ' ' + this.inputLastName);
  
  }

  constructor() {}
}
