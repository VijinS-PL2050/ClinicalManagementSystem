import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecptionistComponent } from './recptionist.component';
import { DashRecpComponent } from './dash-recp/dash-recp.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { FormLoginComponent } from '../login/form-login/form-login.component';

const routes: Routes = [
  {path:'', 
  component:RecptionistComponent,
  children: [
    {path:'',component:DashRecpComponent},
    { path: 'list-patient', component: ListPatientComponent },
    { path: 'add-patient', component: AddPatientComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecptionistRoutingModule { }
