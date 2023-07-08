import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashDocComponent } from './dash-doc/dash-doc.component';
import { DoctorComponent } from './doctor.component';

const routes: Routes = [
  {path:'', 
  component:DoctorComponent,
  children: [
    { path: 'list-patient', component: DashDocComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
