export class User {

     //for form
     userName: string='';
     password: string='';
 
     //get
     status: number = 0;
     data: {
        uId: number;
        UserName: string;
        UserId: string;
        rId: number;
    };
     error: any;
     constructor() {
        this.data = {
          uId: 0,
          UserName: '',
          UserId: '',
          rId: 0
        };}
}
