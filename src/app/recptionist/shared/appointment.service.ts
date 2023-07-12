import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Appointment } from './appointment';
import { Department } from './department';
import { Doctordetails } from './doctordetails';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appointment:Appointment[]=[];
  department:Department[]=[];
  doctordetails:Doctordetails[]=[];
  formData:Appointment=new Appointment();

  constructor(private httpClient: HttpClient) { }

  //list appointment
  BlindListAppointments(){
    this.httpClient.get(environment.apiUrl+'/api/appointment').toPromise().then(response=>this.appointment=response as Appointment[]);
  }

  //add appointment
  addAppointment(appoint:Appointment):Observable<any>{
    console.log(appoint.appointmentDateTime);
    return this.httpClient.post(environment.apiUrl+"/api/appointment",appoint);
  }

  //update appointment
  updateAppointment(appoint:Appointment):Observable<any>{
    console.log(appoint.appointmentDateTime);
    return this.httpClient.put(environment.apiUrl+"/api/appointment",appoint);
  }

  //delete appointment
  deleteAppointment(aId:number):Observable<any>{
    console.log("delete");
    return this.httpClient.delete(environment.apiUrl+"/api/appointment/"+aId);
  }

  //get particular appointment
  getAppointment(aId:number):Observable<any>{
    console.log("delete");
    return this.httpClient.get(environment.apiUrl+"/api/appointment/"+aId);
  }

  //get all department
  BindDepartments(){
    this.httpClient.get(environment.apiUrl+'/api/departmentForAppointment').toPromise().then(response=>this.department=response as Department[]);
  }

  //get all doctor
  BindDoctors(){
    this.httpClient.get(environment.apiUrl+'/api/doctorForAppointment').toPromise().then(response=>this.doctordetails=response as Doctordetails[]);
  }

  //get doctor by dId
  getDoctorTodId(dId:number):Observable<any>{
    console.log("getting doctor corresponding department");
    return this.httpClient.get(environment.apiUrl+"/api/doctorForAppointment/"+dId);
  }

}
