import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from'ng2-search-filter';
import{ NgxPaginationModule } from'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import{ ToastrModule } from 'ngx-toastr';
import { RecptionistRoutingModule } from './recptionist-routing.module';
import { DashRecpComponent } from './dash-recp/dash-recp.component';
import { RecptionistComponent } from './recptionist.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { ListAppintmentComponent } from './list-appintment/list-appintment.component';
import { ListTokenComponent } from './list-token/list-token.component';


@NgModule({
  declarations: [
    DashRecpComponent,
    RecptionistComponent,
    AddPatientComponent,
    ListPatientComponent,
    EditPatientComponent,
    AddAppointmentComponent,
    ListAppintmentComponent,
    ListTokenComponent
  ],
  imports: [
    CommonModule,
    RecptionistRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      timeOut:50000,
      positionClass:'toast-top-right',
      preventDuplicates:true
    }),

    ReactiveFormsModule
    
  ]
})
export class RecptionistModule { }
