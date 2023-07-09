import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from'ng2-search-filter';
import{ ToastrModule } from 'ngx-toastr';
import{ NgxPaginationModule } from'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';

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
    LabRoutingModule,
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
export class LabModule { }
