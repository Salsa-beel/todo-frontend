import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000';


constructor(private http:HttpClient) { }


register(username:string, password:string):Observable<any> {

  return this.http.post(`${this.apiUrl}/register`, {username, password})

}

login(username:string, password:string):Observable<any>{
   return this.http.post(`${this.apiUrl}/login`, {username, password}).pipe(
    tap((res:any)=>{
         if (res && res.token) {
          localStorage.setItem('authToken', res.token);
        }
    })
   )
}
  logout(): void {
    localStorage.removeItem('authToken');
  }
 isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

   getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}
