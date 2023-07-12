export class Appointment {
    bookingNo: string = '';
    appointmentDateTime: Date = new Date;
    appointmentValidity: Date = new Date;
    isActive: boolean = true;
    doctorDepartment!: {
        departmentName: string;
        did: number;
    };
    doId: number = 0;
    doctorDetails!: {
        doId: 501;
        doctorName: string;
        consultationFee: 500.0;
        noOfToken: number;
        doctorDepartment: {
            departmentName: string;
            did: number;
        };
        did: number;
        uid: number;
    };
    patientRecords!: {
        mrNo: string;
        patientName: string;
        patientPhone: string;
        patientAddress: string;
        patientAge: number;
        patientGender: string;
        patientBlood: string;
        registrationDate: Date;
        validityDate: Date;
        isActive: boolean;
        pid: 1001001;
    };
    aid: number = 0;
    pid: number = 0;
    did: number = 0;

}
