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
  testPrescriptionForCur:TestPrescription[]=[];
  formData:TestPrescription=new TestPrescription();

  constructor(private httpClient: HttpClient) { 

  }
  //add test
  addTest(test: TestPrescription): Observable<any> {
    console.log('jhgfcvhj');
    console.log(test.tpId);
    return this.httpClient.post(environment.apiUrl+'/api/test', test);
  }

   //list current testpresciption
   get_Testprescription_bY_passingtdiId(diId:number){
    console.log(diId);
    this.httpClient.get(environment.apiUrl+"/api/test/"+diId).toPromise().then(getTestPres=>this.testPrescriptionForCur=getTestPres as TestPrescription[] );
  }
  
}
