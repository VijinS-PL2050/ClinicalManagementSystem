import { Injectable } from '@angular/core';
import { Token } from './token';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patient:Patient=new Patient();
  constructor(private httpClient: HttpClient) { }

  getPatientByToken(tId:number){
    console.log(tId);
    this.httpClient.get(environment.apiUrl+"/api/getPatientByTId/"+tId).toPromise().then(getPat=>this.patient=getPat as Patient );

  }
  
}
