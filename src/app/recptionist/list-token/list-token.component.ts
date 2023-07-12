import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenGeneratorService } from '../shared/token-generator.service';

@Component({
  selector: 'app-list-token',
  templateUrl: './list-token.component.html',
  styleUrls: ['./list-token.component.scss']
})
export class ListTokenComponent implements OnInit {

  filter:string='';
  page:number=1;
  constructor(public tokenGeneratorService:TokenGeneratorService, private router:Router) { }

  ngOnInit(): void {
    this.tokenGeneratorService.BindListToken();
  }

}
