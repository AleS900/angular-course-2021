import { Component} from '@angular/core';

@Component({
  selector: 'savc-comp3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component {

  constructor() { }

  myName="Default Name";
  myVarName = "Name";
  myVarLastName = "Last Name";

  test3(event){
    console.log('Event click: ', event);
    console.log('DATA: ', this.myVarName + ' ' + this.myVarLastName);
    this.myName=this.myVarName + ' ' + this.myVarLastName;
}

}