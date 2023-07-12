import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import{ToastrService} from 'ngx-toastr';
import { TestReportService } from '../shared/test-report.service';


@Component({
  selector: 'app-list-report-management',
  templateUrl: './list-report-management.component.html',
  styleUrls: ['./list-report-management.component.scss']
})
export class ListReportManagementComponent implements OnInit {

  page:number=1;
  filter:string='';
  rpId:number=0;
  constructor(public testReportService:TestReportService,private router:Router,private route:ActivatedRoute,private toastr:ToastrService) { }

  ngOnInit(): void {

    //this.rpId=this.route.snapshot.params['rpId'];
    //this.testReportService.getTestReport(this.rpId);
    this.testReportService.BindListreport();


    
  }
  ReportGenerate(rpId:number){

    this.router.navigate(['login-lab/app-list-report-generation',rpId]);
    
  }


  }


