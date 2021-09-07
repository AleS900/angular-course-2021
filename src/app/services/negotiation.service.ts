import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

export class NegotiationService {
 
  urlW = "https://bitcoin-test-a0874-default-rtdb.firebaseio.com/wallets.json"
  urlT = "https://bitcoin-test-a0874-default-rtdb.firebaseio.com/transactions.json"
  urlTD = "https://bitcoin-test-a0874-default-rtdb.firebaseio.com/transactions"
  urlWP = "https://bitcoin-test-a0874-default-rtdb.firebaseio.com/wallets"

  constructor(private http: HttpClient) { }

  //             METODO GET

  // GET WALLETS
  public getWalletsDB():Observable<any> {
    return this.http.get(`${this.urlW}`)
  }

  // GET TRANSACTIONS
  public getTransactionsDB():Observable<any> {
    return this.http.get(`${this.urlT}`)
  }


  //              METODO PATCH 
  // MINE BTC
  public mineBTC(id:string,val):Observable<any> { 
    return this.http.patch(`${this.urlWP}/${id}.json`,{"btc":val})
  }

  // MINE ETH
  public mineETH(id:string,val):Observable<any> {
    return this.http.patch(`${this.urlWP}/${id}.json`,{"eth":val})
  }


  //               METODO DELETE
  public delete(id: string): Observable<any> {
    return this.http.delete(`${this.urlTD}/${id}.json`);
  }
}