import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmaRoutingModule } from './pharma-routing.module';
import { DashPharmaComponent } from './dash-pharma/dash-pharma.component';
import { PharmaComponent } from './pharma.component';


@NgModule({
  declarations: [
    DashPharmaComponent,
    PharmaComponent
  ],
  imports: [
    CommonModule,
    PharmaRoutingModule
  ]
})
export class PharmaModule { }
