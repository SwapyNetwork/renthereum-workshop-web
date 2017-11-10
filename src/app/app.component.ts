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

  itemsToRent: any[] = [];

  constructor(private changeDetectorRef: ChangeDetectorRef, public dialog: MatDialog, public renthereum: RenthereumService) {
    renthereum.init();
  }

  openNewItemDialog(): void {
    const newItemDialogRef = this.dialog.open(NewItemDialogComponent, {
      width: '500px',
    });

    newItemDialogRef.afterClosed().subscribe(result => {
      this.loadItems();
    });
  }

  openRentItemDialog(item): void {
    const rentDialogRef = this.dialog.open(RentItemDialogComponent, {
      width: '500px',
      data : { item }
    });

    rentDialogRef.afterClosed().subscribe(result => {
    });
  }

  private loadItems() {
    return this.renthereum.getItemsToRent().then(items => {
      this.itemsToRent = this.itemsToRent.concat(items);
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnInit() {
    this.loadItems();
  }
}
