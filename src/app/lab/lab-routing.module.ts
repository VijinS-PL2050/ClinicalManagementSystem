import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashLabComponent } from './dash-lab/dash-lab.component';
import { LabComponent } from './lab.component';
import { AddTestsComponent } from './add-tests/add-tests.component';
import { ListTestsComponent } from './list-tests/list-tests.component';
import { ListTestPrescriptionComponent } from './list-test-prescription/list-test-prescription.component';
import { ListReportManagementComponent } from './list-report-management/list-report-management.component';
import { EditTestsComponent } from './edit-tests/edit-tests.component';
import { ListTestReportComponent } from './list-test-report/list-test-report.component';
import { ListReportGenerationComponent } from './list-report-generation/list-report-generation.component';
import { ListBillComponent } from './list-bill/list-bill.component';

const routes: Routes = [
  {path:'', 
  component:LabComponent,
  children: [
    { path: '', component: DashLabComponent },
    { path: 'add-test', component: AddTestsComponent },
    { path: 'list-test', component: ListTestsComponent },
    { path: 'list-test-prescription', component: ListTestPrescriptionComponent },
    { path: 'edittest/:ttId', component: EditTestsComponent },
    { path: 'view-report', component: ListReportManagementComponent},
    {path:'app-list-tests',component:ListTestsComponent},
  {path:'app-list-tests',component:ListTestsComponent},
  {path:'app-list-test-report/:tpId',component:ListTestReportComponent},
  {path:'app-edit-test-report/:',component:ListTestsComponent},
  {path:'app-list-report-management',component:ListReportManagementComponent},
  {path:'app-list-report-generation/:rpId',component:ListReportGenerationComponent},
  {path:'app-list-bill/:rpId',component:ListBillComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabRoutingModule { }
