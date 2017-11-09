import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-new-item-dialog',
  templateUrl: 'new-item-dialog.html',
})
export class NewItemDialogComponent {
  name: string;
  description: string;
  minPeriod: number;
  maxPeriod: number;

  constructor(
    public dialogRef: MatDialogRef<NewItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
