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
    this.web3Service.init();
    this.web3 = this.web3Service.getInstance();
  }
}
