import { Component, OnInit } from '@angular/core';
import { Patient } from '../shared/patient';
import{ DatePipe} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../shared/patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})
export class EditPatientComponent implements OnInit {

  //declare variables
  pId: number=0;
  patient:Patient=new Patient();

  constructor(private route:ActivatedRoute, private patientService:PatientService) { }

  ngOnInit(): void {
    //getting the id passed from the browser URL
    this.pId=this.route.snapshot.params['pId'];
    this.patientService.getPatient(this.pId).subscribe(data=>{
      console.log(data);
      this.patient=data;
      //changing the data format
      var datePipe=new DatePipe("en-UK");
      let formatedReg:any = datePipe.transform(data.registrationDate,'yyyy-MM-dd');
      let formatedVal:any = datePipe.transform(data.validityDate,'yyyy-MM-dd');
      data.RegistrationDate=formatedReg;
      data.ValidityDate=formatedVal;
      this.patientService.formData=Object.assign({},data);
    },error=>console.log(error))
  }

}
