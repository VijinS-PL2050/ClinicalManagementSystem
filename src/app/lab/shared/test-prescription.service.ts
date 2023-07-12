import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{TestPrescription} from './test-prescription';
import{ environment } from 'src/environments/environment';
import{Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TestPrescriptionService {
  testPres:TestPrescription[]=[];
    testPrescription:TestPrescription[]=[];
    formData:TestPrescription=new TestPrescription();

  constructor(private httpClient:HttpClient) { }

  //for Listing TestPrescription
  BindListPres()
  {
    this.httpClient.get(environment.apiUrl + "/api/testpres")
    .toPromise().then(response =>
      this.testPres=response as TestPrescription[]);
  }

  //for Listing  particular TestPrescription
  BindListPresById(tpId:number)
  {
    this.httpClient.get(environment.apiUrl + "/api/testpres/"+tpId)
    .toPromise().then(response =>
      this.testPres=response as TestPrescription[]);
  }


}
