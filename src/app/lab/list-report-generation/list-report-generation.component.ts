import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import{ToastrService} from 'ngx-toastr';
import { TestReportService } from '../shared/test-report.service';

@Component({
  selector: 'app-list-report-generation',
  templateUrl: './list-report-generation.component.html',
  styleUrls: ['./list-report-generation.component.scss']
})
export class ListReportGenerationComponent implements OnInit {
  
  rpId:number=0;
  constructor(public testReportService:TestReportService,private router:Router,private route:ActivatedRoute,private toastr:ToastrService) { }

  ngOnInit(): void {

    this.rpId=this.route.snapshot.params['rpId']
    this.testReportService.BindListreportgeneration(this.rpId);

  }

  ReportGenerations(rpId:number){

    this.router.navigate(['login-lab/app-list-bill',rpId]);
    this.toastr.success("  Bill Generating.....");

  }


}
