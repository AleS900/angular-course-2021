import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'savc-comp',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component {
  // *************************************
  // ***        INPUTS & OUTPUTS       ***
  // *************************************

  @Input('status') statusTest: string = 'working';

  @Output('onSendData') sendData = new EventEmitter(null);

  onClickTest(event: any) {
    console.log('EVENT CLICK', event);

    this.sendData.emit({
      name: 'Santiago',
      status: 'busy'
    });
  }

  constructor() {}
}
