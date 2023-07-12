import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../shared/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-appintment',
  templateUrl: './list-appintment.component.html',
  styleUrls: ['./list-appintment.component.scss']
})
export class ListAppintmentComponent implements OnInit {

  filter:string='';
  page:number=1;
  constructor(public appointmentService:AppointmentService, private router:Router) { }

  ngOnInit(): void {
    this.appointmentService.BlindListAppointments();
  }
  deletePatient(aId:number){
    if(confirm('Are you sure delete this appointment ?')){
      this.appointmentService.deleteAppointment(aId).subscribe(response=>{
        this.appointmentService.BlindListAppointments();
        alert("Deleted successfully..");
      },err=>{console.log(err)});
    }
  }

}
