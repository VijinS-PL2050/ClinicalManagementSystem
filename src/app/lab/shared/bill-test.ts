export class BillTest {

        
    btId:number = 0;
    billTestNo: string = '';
    billDate:  Date = new Date;
    billAmount:  number = 0;
    isActive:boolean = true;
    tpId: number = 0;
   
    testPrescription!: {
        tpId: number;
        testPrescriptionId: string;
        testDay: Date;
        isActive: true;
        ttId: number;

        tests: {
            ttId: number;
            testId: string;
            testName: string;
            highValue: number;
            lowValue: number;
            unit: string;
            testPrice: number;
            isActive: true;
        };
        diId: number;
        diagnosis: {
            diId: number;
            diagnosisId: number;
            findOut: string;
            notes: string;
            diagnosisDate: Date;
            isActive: true;

            tokenGenarator: {
                tokenNo: string;
                tokenTime: Date;
                isActive: true;

                appointment: {
                    bookingNo: string;
                    appointmentDateTime: Date;
                    appointmentValidity: Date;
                    isActive: true;
                    doctorDepartment: {
                        departmentId: number;
                        departmentName: string;
                        isActive: true;
                        did: number;
                    };
                    doId: number;
                    doctorDetails: {
                        doId: number;
                        doctorId: 1;
                        doctorName: string;
                        dateOfBirth: Date;
                        gender: string;
                        bloodGroup: string;
                        phoneno: number;
                        address: string;
                        adharNo: number;
                        qualification: string;
                        email: string;
                        consultationFee: number;
                        noOfToken: number;

                        doctorDepartment: {
                            departmentId: number;
                            departmentName: string;
                            isActive: true;
                            did: number;
                        };
                        user: null;
                        isActive: true;
                        uid: number;
                        did: number;
                    };
                    patientRecords: {
                        mrNo: string;
                        patientName: string;
                        patientPhone: number;
                        patientAddress: string;
                        patientAge: number;
                        patientGender: string;
                        patientBlood: string;
                        registrationDate: Date;
                        validityDate: Date;
                        isActive: true;
                        pid: number;
                    };
                    aid: number;
                    pid: number;
                    did: number;
                };
                aid: number;
                tid: number;
            };
            patientRecords: {
                mrNo: string;
                patientName: string;
                patientPhone: number;
                patientAddress: string;
                patientAge: number;
                patientGender: string;
                patientBlood: string;
                registrationDate: Date;
                validityDate: Date;
                isActive: true;
                pid: number;
            };
            pid: number;
            tid: number;
        };
    };
    rpId!: number;
}


