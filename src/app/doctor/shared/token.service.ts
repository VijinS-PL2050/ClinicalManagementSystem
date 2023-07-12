import { Injectable } from '@angular/core';
import { Token } from './token';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  token: Token[] = [];


  constructor(private httpClient: HttpClient) { }

  //list token for particular doctor
  BindListToken(uId:number){
    console.log(' token service '+uId)
    this.httpClient.get(environment.apiUrl+"/api/token/"+uId).toPromise().then(listTok=>this.token=listTok as Token[] );
  }

}
