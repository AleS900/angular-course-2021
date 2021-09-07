import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'transactions',
  template:`
  <div  [style.border]= "'1px solid black'"
        [style.background]="mineType === 'PoW'? 'yellow' : 'green'"
        style="float: left; 
        margin: 10px; 
        padding: 10px;
        font-family: sans-serif;
        font-size: 110%"
  >
  <p> Date: {{date | date: 'dd/MM/yyyy'}}</p>
  <p> From: {{from}}</p>
  <p> To: {{to}}</p>
  <p> Quantity: {{quantity}}</p>
  <p> MoneyType: {{moneyType | uppercase}}</p>
  <p> MineType: {{mineType}}</p>
  <p> Miner: {{miner}}</p>

  <ng-content></ng-content>
</div>

`,
})
export class TransactionsComponent implements OnInit {
  @Input() id:any;
  @Input() date: string;
  @Input() from: string;
  @Input() to: string;
  @Input() quantity:number;
  @Input() moneyType: string;
  @Input() mineType: string;
  @Input() miner:number;

  constructor() { }

  ngOnInit() {
  }

}