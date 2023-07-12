import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../shared/token.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-token',
  templateUrl: './list-token.component.html',
  styleUrls: ['./list-token.component.scss']
})
export class ListTokenComponent implements OnInit {

  temp:string='';
  uId: number=0;
  filter:string='';
  page:number=1;
  constructor(public tokenService:TokenService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.uId=this.route.snapshot.params['uid'];
    console.log(this.uId);
    this.tokenService.BindListToken(this.uId);
  }
  addDiagnosis(tId:number){
    console.log('add daigonsis '+tId);
   this.router.navigate(['add-diagnosis',this.uId,tId]);

  }
  deleteToken(tId:number){
    console.log('deleting ... '+tId);

  }

}
