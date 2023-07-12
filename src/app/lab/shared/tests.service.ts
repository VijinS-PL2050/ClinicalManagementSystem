import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Tests} from './tests';
import{ environment } from 'src/environments/environment';
import{Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TestsService {
  tests:Tests[]=[];
  formData:Tests=new Tests();

  constructor(private httpClient:HttpClient) { }

  //for Listing Tests
  BindListLabs()
  {
    this.httpClient.get(environment.apiUrl + "/api/test")
    .toPromise().then(response =>
      this.tests=response as Tests[]);
  }

  //Insert Tests
  insertTests(lab:Tests):Observable<any>
  {
    return this.httpClient.post(environment.apiUrl+"/api/test",lab);
  }

  //Get a particular Tests
  getTests(ttId:number): Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/api/test/"+ttId); 
   }

   //Update Tests
   UpdateTests(lab:Tests):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"/api/test",lab); 
   }

   // Delete Tests
    deleteTests(ttId: number) {

      console.log(ttId)

      return this.httpClient.delete(environment.apiUrl+"/api/test/"+ttId);
}
}
