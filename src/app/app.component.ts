import { Component, VERSION } from "@angular/core";
import { NegotiationService } from "./services/negotiation.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})

export class AppComponent  {

  walletsArr=[];
  transactionsArr=[];
  btc = 0;
  eth = 0;
  anyLeft = true;

  constructor(private negotiation:NegotiationService) { 
    this.negotiation.getWalletsDB().subscribe(data => this.getDataW(data))
    this.negotiation.getTransactionsDB().subscribe(data => this.getDataT(data))
  }

  getDataW(data){
    this.walletsArr=Object.entries(data);
    this.updateTotalMoney()
  }

  getDataT(data){
    this.transactionsArr=Object.entries(data);
    this.invalidTransactions()
  }

  mining(id, from, to, quantity, moneyType){
    var toVar = this.walletsArr.filter(x => x[1]["wallet"] == to)
    var fromVar = this.walletsArr.filter(x => x[1]["wallet"] == from)
    var moneyTo = toVar[0][1][moneyType] + quantity
    var moneyFrom = fromVar[0][1][moneyType] - quantity

    if(moneyType === "btc"){
      this.negotiation.mineBTC(fromVar[0][0],moneyFrom).subscribe(res => console.log(res))
      this.negotiation.mineBTC(toVar[0][0],moneyTo).subscribe(res => console.log(res))
    }else{
      this.negotiation.mineETH(fromVar[0][0],moneyFrom).subscribe(res => console.log(res))
      this.negotiation.mineETH(toVar[0][0],moneyTo).subscribe(res => console.log(res))
    }
    this.negotiation.delete(id).subscribe(res=>console.log(res))
    this.negotiation.getWalletsDB().subscribe(data => this.getDataW(data))
    this.negotiation.getTransactionsDB().subscribe(data => this.getDataT(data))
    this.updateTotalMoney();
    window.location.reload();
  }

  updateTotalMoney(){
    this.eth = 0
    this.btc = 0
    for(var i in this.walletsArr){
      this.eth = this.walletsArr[i][1]["eth"] + this.eth
      this.btc = this.walletsArr[i][1]["btc"] + this.btc
    }
  }

  invalidTransactions():boolean{
    return this.transactionsArr.find(item => item[1]['mineType'] !== 'PoS' ||
    item[1]['miner'] > 20) === undefined
  }
}