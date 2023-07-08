import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //create a constructor
  constructor(private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    //check role : currentRole Vs exceptedRole

    //expected Role:From Url
    const exceptedRole=route.data['rId'];
    console.log('jhgfdsdfg');
    console.log(exceptedRole);


    //currentRole : session storage
    const currentRole=sessionStorage.getItem("ACCESS_ROLE");
    console.log( currentRole);

    if(currentRole!==exceptedRole){
      this.router.navigateByUrl('login');
      return false;
    }else{
      return true;
    }
    
}
  
}
