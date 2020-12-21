import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AddSegmentModalComponent } from '../add-segment-modal/add-segment-modal.component';

@Component({
  selector: 'app-add-table-modal',
  templateUrl: './add-table-modal.component.html',
  styleUrls: ['./add-table-modal.component.scss']
})
export class AddTableModalComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AddSegmentModalComponent>){}

  public ngOnInit() {
  }

  public close() {
    this.dialogRef.close();
  }

}
