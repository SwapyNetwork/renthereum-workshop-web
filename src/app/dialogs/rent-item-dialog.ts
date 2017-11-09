import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-rent-item-dialog',
  templateUrl: 'rent-item-dialog.html',
})
export class RentItemDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<RentItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
