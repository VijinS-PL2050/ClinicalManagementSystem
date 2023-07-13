import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../shared/token.service';
import { ActivatedRoute } from '@angular/router';
import { DiagnosisService } from '../shared/diagnosis.service';

@Component({
  selector: 'app-list-diagnosis',
  templateUrl: './list-diagnosis.component.html',
  styleUrls: ['./list-diagnosis.component.scss']
})
export class ListDiagnosisComponent implements OnInit {
  temp:string='';
  uId: number=0;
  filter:string='';
  page:number=1;
  constructor(public diagnosisService:DiagnosisService, private router:Router, private route:ActivatedRoute) { }

 ngOnInit(): void {
  console.log(' list daigonsis')
    this.uId=this.route.snapshot.params['uid'];
    console.log(this.uId);
    this.diagnosisService.BindListToken(this.uId);
  }
  updateDiagnosis(diId:number){
    console.log('deleting ... '+diId);
    this.router.navigate(['login-doc/:uid/edit-diagnosis',diId])

  }
}
