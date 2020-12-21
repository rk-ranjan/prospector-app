import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-segment-modal',
  templateUrl: './add-segment-modal.component.html',
  styleUrls: ['./add-segment-modal.component.scss']
})
export class AddSegmentModalComponent implements OnInit {
  public segmentForm: FormGroup;
  constructor( 
    public dialogRef: MatDialogRef<AddSegmentModalComponent>,
    public router: Router,
    public formBuilder: FormBuilder,
    ){
    this.segmentForm = formBuilder.group({
      name: new FormControl('', Validators.required),
      icon: new FormControl(''),
      color: new FormControl(''),
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
