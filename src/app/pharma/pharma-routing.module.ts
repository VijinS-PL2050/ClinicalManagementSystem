import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashPharmaComponent } from './dash-pharma/dash-pharma.component';
import { PharmaComponent } from './pharma.component';

const routes: Routes = [
  {path:'', 
  component:PharmaComponent,
  children: [
    { path: 'list-patient', component: DashPharmaComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmaRoutingModule { }
