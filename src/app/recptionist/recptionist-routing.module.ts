import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecptionistComponent } from './recptionist.component';
import { DashRecpComponent } from './dash-recp/dash-recp.component';

const routes: Routes = [
  {path:'', 
  component:RecptionistComponent,
  children: [
    { path: 'list-patient', component: DashRecpComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecptionistRoutingModule { }
