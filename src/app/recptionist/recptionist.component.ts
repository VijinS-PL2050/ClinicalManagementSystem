import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/shared/auth.service';

@Component({
  selector: 'app-recptionist',
  templateUrl: './recptionist.component.html',
  styleUrls: ['./recptionist.component.scss']
})
export class RecptionistComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  public logout(){
    this.authService.logout();
  }

}
