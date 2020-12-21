import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProspectorRoutingModule } from './prospector-routing.module';
import { GetStartedComponent } from './components/get-started/get-started.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import { AddSegmentModalComponent } from './components/add-segment-modal/add-segment-modal.component';
import { AddTableModalComponent } from './components/add-table-modal/add-table-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule, MatTooltipModule } from '@angular/material';

@NgModule({
  declarations: [GetStartedComponent, AddSegmentModalComponent, AddTableModalComponent],
  imports: [
    CommonModule,
    ProspectorRoutingModule,
    MatDividerModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatTooltipModule
  ],
  entryComponents: [
    AddSegmentModalComponent,
    AddTableModalComponent
  ]
})
export class ProspectorModule { }
