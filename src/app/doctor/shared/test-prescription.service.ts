import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { MedicinePrescription } from './medicine-prescription';
import { TestPrescription } from './test-prescription';
@Injectable({
  providedIn: 'root'
})
export class TestPrescriptionService {
  testPrescription:TestPrescription[]=[];
  formData:TestPrescription=new TestPrescription();
tests: any;

  constructor(private httpClient: HttpClient) { 

  }
  //add test
  addTest(test: TestPrescription): Observable<any> {
    console.log('jhgfcvhj');
    console.log(test.tpId);
    return this.httpClient.post(environment.apiUrl+'/api/test', test);
  }

   //list current testpresciption
   get_Testprescription_bY_passingtdiId(diId:number): Observable<any>{
    console.log(diId);
    return this.httpClient.get(environment.apiUrl+"/api/test/"+diId);
  }
  //delete test
  deleteTest(tpId:number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl+"/api/deletetest/"+tpId);
  }
  
}
