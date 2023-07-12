import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../shared/patient.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent implements OnInit {

  filter:string='';
  page:number=1;
  constructor(public patientService:PatientService, private router:Router) { }

  ngOnInit(): void {
    this.patientService.BlindListPatients();
  }

  //update patient details -- passing the id through
  updatePatient(pId:number){
    console.log(pId);
    this.router.navigate(['login-recp/edit-patient',pId]);
  }
  deletePatient(pId:number){
    if(confirm('Are you sure delete this patient record ?')){
      this.patientService.deletePatient(pId).subscribe(response=>{
        this.patientService.BlindListPatients();
        alert("Deleted successfully..");
      },err=>{console.log(err)});
    }
  }
  bookAppointment(pId:number){
    console.log('appointment form')
    this.router.navigate(['login-recp/add-appointment',pId]);
  }

}
