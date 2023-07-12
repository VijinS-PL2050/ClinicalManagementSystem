export class TokenGenerator {
    tokenNo: string = '';
    tokenTime: Date = new Date();
    appointment!: {
        bookingNo: string;
        appointmentDateTime: Date;
        doctorDepartment: {
            departmentName: string;
        };
        doctorDetails: {
            doctorId: string;
            doctorName: string;
            doctorDepartment: {
                departmentName: string;
            };
            did: number;
            uid: number;
        };
        patientRecords: {
            mrNo: string;
            patientName: string;
            patientPhone: string;
        };
        aid: number;
        pid: number;
        did: number;
    };
    tid: number = 0;

}
