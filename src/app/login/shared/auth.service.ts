import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public loginVerify(user: User) {
    //calling the api for checking username and password
    return this.httpClient.get<User>(environment.apiUrl + '/api/login/' + user.userName + '&' + user.password);
  }
  fetchValues(user: User): void {
    this.httpClient.get<User>(environment.apiUrl + '/api/login/' + user.userName + '&' + user.password).subscribe(response => {
      // Check the status code
      if (response.status === 200) {
        const rId = response.data?.rId;
        const uId = response.data?.uId;
        const userName = response.data?.UserName;
        const userId = response.data?.UserId;

        // Do something with the values
        console.log(rId, uId, userId, userName);
      } else {
        // Handle error if necessary
        console.error(response.error);
      }
    });
  }
}
