import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/shared/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  uid:number=0;
  constructor(private authService: AuthService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(' doctor com ts ');
    this.uid=this.route.snapshot.params['uid'];
    console.log(' doctor com ts '+this.uid);

  }
  public logout(){
    this.authService.logout();
  }

}
