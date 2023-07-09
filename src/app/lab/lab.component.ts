import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/shared/auth.service';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss']
})
export class LabComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  public logout(){
    this.authService.logout();
  }

}
