import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class VaccineService {
  urlV="https://vaccines-test-default-rtdb.firebaseio.com/vaccinated.json"
  urlUV="https://vaccines-test-default-rtdb.firebaseio.com/unvaccinated.json"
  urlUVP="https://vaccines-test-default-rtdb.firebaseio.com/unvaccinated"
  urlUVD="https://vaccines-test-default-rtdb.firebaseio.com/unvaccinated"

  

  constructor(private http: HttpClient) { }

  public getAllVac():Observable<any>{
    return this.http.get(`${this.urlV}`)
  }

  public getAllUnvac():Observable<any>{
    return this.http.get(`${this.urlUV}`)
  }

  public updateVac(id:string,doses:number):Observable<any>{
    return this.http.patch(`${this.urlUVP}/${id}.json`,{"doses":doses})
  }

  public editVac(id:string, body: any):Observable<any>{
    return this.http.patch(`${this.urlUVP}/${id}.json`,body)
  }

  public createPerson(body: any): Observable<any>{
    return this.http.post(
      `${this.urlV}`,
      body);
  }

  public deletePerson(id: string): Observable<any>{
    return this.http.delete(
      `${this.urlUVP}/${id}.json`);
  }
}