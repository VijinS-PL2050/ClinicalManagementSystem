export class MedicinePrescription {
    mpId: number = 0;
    medicinePrescriptionId: string = '';
    noOfDay: number = 0;
    medicinePrescriptionDate: Date = new Date;
    isActive: boolean = true;
    diId: number = 0;
    diagnosis!: {
        tokenGenarator: {
            doctorDetails: {
                doctorName: string;
                doctorDepartment: {
                    departmentName: string;
                };
            };
            aid: number;
            tid: number;
        };
    };
    dosId: number=0;
    dosage!: {
        dosId: number;
        dosage: string;
    };
    msId: number=0;
    medicinesStock!: {
        msId: number;
        medicineName: string;
        genericName: string;
    }; 

}
