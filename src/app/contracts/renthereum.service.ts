import { Injectable } from '@angular/core';
import Web3 from 'web3';

import * as Renthereum from '../contracts/Renthereum.json';

@Injectable()
export class RenthereumService {
  public web3: Web3;
  public contract: any;
  public itemsCount: number;

  constructor() { }

  public init() {
    if (typeof (window as any).web3 !== 'undefined') {
      (window as any).web3 = new Web3((window as any).web3.currentProvider);
      this.web3 = (window as any).web3;
    } else {
      (window as any).web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
      this.web3 = (window as any).web3;
    }

    this.itemsCount = 0;

    this.contract = new this.web3.eth.Contract((Renthereum as any).abi,
      (Renthereum as any).networks[Object.keys((Renthereum as any).networks)[0]].address);
  }

  public createOrder(id: string, name: string, description: string, dailyValue: number, minPeriod: number, maxPeriod: number) {
    const encoded = this.contract.methods.createOrder(id, name, description, dailyValue, minPeriod, maxPeriod).encodeABI();
    return this.web3.eth.getAccounts((err, accounts) => {
      return this.web3.eth.sendTransaction({
        from: accounts[0],
        to: this.contract._address,
        data: encoded,
        gas: 5000000
      });
    });
  }

  public rent(id: string, period: number, value: number) {
    const encoded = this.contract.methods.rent(id, period).encodeABI();
    return this.web3.eth.getAccounts((err, accounts) => {
      return this.web3.eth.sendTransaction({
        from: accounts[0],
        to: this.contract._address,
        data: encoded,
        gas: 5000000,
        value
      });
    });
  }

  public getItemsToRent() {
    const promises = [];

    return this.contract.methods.itemsCount().call().then(count => {
      if (count > this.itemsCount) {
        for (let i = this.itemsCount; i < count; i++) {
          promises.push(new Promise((resolve) => {
            this.contract.methods.itemsToRent(i).call().then(item => {
              item.index = i;
              resolve(item);
            });
          }));
        }

        this.itemsCount = count;
      }

      return Promise.all(promises);
    });
  }
}
