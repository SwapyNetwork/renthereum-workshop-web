import { Injectable } from '@angular/core';
import Web3 from 'web3';

import * as Renthereum from '../contracts/Renthereum.json';

@Injectable()
export class RenthereumService {
  public web3: Web3;
  public contract: any;

  constructor() { }

  public init() {
    if (typeof (window as any).web3 !== 'undefined') {
      (window as any).web3 = new Web3((window as any).web3.currentProvider);
      this.web3 = (window as any).web3;
    } else {
      (window as any).web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
      this.web3 = (window as any).web3;
    }

    this.contract = new this.web3.eth.Contract((Renthereum as any).abi,
      (Renthereum as any).networks[Object.keys((Renthereum as any).networks)[0]].address);
  }

  public createOrder(id: string, name: string, description: string, dailyValue: number, minPeriod: number, maxPeriod: number) {
    const encoded = this.contract.methods.createOrder(id, name, description, dailyValue, minPeriod, maxPeriod).encodeABI();
    this.web3.eth.getAccounts((err, accounts) => {
      this.web3.eth.sendTransaction({
        from: accounts[0],
        to: this.contract._address,
        data: encoded,
        gas: 5000000
      });
    });
  }

  public getItemsToRent() {
    const self = this;
    const promises = [];

    return this.contract.methods.itemsCount().call().then(count => {
      for (let i = 0; i < count; i++) {
        promises.push(self.contract.methods.itemsToRent(i).call());
      }

      return Promise.all(promises);
    });
  }
}
