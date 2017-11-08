import { Injectable } from '@angular/core';
import Web3 from 'web3';

@Injectable()
export class Web3Service {

  private web3: Web3;
  constructor() { }

  public init() {
    this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
  }

  public getInstance() {
    if (this.web3 == null) {
      this.init();
    }
    return this.web3;
  }

}
