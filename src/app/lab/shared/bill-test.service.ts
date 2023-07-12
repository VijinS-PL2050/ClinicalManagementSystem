import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{BillTest} from './bill-test';
import{ environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BillTestService {

  testReportBill:BillTest[]=[];
  testbill:BillTest=new BillTest();
  formData:BillTest=new BillTest();


  constructor(private httpClient:HttpClient) { }


  BindListbill(rpId:number){
   
    this.httpClient.get(environment.apiUrl+"/api/bills/"+rpId)
    .toPromise().then(response=>
     this.testbill=response as BillTest);
      
  } 

}
