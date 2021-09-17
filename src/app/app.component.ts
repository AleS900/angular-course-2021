import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { VaccineService } from './services/vaccine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  vac=[];
  unvac=[];
  numVac=0;
  numUnvac=0;
  ngForm:FormGroup;
  ngForm2:FormGroup;
  cr:Subscription;
  ed:Subscription;
  idSt:string;
  
  constructor(private serv:VaccineService){

  this.serv.getAllVac().subscribe(data => this.makeVacDB(data))
  this.serv.getAllUnvac().subscribe(data => this.makeUnvacDB(data))
  }

  ngOnInit():void{
    this.vac=[];
    this.unvac=[];
    this.numUnvac;
    this.numVac;
  }

  makeVacDB(data:any){
    this.vac=Object.entries(data);
    this.checkState()
    this.checkAllVac()
  }

  makeUnvacDB(data:any){
    this.unvac=Object.entries(data);
    this.checkState()
    this.checkAllVac()
  }

  creadorcito(){
    this.cr === this.serv.createPerson(this.ngForm.value).subscribe(
      s=>this.serv
    );
  }

  editorcito(){
    this.ed === this.serv.editVac('idString', this.ngForm.value).subscribe(
      s=>this.serv
    );
  }


  vaccinate(id){
    var personToBeV = this.unvac.find(person => person[0] === id)
    console.log(personToBeV)
    console.log(personToBeV[1]['doses'])
    var tempDoses = personToBeV[1]['doses']+1
    this.serv.updateVac(id,tempDoses).subscribe(res => console.log(res))

    if(personToBeV[1]['vaccineType'] === "A" && tempDoses ===1){
      this.serv.createPerson({"name":personToBeV[1]['name'],"age":personToBeV[1]['age'],"date":personToBeV[1]['date'],"disease":personToBeV[1]['disease'], "vaccineType":personToBeV[1]['vaccineType'],"vaccined":1,"doses":tempDoses}).subscribe(res => console.log(res))
      this.serv.deletePerson(id).subscribe(res => console.log(res))
    }else if(personToBeV[1]['vaccineType'] === "B"&& tempDoses ===2){
 
      this.serv.createPerson({"name":personToBeV[1]['name'],"age":personToBeV[1]['age'],"date":personToBeV[1]['date'],"disease":personToBeV[1]['disease'], "vaccineType":personToBeV[1]['vaccineType'],"vaccined":1,"doses":tempDoses}).subscribe(res => console.log(res))
      this.serv.deletePerson(id).subscribe(res => console.log(res))
    }else if(personToBeV[1]['vaccineType'] === "C"&& tempDoses ===3){
    
      this.serv.createPerson({"name":personToBeV[1]['name'],"age":personToBeV[1]['age'],"date":personToBeV[1]['date'],"disease":personToBeV[1]['disease'], "vaccineType":personToBeV[1]['vaccineType'],"vaccined":1,"doses":tempDoses}).subscribe(res => console.log(res))
      this.serv.deletePerson(id).subscribe(res => console.log(res))
    }
    
    this.vac=[]
    this.unvac=[]

    this.serv.getAllVac().subscribe(data => this.makeVacDB(data))
    this.serv.getAllUnvac().subscribe(data => this.makeUnvacDB(data))
    this.checkAllVac()
  
    
  }

  checkAllVac():boolean{
    return this.unvac.find(person => person[1]['disease'] === false && person[1]['age'] >=18 ) !==undefined
  }

  checkState(){
    this.numVac=0
    this.numUnvac=0
    this.numVac=this.vac.length
    this.numUnvac=this.unvac.length
  }


}
