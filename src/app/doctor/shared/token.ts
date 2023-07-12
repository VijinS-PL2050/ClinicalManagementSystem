export class Token {
    
    
        tokenNo: string= '';
         tokenTime : Date= new Date;
         isActive : boolean= true;
         appointment : {
             patientRecords: {
                 mrNo: string;
                 patientName: string;
                 pid: number;
             };
             aid: number;
             pid: number;
             did: number;
         } | undefined;
         doctorDetails : {
             doctorName: string;
             doctorDepartment: {
                 departmentName: string;
             };
         } | undefined;
         aid : number= 0;
         tid : number= 0;
    
}
