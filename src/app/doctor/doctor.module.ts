import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DashDocComponent } from './dash-doc/dash-doc.component';
import { DoctorComponent } from './doctor.component';


@NgModule({
  declarations: [
    DashDocComponent,
    DoctorComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
