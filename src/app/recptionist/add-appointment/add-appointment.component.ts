import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from 'src/app/login/shared/auth.service';
import { AppointmentService } from '../shared/appointment.service';
import { PatientService } from '../shared/patient.service';
import { Patient } from '../shared/patient';
import { DatePipe } from '@angular/common';
import { Doctordetails } from '../shared/doctordetails';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss']
})
export class AddAppointmentComponent implements OnInit {

  //declare variables
  pId: number = 0;
  patient: Patient = new Patient();
  date: string = '';

  constructor(public patientService: PatientService, private route: ActivatedRoute, public appointmentService: AppointmentService, private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  minDateTime: string = '';
  maxDateTime: string = '';
  doctordetailsForAppoint: Doctordetails[] = [];


  ngOnInit(): void {

    this.date = new Date().toISOString().slice(0, 16);

    //  const now: Date --for current date time
    const now = new Date();
    now.setSeconds(0);
    now.setMilliseconds(0);
    this.minDateTime = now.toISOString();
    console.log(this.minDateTime);

    // adding 7 days
    now.setDate(now.getDate() + 7);
    this.maxDateTime = now.toISOString();
    console.log(this.maxDateTime);

    //for drop down
    this.appointmentService.BindDepartments();
    this.appointmentService.BindDoctors();



    //getting the id passed from the browser URL
    this.pId = this.route.snapshot.params['pId'];
    console.log(' get pId' + this.pId);
    this.patientService.getPatient(this.pId).subscribe(data => {
      console.log(data);
      //changing the data format
      var datePipe = new DatePipe("en-UK");
      let formatedReg: any = datePipe.transform(data.registrationDate, 'yyyy-MM-dd');
      let formatedVal: any = datePipe.transform(data.validityDate, 'yyyy-MM-dd');
      data.RegistrationDate = formatedReg;
      data.ValidityDate = formatedVal;
      this.patient = Object.assign({}, data);
      console.log(this.patient);
    }, error => console.log(error))



    window.onpopstate = () => {
      location.reload();
    };
  }

  onSubmit(form: NgForm) {
    let appId = this.appointmentService.formData.aid;
    if (appId == 0 || appId == null) {
      console.log(form.value);
      this.InsertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }
  updateRecord(form: NgForm) {
    console.log("Updating");
  }

  //insert the form value to service
  InsertRecord(form: NgForm) {
    console.log('inserting..');
    console.log(form.value);
    console.log('pid value' + this.pId)
    form.value.pid = this.pId;
    console.log('pid inserting..');
    console.log(form.value);
    this.appointmentService.addAppointment(form.value).subscribe((result => {
      console.log(result);
      alert('Sucessfully addded');
      this.resetForm(form);
      this.toastr.success('Appointment Added Sucessfully');
      this.router.navigate(['login-recp/list-appointment']);
    }))

  }

  //reset form after insert
  resetForm(form: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  // on change event
  onDepartmentChange() {
    const selectedDepartmentId = this.appointmentService.formData.did;
    this.appointmentService.doctordetails = this.appointmentService.doctordetails.filter(doctor => doctor.did == selectedDepartmentId);
  }

  onDepartmentChangeBydId() {
    const selectedDepartmentId = this.appointmentService.formData.did;
    console.log('depat ' + selectedDepartmentId);
    this.appointmentService.getDoctorTodId(selectedDepartmentId).subscribe(resultDoctor => {
      console.log('getting doctor')
      console.log(resultDoctor);
      this.doctordetailsForAppoint = resultDoctor;
      console.log('gggg')
    }, err => console.log(err))
  }


}