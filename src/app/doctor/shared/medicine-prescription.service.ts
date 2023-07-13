import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { MedicinePrescription } from './medicine-prescription';

@Injectable({
  providedIn: 'root'
})
export class MedicinePrescriptionService {
  get_Testprescription_bY_passingtdiId(diId: number) {
    throw new Error('Method not implemented.');
  }
  medicinePrescription: MedicinePrescription[] = [];
  formData: MedicinePrescription = new MedicinePrescription();

  constructor(private httpClient: HttpClient) { }

  //list medicine
  get_Medicine_history_pId_bY_passingtId(tId: number) {
    console.log(tId);
    this.httpClient.get(environment.apiUrl + "/api/histMedicine/" + tId).toPromise().then(getMed => this.medicinePrescription = getMed as MedicinePrescription[]);
  }

  //list current medicinepresciption
  get_Medicineprescription_bY_passingtdiId(diId: number): Observable<any> {
    console.log(diId);
    return this.httpClient.get(environment.apiUrl + "/api/medicine/" + diId);
  }

  //add medicine
  addMedicine(med: MedicinePrescription): Observable<any> {
    console.log(med.dosage);
    return this.httpClient.post(environment.apiUrl + '/api/medicine', med);
  }

  //delete medicine
  deleteMedicine(mpId:number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl+"/api/deletemedicine/"+mpId);
  }
  
}
