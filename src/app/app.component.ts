import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent  {
  listWallets = [

    {wallet: "MARIA123", name: "maria", eth: 0, btc: 2},
    {wallet: "JUAN123", name: "juan", eth: 5, btc: 0},
    {wallet: "LUCAS123", name: "lucas", eth: 6, btc: 3},
    {wallet: "MARCOS123", name: "marcos", eth: 0, btc: 2},
    {wallet: "PEDRO123", name: "pedro", eth: 1, btc: 0},
    {wallet: "JUANA123", name: "juana", eth: 10, btc: 12}
  ];

  listTransactions = [
    {date: "2019-09-07T15:50+00Z ", from: "MARIA123" , to:"JUANA123"  , quantity: 2, moneyType: "btc", mineType: "PoW", miner: 5},
    {date: "2019-09-07T15:50+00Z ", from: "JUAN123"  , to: "PEDRO123" , quantity: 2, moneyType: "eth", mineType: "PoS", miner: 21},
    {date: "2019-09-07T15:50+00Z ", from: "LUCAS123" , to: "MARCOS123", quantity: 2, moneyType: "btc", mineType: "PoW", miner: 5},
    {date: "2019-09-07T15:50+00Z ", from: "MARCOS123", to: "LUCAS123" , quantity: 2, moneyType: "eth", mineType: "PoS", miner: 10},
    {date: "2019-09-07T15:50+00Z ", from: "PEDRO123" , to: "JUAN123"  , quantity: 2, moneyType: "btc", mineType: "PoW", miner: 5},
    {date: "2019-09-07T15:50+00Z ", from: "JUANA123" , to: "MARIA123" , quantity: 2, moneyType: "eth", mineType: "PoS", miner: 30},
    {date: "2019-09-07T15:50+00Z ", from: "MARIA123" , to: "JUANA123" , quantity: 2, moneyType: "btc", mineType: "PoW", miner: 2},
    {date: "2019-09-07T15:50+00Z ", from: "JUAN123"  , to: "PEDRO123" , quantity: 2, moneyType: "eth", mineType: "PoS", miner: 15},
    {date: "2019-09-07T15:50+00Z ", from: "LUCAS123" , to: "MARCOS123", quantity: 2, moneyType: "btc", mineType: "PoW", miner: 3},
    {date: "2019-09-07T15:50+00Z ", from: "MARCOS123", to: "LUCAS123" , quantity: 2, moneyType: "eth", mineType: "PoS", miner: 5}
  ];
  
  contETH= this.listWallets.reduce((acc,value) => acc+value.eth, 0)

  contBTC= this.listWallets.reduce((acc,value) => acc+value.btc, 0) 

  trans = {
    money: this.listTransactions.filter(p => p.moneyType)
  };

verifyAllTransactions() {
  const noTransacciones = this.trans.money.filter(p => p.moneyType === "eth" || "btc");
  return 0;
}

pagar(info){
  const index = this.trans.money.findIndex(p => p === info);
 
    if (info.moneyType === 'btc' && this.listWallets.find(item => item.wallet === info.from).btc - info.quantity >= 0) {
      info.miner=info.miner+1;
      this.listWallets.find(item => item.wallet === info.from).btc -= info.quantity;
      this.listWallets.find(item => item.wallet === info.to).btc += info.quantity;
    } else if (this.listWallets.find(item => item.wallet === info.from).eth - info.quantity >= 0 ) {
      info.miner=info.miner+1;
      this.listWallets.find(item => item.wallet === info.from).eth -= info.quantity;
      this.listWallets.find(item => item.wallet === info.to).eth += info.quantity;
    } 
    

}

}
