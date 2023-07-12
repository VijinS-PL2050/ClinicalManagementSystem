export class Diagnosis {

    diId: number = 0;
    diagnosisId: string = '';
    findOut: string = '';
    notes: string = '';
    diagnosisDate: Date = new Date;
    isActive: boolean = true;
    tokenGenarator!: {
        appointment: {
            doctorDepartment: {
                departmentName: string;
            };
            doctorDetails: {
                doctorName: string;
            };
             patientRecords: {
                    mrNo: string;
                    patientName: string;
                }
        };
        patientRecords: {
            mrNo: string;
            patientName: string;
            patientAge: number;
            patientGender: string;
            patientBlood: string;
            pid: number;
        };
        pid: number;
    };
    tid: number = 0;



}
