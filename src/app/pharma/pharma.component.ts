import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/shared/auth.service';

@Component({
  selector: 'app-pharma',
  templateUrl: './pharma.component.html',
  styleUrls: ['./pharma.component.scss']
})
export class PharmaComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  public logout(){
    this.authService.logout();
  }

}
