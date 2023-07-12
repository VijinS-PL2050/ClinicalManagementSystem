import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',loadChildren:()=> import('./login/login.module').then(L=>L.LoginModule)},
  {path:'login-recp',loadChildren:()=>import('./recptionist/recptionist.module').then(R=>R.RecptionistModule)},
  {path:'login-doc/:uid',loadChildren:()=>import('./doctor/doctor.module').then(R=>R.DoctorModule)},
  {path:'login-lab',loadChildren:()=>import('./lab/lab.module').then(R=>R.LabModule)},
  {path:'login-pharma',loadChildren:()=>import('./pharma/pharma.module').then(R=>R.PharmaModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
