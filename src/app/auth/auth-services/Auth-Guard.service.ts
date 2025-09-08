import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard{

constructor(private authService:AuthService , private router:Router) { }


canActivate( route:ActivatedRouteSnapshot , state :RouterStateSnapshot) {

  const isLoggedInResponse =this.authService.isLoggedIn();
  if(isLoggedInResponse){
    return true;
  } else{
    return this.router.createUrlTree(['/login'])
  }

}
}
