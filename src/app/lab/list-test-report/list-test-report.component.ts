import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import{NgForm} from '@angular/forms';
import{ToastrService} from 'ngx-toastr';
import { TestReportService } from '../shared/test-report.service';


@Component({
  selector: 'app-list-test-report',
  templateUrl: './list-test-report.component.html',
  styleUrls: ['./list-test-report.component.scss']
})
export class ListTestReportComponent implements OnInit {
  page:number=1;
  filter:string='';
  tpId:number=0;


constructor(public testReportService:TestReportService,private router:Router,private route:ActivatedRoute,private toastr:ToastrService) { }

  ngOnInit(): void {

    this.tpId=this.route.snapshot.params['tpId'];
    this.testReportService.BindListreportById(this.tpId);

  }

 

  onSubmit(form:NgForm){
    console.log("report add");
    let addId=this.testReportService.formData.rpId;
    if(addId==0 || addId==null){
      console.log(form.value);
      this.InsertRecord(form);
      this.router.navigate(['login-lab/app-list-test-prescription'])
    }

    else{
      this.updateRecord(form);
    }

  }

//Insert
InsertRecord(form:NgForm)
{
  console.log("Inserting");
  form.value.tpId=this.tpId;

  this.testReportService.insertTestReport(form.value).subscribe(
    (result)=>{
      console.log(result);
      this.resetForm(form);
      this.toastr.success("Added Successfully");
      this.router.navigate(['lab-list']);
     
      // alert("Successfully added");
    })
  
}


updateRecord(form:NgForm){
    console.log("updating");
    this.testReportService.UpdateTestReport(form.value).subscribe(
      (result=>{
        console.log(result);
        this.resetForm(form);
        alert ("Successfully Updated")
        this.router.navigate(['lab-list']);

      })
    )
  }

  

  //Reset Form
  resetForm(form:NgForm){
    if(form!=null)
    {
      form.resetForm();
    }
  }

}
