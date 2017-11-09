import { Component, OnInit } from '@angular/core';
import { Web3Service } from './services/web3.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Renthereum';
  private web3;
  constructor(private web3Service: Web3Service) { }

  ngOnInit() {
    var self = this;
    this.web3Service.init();
    this.web3 = this.web3Service.getInstance();
    this.web3.eth.getAccounts(console.log);
    this.web3.eth.getAccounts(function(err, accounts){

      self.web3.eth.sendTransaction({
        from: accounts[0],
        to: accounts[1],
        value: 100000000,
        gas: 40000
      }, function(error, response){
        console.error(error);
        console.log(response);
      });
    
    });
  }
}
