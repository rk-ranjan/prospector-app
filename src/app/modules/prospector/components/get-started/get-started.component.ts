import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSegmentModalComponent } from '../add-segment-modal/add-segment-modal.component';
import { AddTableModalComponent } from '../add-table-modal/add-table-modal.component';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {
  public gridView: boolean = true;
  public segmentList: any[] = [
    {
      name: 'Segment 1',
      icon: 'plus icon',
      expanded: true
    },
    {
      name: 'Segment 2',
      icon: 'plus icon',
      expanded: true,
      children: [
        {
          name: 'Network IT-Es 11-50',
          icon: 'Minus'
        },
        {
          name: 'Network IT-Es 11-50',
          icon: 'Minus'
        },
        {
          name: 'Network IT-Es 11-50',
          icon: 'Minus'
        },
        {
          name: 'Network IT-Es 11-50',
          icon: 'Minus'
        },
      ]
    },
    {
      name: 'Segment 3',
      icon: 'plus icon',
      expanded: true,
      children: [
        {
          name: 'Network IT-Es 11-50',
          icon: 'Minus'
        },
        {
          name: 'Network IT-Es 11-50',
          icon: 'Minus'
        },
        {
          name: 'Network IT-Es 11-50',
          icon: 'Minus'
        },
        {
          name: 'Network IT-Es 11-50',
          icon: 'Minus'
        },
      ]
    },
    {
      name: 'Segment 4',
      icon: 'plus icon',    
      expanded: true,
      children: [
        {
          name: 'IT Course 1',
          icon: 'Minus'
        },
        {
          name: 'IT Course 2',
          icon: 'Minus'
        },
        {
          name: 'IT Course 3',
          icon: 'Minus'
        },
        {
          name: 'IT Course 4',
          icon: 'Minus'
        },
      ]
    },
  ];
  constructor(public dialog: MatDialog) {}

  public openDialog = () => {
    this.dialog.open(AddSegmentModalComponent, {
      height: 'auto',
      width: '300px',
      hasBackdrop: true,
      position: {
        top: '10%',
        left: '35%'
      }
    });
  }

  public openTableModal = () => {
    this.dialog.open(AddTableModalComponent, {
      height: 'auto',
      width: '300px',
      hasBackdrop: true,
      position: {
        top: '10%',
        left: '35%'
      }
    });
  }
  
  ngOnInit() {
  }

}
