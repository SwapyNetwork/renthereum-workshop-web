import { Component, Inject, ChangeDetectorRef, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { RenthereumService } from '../contracts/renthereum.service';

@Component({
  selector: 'app-rent-item-dialog',
  templateUrl: 'rent-item-dialog.html',
})
export class RentItemDialogComponent {
  numberOfDays: number;
  price: any;

  item: any;
  BN: any;

  constructor(
    public dialogRef: MatDialogRef<RentItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private changeDetectorRef: ChangeDetectorRef,
    public renthereum: RenthereumService) {
      this.setItem(data.item);
      this.BN = this.renthereum.web3.utils.BN;
    }

  private setItem(item) {
    this.item = item;
    setInterval(() => {
      this.changeDetectorRef.detectChanges();
    }, 5);
  }

  public calcPrice(numberOfDays, dailyValue): void {
    const priceBN = new this.BN(dailyValue);
    const daysBN = new this.BN(numberOfDays);
    this.price = this.renthereum.web3.utils.fromWei(priceBN.mul(daysBN));
  }

  public rent(item, period, price) {
    this.renthereum.rent(item.index, period, this.renthereum.web3.utils.toWei(price));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
