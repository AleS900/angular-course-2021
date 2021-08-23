import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'transactions',
  template: `
  <div [style.background]=" eth+btc > 10 ? 'brown' : 'gray'"
       style="float: left; margin: 10px; padding: 10px;">
	  <p>Date: {{date}}</p>
    <p>From: {{from}}</p>
	  <p>To: {{to}}</p>
	  <p>Quantity:{{quantity}}</p>
    <p>MoneyType:{{moneyType}}</p>
    <p>MineType:{{mineType}}</p>
    <p>Miner:{{miner}}</p>
  </div>
  `,
})
export class TransactionsComponent{

  @Input() date: string;
  @Input() from: string;
  @Input() to: string;
  @Input() quantity:number;
  @Input() moneyType: string;
  @Input() mineType: string;
  @Input() miner:number;

  constructor() { }


}