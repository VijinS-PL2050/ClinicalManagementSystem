import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecptionistComponent } from './recptionist.component';
import { DashRecpComponent } from './dash-recp/dash-recp.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { FormLoginComponent } from '../login/form-login/form-login.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { ListAppintmentComponent } from './list-appintment/list-appintment.component';
import { ListTokenComponent } from './list-token/list-token.component';

const routes: Routes = [
  {path:'', 
  component:RecptionistComponent,
  children: [
    {path:'',component:DashRecpComponent},
    { path: 'list-patient', component: ListPatientComponent },
    { path: 'list-appointment', component: ListAppintmentComponent},
    { path: 'list-token', component: ListTokenComponent},
    { path: 'add-patient', component: AddPatientComponent },
    { path: 'edit-patient/:pId', component: EditPatientComponent },
    { path: 'add-appointment/:pId', component: AddAppointmentComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecptionistRoutingModule { }
