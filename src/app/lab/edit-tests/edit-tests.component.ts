import { Component, OnInit } from '@angular/core';

import{ActivatedRoute} from '@angular/router';
import { TestsService } from '../shared/tests.service';
import { Tests } from '../shared/tests';




@Component({
  selector: 'app-edit-tests',
  templateUrl: './edit-tests.component.html',
  styleUrls: ['./edit-tests.component.scss']
})
export class EditTestsComponent implements OnInit {

  //declare variables
ttId:number=0;
tests:Tests=new Tests();

  constructor(private route:ActivatedRoute,private testsService:TestsService) { }

  ngOnInit(): void {

    //getting the id passed from the browser URL
    this.ttId=this.route.snapshot.params['ttId'];
    this.testsService.getTests(this.ttId)
    .subscribe(data=>{
      console.log(data)
      this.tests=data;

      this.testsService.formData=Object.assign({},data)

    },error=>console.log(error));
  }

      
    

}
