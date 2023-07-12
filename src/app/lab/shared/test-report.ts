export class TestReport {

    rpId: number = 0;
    reportId: string = '';
    reportDate: Date = new Date;
    actualValue: string = '';
    isActive: boolean = true;
    tpId: number = 0;
    report!: string;
    testPrescription!: {
        tpId: number;
        testPrescriptionId: string;
        testDay: Date;
        isActive: boolean;
        ttId: number;
        tests: {
            ttId: number;
            testId: string;
            testName: string;
            highValue: number;
            lowValue: number;
            unit: string;
            testPrice: number;
            isActive: boolean;
        };
        diId: string;
        diagnosis: {
            diId: number;
            diagnosisId: number;
            findOut: string;
            notes: string;
            diagnosisDate: Date;
            isActive: true;
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
                        doctorId: number;
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
                        patientPhone: 23456;
                        patientAddress: string;
                        patientAge: 12;
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

        };

    };

}
