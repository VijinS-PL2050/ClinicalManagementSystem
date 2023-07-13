import { Component, OnInit } from '@angular/core';
import { Patient } from '../shared/patient';
import{ DatePipe} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../shared/patient.service';
import { Diagnosis } from '../shared/diagnosis';
import { DiagnosisService } from '../shared/diagnosis.service';
@Component({
  selector: 'app-edit-diagnosis',
  templateUrl: './edit-diagnosis.component.html',
  styleUrls: ['./edit-diagnosis.component.scss']
})
export class EditDiagnosisComponent implements OnInit {

   //declare variables
   diId: number=0;
   editdiagnosis:Diagnosis=new Diagnosis();
  constructor(private route:ActivatedRoute, private diagnosisService:DiagnosisService) { }

  ngOnInit(): void {
    //getting the id passed from the browser URL
    this.diId=this.route.snapshot.params['diId'];
    console.log(this.diId);
    this.diagnosisService.getDiagnosis(this.diId).subscribe(diag=>{
      this.editdiagnosis=diag;
       //changing the data format
       var datePipe=new DatePipe("en-UK");
       let formatedReg:any = datePipe.transform(diag.diagnosisDate,'yyyy-MM-dd');
       diag.diagnosisDate=formatedReg;
       this.diagnosisService.formData=Object.assign({},diag);
     },error=>console.log(error))
   
  }

}
