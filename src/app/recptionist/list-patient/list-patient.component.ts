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
  updatePatient(patId:number){
    console.log(patId);
    this.router.navigate(['edit-patient',patId]);
  }
  deletePatient(patId:number){
    if(confirm('Are you sure delete this patient record ?')){
      this.patientService.deletePatient(patId).subscribe(response=>{
        this.patientService.BlindListPatients();
        alert("Deleted successfully..");
      },err=>{console.log(err)});
    }
  }

  
  bookAppointment(patId:number){
    console.log('appointment')
  }

}
