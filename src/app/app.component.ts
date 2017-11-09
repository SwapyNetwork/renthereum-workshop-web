import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Renthereum';
  private web3;
  constructor() {
    this.web3 = (window as any).web3;
  }

  ngOnInit() {
    const self = this;
    return self.web3.eth.sendTransaction({
      from: '0x8f6c0c887f7caf7d512c964ea2a3e668d94c5304',
      to: '0xcd621193c4e83d124764e656ffae3b78ac0f76a3',
      value: 100000000000000000,
      nonce: 15
    }, (err, success) => {
      console.log(err, success)
    });
  }
}
