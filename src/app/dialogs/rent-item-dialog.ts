import { Component, Inject, ChangeDetectorRef, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-rent-item-dialog',
  templateUrl: 'rent-item-dialog.html',
})
export class RentItemDialogComponent implements OnInit {
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    public dialogRef: MatDialogRef<RentItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }

  ngOnInit() {
    this.changeDetectorRef.detectChanges();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
