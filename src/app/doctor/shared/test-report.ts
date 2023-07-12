export class TestReport {
    rpId: number = 0;
    reportId: string = '';
    reportDate: Date = new Date;
    actualValue: number = 0;
    isActive: boolean = true;
    tpId: number = 0;
    testPrescription!: {
        ttId: 89000;
        tests: {
            ttId: number;
            testId: string;
            testName: string;
            highValue: number;
            lowValue: number;
            unit: string;
        };
        diagnosis: {
            tokenGenarator: {
                appointment: {
                    doctorDepartment: {
                        departmentName: string;
                    };
                    doctorDetails: {
                        doctorName: string;
                    };
                };
            };

        };
    };
    report: string = '';
}
