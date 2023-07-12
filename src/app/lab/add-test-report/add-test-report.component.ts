import { Component, OnInit } from '@angular/core';
import{ToastrService} from 'ngx-toastr';
import{NgForm} from '@angular/forms';
import{Router} from '@angular/router';
import { TestReportService } from '../shared/test-report.service';

@Component({
  selector: 'app-add-test-report',
  templateUrl: './add-test-report.component.html',
  styleUrls: ['./add-test-report.component.scss']
})
export class AddTestReportComponent implements OnInit {

  constructor(public testReportService:TestReportService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    window.onpopstate= () =>{
      location.reload();
    };
  }

  onSubmit(form:NgForm){
    let addId=this.testReportService.formData.rpId;
    if(addId==0 || addId==null){
      console.log(form.value);
      this.InsertRecord(form);
    }

    else{
      this.updateRecord(form);
    }

  }

//Insert
InsertRecord(form:NgForm)
{
  console.log("Inserting");
  this.testReportService.insertTestReport(form.value).subscribe(
    (result)=>{
      console.log(result);
      this.resetForm(form);
      this.toastr.success(" Report Added Successfully");
      this.router.navigate(['login-lab/lab-list']);
     
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
        this.router.navigate(['login-lab/lab-list']);

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
