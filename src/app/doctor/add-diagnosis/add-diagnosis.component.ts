import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/login/shared/auth.service';
import { DiagnosisService } from '../shared/diagnosis.service';
import { PatientService } from '../shared/patient.service';
import { MedicinePrescriptionService } from '../shared/medicine-prescription.service';
import { TestReportService } from '../shared/test-report.service';
import { TestPrescriptionService } from '../shared/test-prescription.service';
import { MedicinePrescription } from '../shared/medicine-prescription';

@Component({
  selector: 'app-add-diagnosis',
  templateUrl: './add-diagnosis.component.html',
  styleUrls: ['./add-diagnosis.component.scss']
})
export class AddDiagnosisComponent implements OnInit {

  uid: number = 0;
  tId: number = 0;
  pId: number = 0;
  diId: number = 0;
  showDetails: boolean = false;
  showDetailsMed: boolean = false;
  showDetailsTest: boolean = false;
  showDetailsRep: boolean = false;
  showFormMed: boolean = false;
  showFormTest: boolean = false;

  medicinePrescriptionForCur: MedicinePrescription[] = [];

  constructor(public patientService: PatientService,
    public diagnosisService: DiagnosisService,
    public medicinePrescriptionService: MedicinePrescriptionService,
    public testPrescriptionService: TestPrescriptionService,
    public testreportservice: TestReportService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.uid = this.route.snapshot.params['uid'];
    this.tId = this.route.snapshot.params['tempTok.tid'];
    this.patientService.getPatientByToken(this.tId);
    this.diagnosisService.get_Diagnosis_history_pId_bY_passingtId(this.tId);
    this.medicinePrescriptionService.get_Medicine_history_pId_bY_passingtId(this.tId);
    this.testreportservice.get_Test_Report_bY_passingpId(this.tId);
    this.diagnosisService.BindListDosage();
    this.diagnosisService.BindListMedicine();
    this.diagnosisService.BindListTest();
    window.onpopstate = () => {
      location.reload();
    };
  }

  //insert diagnosis
  InsertRecord(form: NgForm) {
    console.log('inserting..');
    form.value.tid = this.tId;
    console.log(form.value);
    this.diagnosisService.addDiagnosis(form.value).subscribe((result => {
      console.log(result);
      alert('Sucessfully addded');
      this.resetForm(form);
      this.toastr.success('Diagnosis Added Sucessfully');
      //this.router.navigate(['list-token-doc', this.uid]);
    }))
  }
  resetForm(form: NgForm) {
    if (form != null) {
      form.resetForm();
    }

  }
  onSubmit(form: NgForm) {
    let addId = this.diagnosisService.formData.diId;
    if (addId == 0 || addId == null) {
      console.log(form.value);
      this.InsertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }
  updateRecord(form: NgForm) {
    console.log('update');
  }

  hisDiagnosis(tId: number) {
    console.log('his ');
    this.router.navigate(['his-diagnosis'], { relativeTo: this.route });

  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
    this.showDetailsMed = false;
    this.showDetailsTest = false;
  }

  toggleDetailsMed(): void {
    this.showDetails = false;
    this.showDetailsMed = !this.showDetailsMed;
    this.showDetailsTest = false;
  }

  toggleDetailsTest(): void {
    this.showDetails = false;
    this.showDetailsMed = false;
    this.showDetailsTest = !this.showDetailsTest;
  }
  toggleFormMed(): void {
    this.showFormMed = !this.showFormMed;
  }
  toggleFormTest(): void {
    this.showFormTest = !this.showFormTest;
  }


  onSubmitForMed(form: NgForm) {
    let addId = this.medicinePrescriptionService.formData.mpId;
    if (addId == 0 || addId == null) {
      console.log(form.value);
      this.diagnosisService.GetDiIdByTid(this.tId).subscribe((val => {
        console.log(' val iii ' + val);
        this.diId = Number(val);
        console.log(' n ' + this.diId);
        console.log(' i m in')
        this.InsertRecordForMed(form);
      }));

    }
  }
  InsertRecordForMed(form: NgForm) {
    console.log('inserting medicine..');
    console.log(form.value);
    form.value.diId = this.diId;
    console.log('tid inserting..');
    console.log(form.value);
    this.medicinePrescriptionService.addMedicine(form.value).subscribe((result => {
      console.log(result);
      alert('Sucessfully addded');
      this.FetchCurrentMed(this.diId);
      this.resetForm(form);
      this.toastr.success('Diagnosis Added Sucessfully');
    }))
  }
  FetchCurrentMed(diId: number) {
    console.log('fetching ....');
    this.medicinePrescriptionService.get_Medicineprescription_bY_passingtdiId(this.diId).subscribe((curListMed => {
      console.log('fetching currentt medicine');
      console.log(curListMed);
      this.medicinePrescriptionForCur = curListMed;
    }));
  }

  onSubmitForTest(form: NgForm) {
    let addId = this.testPrescriptionService.formData.tpId;
    if (addId == 0 || addId == null) {
      console.log(form.value);
      this.diagnosisService.GetDiIdByTid(this.tId).subscribe((val => {
        console.log(' val iii ' + val);
        this.diId = Number(val);
        console.log(' n ' + this.diId);
        console.log(' i m in')
        this.InsertRecordForTest(form);
      }));

    }
  }
  InsertRecordForTest(form: NgForm) {
    console.log('inserting test..');
    console.log(form.value);
    form.value.diId = this.diId;
    console.log('tid inserting..');
    console.log(form.value);
    this.testPrescriptionService.addTest(form.value).subscribe((result => {
      console.log(result);
      alert('Sucessfully addded');
      this.resetForm(form);
      this.toastr.success('Diagnosis Added Sucessfully');
      this.router.navigate(['list-token-doc', this.uid]);
    }))
  }

  deleteMedicine(mpId: number) {
    if (confirm("Are you sure youu want to delete medicine")) {
        this.medicinePrescriptionService.deleteMedicine(mpId).subscribe(res => {
          alert("Deleted successfully..");
          this.FetchCurrentMed(this.diId);
        })
      }
    }
}
