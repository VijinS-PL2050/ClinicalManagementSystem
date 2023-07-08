import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashLabComponent } from './dash-lab/dash-lab.component';
import { LabComponent } from './lab.component';

const routes: Routes = [
  {path:'', 
  component:LabComponent,
  children: [
    { path: 'list-patient', component: DashLabComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabRoutingModule { }
