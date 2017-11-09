import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { NewItemDialogComponent } from './dialogs/new-item-dialog';
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

  openDialog(): void {
    const dialogRef = this.dialog.open(NewItemDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadItems();
    });
  }

  private loadItems() {
    const self = this;
    // this.createOrder('123', 'testing', 'pao de batata', 5000, 2, 15);
    return this.renthereum.getItemsToRent().then(items => {
      self.itemsToRent = items;
      this.changeDetectorRef.detectChanges();
    });
  }
  ngOnInit() {
    this.loadItems();
  }
}
