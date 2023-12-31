import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from'ng2-search-filter';
import{ ToastrModule } from 'ngx-toastr';
import{ NgxPaginationModule } from'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DashDocComponent } from './dash-doc/dash-doc.component';
import { DoctorComponent } from './doctor.component';
import { ListTokenComponent } from './list-token/list-token.component';
import { AddDiagnosisComponent } from './add-diagnosis/add-diagnosis.component';
import { ListDiagnosisComponent } from './list-diagnosis/list-diagnosis.component';
import { EditDiagnosisComponent } from './edit-diagnosis/edit-diagnosis.component';


@NgModule({
  declarations: [
    DashDocComponent,
    DoctorComponent,
    ListTokenComponent,
    AddDiagnosisComponent,
    ListDiagnosisComponent,
    EditDiagnosisComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
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
export class DoctorModule { }
