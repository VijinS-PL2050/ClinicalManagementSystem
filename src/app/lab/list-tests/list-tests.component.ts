import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TestsService } from '../shared/tests.service';

@Component({
  selector: 'app-list-tests',
  templateUrl: './list-tests.component.html',
  styleUrls: ['./list-tests.component.scss']
})
export class ListTestsComponent implements OnInit {
  page:number=1;
  filter:string='';


  constructor(public testsService:TestsService,private router:Router)  { }

  ngOnInit(): void {
    this.testsService.BindListLabs();
  }

  //Update Tests --- passing the Id through url

  updateLabtechnician(ttId:number){
        console.log(ttId);
     this.router.navigate(['login-lab/edittest',ttId]);
  }

  DeleteLabtechnician(ttId:number){
    if(confirm('Are you sure to Delete this record?')){
      this.testsService.deleteTests(ttId)
      .subscribe(response=>{
        this.testsService.BindListLabs();
        alert("Deleted Successfully")
      },
      err=>{
        console.log(err)
      });
    }
   
  }

}
