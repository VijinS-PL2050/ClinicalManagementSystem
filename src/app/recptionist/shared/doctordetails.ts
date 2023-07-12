export class Doctordetails {
    doId: number = 0;
    doctorId: string = '';
    doctorName: string = '';
    consultationFee: number = 0;
    noOfToken: number = 0;
    doctorDepartment!: {
        departmentId: string;
        departmentName: string;
        did: number;
    };
    did: number = 0;
    uid: number = 0;
}
