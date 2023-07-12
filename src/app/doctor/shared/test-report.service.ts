import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { TestReport } from './test-report';

@Injectable({
  providedIn: 'root'
})
export class TestReportService {
  testReport:TestReport[]=[];
  formData:TestReport=new TestReport();
  constructor(private httpClient: HttpClient) { }
   //list medicine
   get_Test_Report_bY_passingpId(tId:number){
    console.log(tId);
    this.httpClient.get(environment.apiUrl+"/api/histTestReport/"+tId).toPromise().then(getRep=>this.testReport=getRep as TestReport[] );
  }
  
}
