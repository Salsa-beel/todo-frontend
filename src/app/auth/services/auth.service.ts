import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000';


constructor(private http:HttpClient) { }


register(username:string,email:string, password:string):Observable<any> {

  return this.http.post(`${this.apiUrl}/register`, {username,email, password})

}

login(username:string, password:string):Observable<any>{
   return this.http.post(`${this.apiUrl}/login`, {username, password}).pipe(
    tap((res:any)=>{
         if (res && res.token) {
          localStorage.setItem('authToken', res.token);
          localStorage.setItem('userID', res.userId);
        }
    })
   )
}



 logout(): Observable<any> {
    // Get the token from local storage to send to the server
    const token = this.getToken();

    // Check if the token exists before making the API call
    if (token) {
      return this.http.post(`${this.apiUrl}/logout`, {}, {
        headers: {
          // The Angular `HttpClient` handles this for us with an interceptor, but it's
          // good to show the explicit header.
          'Authorization': `Bearer ${token}`
        }
      }).pipe(
        tap(() => {
          // After a successful server-side logout, remove the token locally
          localStorage.removeItem('authToken');
        })
      );
    } else {
      // If there's no token, just remove it from local storage and return an empty observable
      localStorage.removeItem('authToken');
      return new Observable(observer => observer.complete());
    }
  }

 isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

   getToken(): string | null {
    return localStorage.getItem('authToken');
  }
  getUserId(): string | null {
    return localStorage.getItem('userID');
  }
}
