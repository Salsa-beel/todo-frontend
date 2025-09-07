import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendsReqService {
  private apiUrl = '/api/friends';

constructor( private http:HttpClient) { }


getAllFriends(): Observable<any[]>{

  return this.http.get<any[]>(`${this.apiUrl}/getAllFriends`)
}

getAllPendingReq(): Observable<any[]>{
  return this.http.get<any[]>(`${this.apiUrl}/pendingReq`)
}

sendReq(friendUsername:string){
  return this.http.post<any>(`${this.apiUrl}/sendReq`, {friendUsername})
}

respondToReq(friendReqId:string, action:string){
  return this.http.put<any>(`${this.apiUrl}/respondReq`, {friendReqId,action})

}
}
