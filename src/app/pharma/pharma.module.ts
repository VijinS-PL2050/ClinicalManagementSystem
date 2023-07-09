import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from'ng2-search-filter';
import{ ToastrModule } from 'ngx-toastr';
import{ NgxPaginationModule } from'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';

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
    PharmaRoutingModule,
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
export class PharmaModule { }
