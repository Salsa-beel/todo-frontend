import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";


@Injectable()
export class AuthInterceptor  implements HttpInterceptor{

  constructor(private authService:AuthService){}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const authToken = this.authService.getToken();

    if(authToken){
      const authCloneReq = req.clone({
        setHeaders:{
          Authorization: `Bearer ${authToken}`
        }
      })
          return next.handle(authCloneReq);
    }
    return next.handle(req);
  }

}
