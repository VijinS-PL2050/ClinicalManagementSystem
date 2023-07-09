import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patient: Patient[] = [];
  formData: Patient=new Patient();
  constructor(private httpClient: HttpClient) { }

  //listing patient
  BlindListPatients(){
    this.httpClient.get(environment.apiUrl+"/api/patients").toPromise().then(response=>this.patient=response as Patient[]);
  }

  //add patient
  addPatient(pat: Patient):Observable<any>{
    console.log(pat.patientName);
    return this.httpClient.post(environment.apiUrl+"/api/patients",pat);
  }

  //get a particular patient
  getPatient(pId:number):Observable<any>{
    console.log(pId);
    return this.httpClient.get(environment.apiUrl+"/api/patients/"+pId);

  }

  //update Patient
  updatePatient(pat:Patient):Observable<any>{
    console.log("update");
    return this.httpClient.put(environment.apiUrl+"/api/patients",pat);
  }

  //delete patient
  deletePatient(pId:number):Observable<any>{
    console.log("delete");
    return this.httpClient.delete(environment.apiUrl+"/api/patients/"+pId);
  }
}
