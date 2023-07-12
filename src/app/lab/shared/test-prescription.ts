export class TestPrescription {

    // tpId:number =0 ;
    // testPrescriptionId:string ='';
    // testDay:Date =  new Date;
    // ttId:number =0 ;
    // diId:string ='';
    // active: boolean=true;




    tpId: number = 0;
    testPrescriptionId: string = '';
    testDay: Date = new Date;
    isActive: boolean = true;
    ttId: number = 0;
    tests!: {
        ttId: number;
        testId: string;
        testName: string;
        highValue: number;
        lowValue: number;
        unit: string;
        testPrice: number;
        isActive: boolean;
    };
    diId: number = 0;
    diagnosis!: {
        diId: number;
        diagnosisId: string;
        findOut: string;
        notes: string;
        diagnosisDate: Date;
        isActive: boolean;

        tokenGenarator: {
            tokenNo: number;
            tokenTime: Date;
            isActive: boolean;

            appointment: {
                bookingNo: number;
                appointmentDateTime: Date;
                appointmentValidity: Date;
                isActive: boolean;

                doctorDepartment: {
                    departmentId: number;
                    departmentName: string;
                    isActive: boolean;
                    did: number;
                };
                doId: number;

                doctorDetails: {
                    doId: number;
                    doctorId: string;
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
                        departmentId: string;
                        departmentName: string;
                        isActive: boolean;
                        did: number;
                    };

                    user: {
                        userId: number;
                        userName: string;
                        password: string;
                        isActive: boolean;

                        role: {
                            roleId: number;
                            roleName: string;
                            isActive: boolean;
                            rid: number;
                        };
                        uid: number;
                        rid: number;
                    };
                    isActive: boolean;
                    did: number;
                    uid: number;
                };

                patientRecords: {
                    mrNo: number;
                    patientName: string;
                    patientPhone: number;
                    patientAddress: string;
                    patientAge: boolean;
                    patientGender: string;
                    patientBlood: string;
                    registrationDate: Date;
                    validityDate: Date;
                    isActive: boolean;
                    pid: number;
                };
                aid: number;
                pid: number;
                did: number;
            };
            aid: number;
            tid: number;
        };
        pid: number;
        tid: number;
    };
}


