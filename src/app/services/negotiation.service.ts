import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

export class NegotiationService {
 
  urlW = "https://bitcoin-test-a0874-default-rtdb.firebaseio.com/wallets.json"
  urlT = "https://bitcoin-test-a0874-default-rtdb.firebaseio.com/transactions.json"

  constructor(private http: HttpClient) { }

  public getWalletsDB():Observable<any>{
    return this.http.get(`${this.urlW}`)
  }

  public getTransactionsDB():Observable<any>{
    return this.http.get(`${this.urlT}`)
  }

  public delete(id: string): Observable<any>{
    return this.http.delete(`${this.urlT}/${id}.json`);
  }

  public mineBTC(id:string,val):Observable<any>{
    return this.http.patch(`${this.urlW}/${id}.json`,{"btc":val})
  }

  public mineETH(id:string,val):Observable<any>{
    return this.http.patch(`${this.urlW}/${id}.json`,{"eth":val})
  }
}