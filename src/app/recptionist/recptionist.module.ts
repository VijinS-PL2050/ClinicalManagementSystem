import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecptionistRoutingModule } from './recptionist-routing.module';
import { DashRecpComponent } from './dash-recp/dash-recp.component';
import { RecptionistComponent } from './recptionist.component';


@NgModule({
  declarations: [
    DashRecpComponent,
    RecptionistComponent
  ],
  imports: [
    CommonModule,
    RecptionistRoutingModule
  ]
})
export class RecptionistModule { }
