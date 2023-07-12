import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import{ToastrService} from 'ngx-toastr';
import { BillTestService } from '../shared/bill-test.service';

@Component({
  selector: 'app-list-bill',
  templateUrl: './list-bill.component.html',
  styleUrls: ['./list-bill.component.scss']
})
export class ListBillComponent implements OnInit {
  rpId:number=0;

  constructor(public billTestService:BillTestService,private router:Router,private route:ActivatedRoute,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.rpId=this.route.snapshot.params['rpId']
    this.billTestService.BindListbill(this.rpId);

  }

  GenerationBill(rpId:number){
    this.router.navigate(['login-lab/app-list-bill',rpId]);
    this.toastr.success(" Printing.....");
  }

}
