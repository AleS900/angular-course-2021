import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wallets',
  template:` 
  <div  [style.border]= "'1px solid black'" 
        [style.background]=" (eth+btc) > 5 ? 'brown' :(eth+btc) < 2 ? 'gray' : 'white'" style="float: left; margin: 10px; 
        padding: 10px; 
        font-family: sans-serif;
        font-size: 110%"
  >
    <p>Wallet: {{wallet}}</p>
    <p>Nombre: {{name | uppercase}}</p>
    <p>ETH:    {{eth}}</p>
    <p>BTC:    {{btc}}</p>
</div>`,
})
export class WalletsComponent implements OnInit {
  @Input() id:any;
  @Input() wallet:string;
  @Input() name:string;
  @Input() eth:number;
  @Input() btc:number;
  constructor() { }

  ngOnInit() {
  }

}