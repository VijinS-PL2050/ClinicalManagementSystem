import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from'ng2-search-filter';
import{ ToastrModule } from 'ngx-toastr';
import{ NgxPaginationModule } from'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';

import { RecptionistRoutingModule } from './recptionist-routing.module';
import { DashRecpComponent } from './dash-recp/dash-recp.component';
import { RecptionistComponent } from './recptionist.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ListPatientComponent } from './list-patient/list-patient.component';


@NgModule({
  declarations: [
    DashRecpComponent,
    RecptionistComponent,
    AddPatientComponent,
    ListPatientComponent
  ],
  imports: [
    CommonModule,
    RecptionistRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot({
      timeOut:10000,
      positionClass:'toast-top-right',
      preventDuplicates:true
    }),
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class RecptionistModule { }
