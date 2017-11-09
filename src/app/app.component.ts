import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { NewItemDialogComponent } from './dialogs/new-item-dialog';
import { RentItemDialogComponent } from './dialogs/rent-item-dialog';
import { RenthereumService } from './contracts/renthereum.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Renthereum';
  private web3;

  itemsToRent: any[];

  constructor(private changeDetectorRef: ChangeDetectorRef, public dialog: MatDialog, public renthereum: RenthereumService) {
    renthereum.init();
  }

  openNewItemDialog(): void {
    const dialogRef = this.dialog.open(NewItemDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openRentDialog(): void {
    const dialogRef = this.dialog.open(RentItemDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    const self = this;
    // this.renthereum.createOrder('10', 'PS4', 'gaming console', 3, 3, 10);
    return this.renthereum.getItemsToRent().then(items => {
      self.itemsToRent = items;
      this.changeDetectorRef.detectChanges();
    });
  }
}
