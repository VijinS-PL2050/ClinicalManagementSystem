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
import { AddTestsComponent } from './add-tests/add-tests.component';
import { AddTestReportComponent } from './add-test-report/add-test-report.component';
import { EditTestReportComponent } from './edit-test-report/edit-test-report.component';
import { EditTestsComponent } from './edit-tests/edit-tests.component';
import { ListBillComponent } from './list-bill/list-bill.component';
import { ListReportGenerationComponent } from './list-report-generation/list-report-generation.component';
import { ListReportManagementComponent } from './list-report-management/list-report-management.component';
import { ListTestPrescriptionComponent } from './list-test-prescription/list-test-prescription.component';
import { ListTestReportComponent } from './list-test-report/list-test-report.component';
import { ListTestsComponent } from './list-tests/list-tests.component';


@NgModule({
  declarations: [
    DashLabComponent,
    LabComponent,
    AddTestsComponent,
    AddTestReportComponent,
    EditTestReportComponent,
    EditTestsComponent,
    ListBillComponent,
    ListReportGenerationComponent,
    ListReportManagementComponent,
    ListTestPrescriptionComponent,
    ListTestReportComponent,
    ListTestsComponent
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
