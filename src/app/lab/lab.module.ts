import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabRoutingModule } from './lab-routing.module';
import { DashLabComponent } from './dash-lab/dash-lab.component';
import { LabComponent } from './lab.component';


@NgModule({
  declarations: [
    DashLabComponent,
    LabComponent
  ],
  imports: [
    CommonModule,
    LabRoutingModule
  ]
})
export class LabModule { }
