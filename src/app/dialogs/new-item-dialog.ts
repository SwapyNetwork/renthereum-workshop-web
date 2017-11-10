import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { RenthereumService } from '../contracts/renthereum.service';

@Component({
  selector: 'app-new-item-dialog',
  templateUrl: 'new-item-dialog.html',
})
export class NewItemDialogComponent {
  id: string;
  name: string;
  description: string;
  dailyValue: string;
  minPeriod: number;
  maxPeriod: number;

  constructor(
    public dialogRef: MatDialogRef<NewItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public renthereum: RenthereumService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public createOrder(id, name, description, dailyValue, minPeriod, maxPeriod) {
    this.renthereum.createOrder(id, name, description, this.renthereum.web3.utils.toWei(dailyValue), minPeriod, maxPeriod);
  }

}
