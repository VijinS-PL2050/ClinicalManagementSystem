import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Diagnosis } from './diagnosis';
import { Dosage } from './dosage';
import { Medicine } from './medicine';
import { Test } from './test';
@Injectable({
  providedIn: 'root'
})
export class DiagnosisService {
  diagnosis: Diagnosis[] = [];
  dosage:Dosage[]=[];
  medicine:Medicine[]=[];
  test:Test[]=[];

  formData: Diagnosis = new Diagnosis;
  constructor(private httpClient: HttpClient) { }

  //adding diagnosis
  addDiagnosis(diag: Diagnosis): Observable<any> {
    console.log(diag.findOut);
    return this.httpClient.post(environment.apiUrl+'/api/diagnosis', diag);
  }
  
  get_Diagnosis_history_pId_bY_passingtId(tId:number){
    console.log(tId);
    this.httpClient.get(environment.apiUrl+"/api/diagnosishistory/"+tId).toPromise().then(getPat=>this.diagnosis=getPat as Diagnosis[] );
  }

  //list token for particular uId
  BindListToken(uId:number){
    console.log(' list-diagnosis service '+uId)
    this.httpClient.get(environment.apiUrl+"/api/diagnosisbyuId/"+uId).toPromise().then(listDia=>this.diagnosis=listDia as Diagnosis[] );
  }

  //list dosage
  BindListDosage(){
    this.httpClient.get(environment.apiUrl+"/api/getAllDosage").toPromise().then(listDos=>this.dosage=listDos as Dosage[] );
  }

  //list MEDICINE
  BindListMedicine(){
    this.httpClient.get(environment.apiUrl+"/api/getAllMedicine").toPromise().then(listMed=>this.medicine=listMed as Medicine[] );
  }

  //list TEST
  BindListTest(){
    this.httpClient.get(environment.apiUrl+"/api/getAllTest").toPromise().then(listTest=>this.test=listTest as Test[] );
  }

  //get diadnosis id
  GetDiIdByTid(tId:number): Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/api/getDiagnosisIdBytId/"+tId);
  }
}
