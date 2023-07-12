import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { TokenGenerator } from './token-generator';

@Injectable({
  providedIn: 'root'
})
export class TokenGeneratorService {
  tokenGenerator: TokenGenerator[] = [];

  constructor(private httpClient: HttpClient) { }

  //list token
  BindListToken(){
    this.httpClient.get(environment.apiUrl+"/api/tokens").toPromise().then(response=>this.tokenGenerator=response as TokenGenerator[]);
  }
}
