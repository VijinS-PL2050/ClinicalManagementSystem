import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{TestReport} from './test-report';
import{ environment } from 'src/environments/environment';
import{Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class TestReportService {
  testReport:TestReport[]=[];
  testReportGen:TestReport=new TestReport();
  formData:TestReport=new TestReport();


  constructor(private httpClient:HttpClient) { }

 //for Listing  particular TestPrescription
 BindListreportById(testId:number)
 {
   this.httpClient.get(environment.apiUrl + "/api/reportpatient/"+testId)
   .toPromise().then(response =>
     this.testReport=response as TestReport[]);
 }

 //Insert TestReport
 insertTestReport(report:TestReport):Observable<any>
 {
  console.log("service repr")
   return this.httpClient.post(environment.apiUrl+"/api/report",report);
 }

 //Get a particular TestReport
 getTestReport(rpId:number): Observable<any>{
  return this.httpClient.get(environment.apiUrl+"/api/report/"+rpId); 
 }
 
  //Update TestReport
  UpdateTestReport(report:TestReport):Observable<any>{
   return this.httpClient.put(environment.apiUrl+"/api/report",report); 
  }

  //get all test reports
  BindListreport(){
    this.httpClient.get(environment.apiUrl+"/api/report")
    .toPromise().then(response=>
      this.testReport=response as TestReport[]);
  } 

  BindListreportgeneration(rpId:number){
   
    this.httpClient.get(environment.apiUrl+"/api/report/"+rpId)
    .toPromise().then(response=>
      this.testReportGen=response as TestReport);
  } 

}
