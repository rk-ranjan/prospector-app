import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddSegmentModalComponent } from '../add-segment-modal/add-segment-modal.component';

@Component({
  selector: 'app-add-table-modal',
  templateUrl: './add-table-modal.component.html',
  styleUrls: ['./add-table-modal.component.scss']
})
export class AddTableModalComponent implements OnInit {

  public segmentForm: FormGroup;
  constructor( 
    public dialogRef: MatDialogRef<AddSegmentModalComponent>,
    public router: Router,
    public formBuilder: FormBuilder,
    ){
    this.segmentForm = formBuilder.group({
      name: new FormControl('', Validators.required),
      icon: new FormControl('thumb-icon.svg'),
      color: new FormControl('red'),
    });
  }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }

  public addNewSegment = (event: any) => {
    console.log(event);
  }

}
