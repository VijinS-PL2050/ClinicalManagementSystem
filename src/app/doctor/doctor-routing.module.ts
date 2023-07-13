import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashDocComponent } from './dash-doc/dash-doc.component';
import { DoctorComponent } from './doctor.component';
import { ListTokenComponent } from './list-token/list-token.component';
import { ListDiagnosisComponent } from './list-diagnosis/list-diagnosis.component';
import { AddDiagnosisComponent } from './add-diagnosis/add-diagnosis.component';
import { EditDiagnosisComponent } from './edit-diagnosis/edit-diagnosis.component';

const routes: Routes = [
  {path:'', 
  component:DoctorComponent,
  children: [
    {path:'',component:DashDocComponent},
    {path:' /:uid',component:DashDocComponent},
    { path:'list-token-doc/:uid', component: ListTokenComponent },
    { path:'list-token-doc/:this.uid', component: ListTokenComponent },
    { path:'list-token-doc/:uid/add-diagnosis/:tempTok.tid', component:AddDiagnosisComponent },
    {path:'list-diagnosis-doc/:uid',component:ListDiagnosisComponent},
    { path:'edit-diagnosis/:diId', component: EditDiagnosisComponent },

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
