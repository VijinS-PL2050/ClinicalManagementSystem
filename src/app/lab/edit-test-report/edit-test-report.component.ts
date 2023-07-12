import { Component, OnInit } from '@angular/core';

import{ActivatedRoute} from '@angular/router';
import { DatePipe } from '@angular/common';
import { TestReport } from '../shared/test-report';
import { TestReportService } from '../shared/test-report.service';


@Component({
  selector: 'app-edit-test-report',
  templateUrl: './edit-test-report.component.html',
  styleUrls: ['./edit-test-report.component.scss']
})
export class EditTestReportComponent implements OnInit {

//declare variables
rpId:number=0;
testReport:TestReport=new TestReport();


  constructor(private route:ActivatedRoute,private testReportService:TestReportService) { }

  ngOnInit(): void {

    //getting the id passed from the browser URL
    this.rpId=this.route.snapshot.params['rpId'];
    this.testReportService.getTestReport(this.rpId)
    .subscribe(data=>{
      console.log(data)
      this.testReport=data;

      //changing the Date format
      var datePipe=new DatePipe("en-UK");
      let formatedyear:any=datePipe.transform(data.reportDate,'yyyy-MM-dd')
      data.reportDate=formatedyear;

      this.testReportService.formData=Object.assign({},data)

    },error=>console.log(error));
  }

      
    

}
