import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/shared/auth.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  public logout(){
    this.authService.logout();
  }

}
