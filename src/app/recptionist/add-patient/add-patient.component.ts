import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import{ ToastrService } from 'ngx-toastr';
import { PatientService } from '../shared/patient.service';
import { AuthService } from 'src/app/login/shared/auth.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  constructor(public patientService:PatientService, private authService: AuthService, private router:Router,private toastr:ToastrService ) { }

  ngOnInit(): void {
    window.onpopstate=()=>{
      location.reload();
    };
  }

  onSubmit(form: NgForm) {
    let addId = this.patientService.formData.pid;
    if (addId == 0 || addId == null) {
      console.log(form.value);
      this.InsertRecord(form);
    }else{
      this.updateRecord(form);
    }
  }
  updateRecord(form: NgForm) {
    console.log("Updating");
    this.patientService.updatePatient(form.value).subscribe((result=>{
      console.log(result);
      this.resetForm(form);
      //alert ("Sucessfully updated");
      this.router.navigate(['patient-list']);

    }))
  }

  //reset form after insert
  resetForm(form: NgForm) {
    if(form!=null){
      form.resetForm();
    }
  }

  //insert
  InsertRecord(form: NgForm) {
   console.log('inserting..');
   console.log(form.value);
   this.patientService.addPatient(form.value).subscribe((result=>{
    console.log(result);
    alert('Sucessfully addded');
    this.resetForm(form);
    this.toastr.success('Patient Added Sucessfully');
    this.router.navigate(['patient-list']);
   }))
  }

}
