import { Component, Input } from '@angular/core';

@Component({
  selector: 'savc-comp',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component {
  // *************************************
  // ***            INPUTS             ***
  // *************************************

  @Input('status') statusTest: string = 'working';

  constructor() {}
}
