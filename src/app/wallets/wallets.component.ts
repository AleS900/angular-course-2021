import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wallets',
  template:` <div [style.border]= "'2px solid black'" [style.background]=" (eth+btc) > 5 ? 'brown' :(eth+btc) < 2 ? 'gray' : 'white'" style="float: left; margin: 10px; padding: 10px; font-family: sans-serif"><b>
  <p>Wallet: {{wallet}}</p>
  <p>Nombre: {{name | uppercase}}</p>
  <p>ETH: {{eth}}</p>
  <p>BTC: {{btc}}</p>
</b></div>`,
})
export class WalletsComponent implements OnInit {
  @Input() id;
  @Input() wallet;
  @Input() name;
  @Input() eth;
  @Input() btc;
  constructor() { }

  ngOnInit() {
  }

}