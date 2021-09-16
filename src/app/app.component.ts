import { Component } from '@angular/core';
import { VaccineService } from './services/vaccine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  vac=[];
  unvac=[];
  numVac=0;
  numUnvac=0;
  
  constructor(private serv:VaccineService){
  this.vac=[]
  this.unvac=[]
  this.serv.getAllVac().subscribe(data => this.makeVacDB(data))
  this.serv.getAllUnvac().subscribe(data => this.makeUnvacDB(data))
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

  checkState(){
    this.numVac=0
    this.numUnvac=0
    this.numVac=this.vac.length
    this.numUnvac=this.unvac.length
  }

  vaccinate(id){
    var personToBeVaccinated = this.unvac.find(person => person[0] === id)
    console.log(personToBeVaccinated)
    console.log(personToBeVaccinated[1]['doses'])
    var currentDoses = personToBeVaccinated[1]['doses']+1
    this.serv.updateVac(id,currentDoses).subscribe(res => console.log(res))

    if(personToBeVaccinated[1]['vaccineType'] === "A" && currentDoses ===1){
      this.serv.createPerson({"name":personToBeVaccinated[1]['name'],"age":personToBeVaccinated[1]['age'],"date":personToBeVaccinated[1]['date'],"disease":personToBeVaccinated[1]['disease'], "vaccineType":personToBeVaccinated[1]['vaccineType'],"vaccined":1,"doses":currentDoses}).subscribe(res => console.log(res))
      this.serv.deletePerson(id).subscribe(res => console.log(res))
    }else if(personToBeVaccinated[1]['vaccineType'] === "B"&& currentDoses ===2){
      this.serv.createPerson({"name":personToBeVaccinated[1]['name'],"age":personToBeVaccinated[1]['age'],"date":personToBeVaccinated[1]['date'],"disease":personToBeVaccinated[1]['disease'], "vaccineType":personToBeVaccinated[1]['vaccineType'],"vaccined":1,"doses":currentDoses}).subscribe(res => console.log(res))
      this.serv.deletePerson(id).subscribe(res => console.log(res))
    }else if(personToBeVaccinated[1]['vaccineType'] === "C"&& currentDoses ===3){
      this.serv.createPerson({"name":personToBeVaccinated[1]['name'],"age":personToBeVaccinated[1]['age'],"date":personToBeVaccinated[1]['date'],"disease":personToBeVaccinated[1]['disease'], "vaccineType":personToBeVaccinated[1]['vaccineType'],"vaccined":1,"doses":currentDoses}).subscribe(res => console.log(res))
      this.serv.deletePerson(id).subscribe(res => console.log(res))
    }
    
    this.vac=[]
    this.unvac=[]

    this.serv.getAllVac().subscribe(data => this.makeVacDB(data))
    this.serv.getAllUnvac().subscribe(data => this.makeUnvacDB(data))
    this.checkAllVac()
    


    window.location.reload();
  }

  checkAllVac():boolean{
    return this.unvac.find(person => person[1]['disease'] === false && person[1]['age'] >=18 ) !==undefined
  }


}
