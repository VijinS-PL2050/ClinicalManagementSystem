import { Component, OnInit } from '@angular/core';
import{ToastrService} from 'ngx-toastr';
import{NgForm} from '@angular/forms';
import{Router} from '@angular/router';
import { TestsService } from '../shared/tests.service';

@Component({
  selector: 'app-add-tests',
  templateUrl: './add-tests.component.html',
  styleUrls: ['./add-tests.component.scss']
})
export class AddTestsComponent implements OnInit {

  constructor(public testsService:TestsService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    window.onpopstate= () =>{
      location.reload();
    };
  }

  onSubmit(form:NgForm){
    let addId=this.testsService.formData.ttId;
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
  this.testsService.insertTests(form.value).subscribe(
    (result)=>{
      console.log(result);
      this.resetForm(form);
      this.toastr.success("Added Successfully");
      this.router.navigate(['login-lab/lab-list']);
     
      // alert("Successfully added");
    })
  
}


updateRecord(form:NgForm){
    console.log("updating");
    this.testsService.UpdateTests(form.value).subscribe(
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
