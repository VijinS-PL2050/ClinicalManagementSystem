export class TestPrescription {
    tpId: number = 0;
    testPrescriptionId: string = '';
    testDay: Date = new Date;
    ttId: string = '';
    tests!: {
        ttId: string;
        testId: string;
        testName: string;
        highValue: number;
        lowValue: number;
        unit: string;
        testPrice: number;
        isActive: true;
    };
}
