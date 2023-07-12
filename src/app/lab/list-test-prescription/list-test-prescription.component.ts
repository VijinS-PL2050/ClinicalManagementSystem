import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import{ToastrService} from 'ngx-toastr';
import { TestPrescriptionService } from '../shared/test-prescription.service';

@Component({
  selector: 'app-list-test-prescription',
  templateUrl: './list-test-prescription.component.html',
  styleUrls: ['./list-test-prescription.component.scss']
})
export class ListTestPrescriptionComponent implements OnInit {
  page:number=1;
  filter:string='';

  constructor(public testPrescriptionService:TestPrescriptionService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.testPrescriptionService.BindListPres();
  }

  AddResult(tpId:number){

    this.router.navigate(['login-lab/app-list-test-report',tpId]);
   

  }
  updateLabtechnician(tpId:number){
    console.log("updating");
    this.router.navigate(['login-lab/app-list-test-report',tpId]);

    //this.router.navigate(['app-edit-test-report',tpId]);
  }

}
