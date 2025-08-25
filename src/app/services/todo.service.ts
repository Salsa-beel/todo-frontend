import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = '/api';
constructor( private http:HttpClient) { }

getAllTodo(): Observable<any[]>{

 return this.http.get<any[]>(`${this.apiUrl}/todos`)
}
getUser(): Observable<any[]>{

 return this.http.get<any[]>(`${this.apiUrl}/user`)
}

addTodo(task:string){

  return this.http.post<any>(`${this.apiUrl}/todos`, {task})
}

updateTodo(id:string , task:boolean ){

  return this.http.put<any>(`${this.apiUrl}/todos/${id}`, {task})
}
completeTodo(id:string ){

  return this.http.put<any>(`${this.apiUrl}/todos/${id}/complete`, {id})
}

deleteTodo(id:string){

  return this.http.delete<any>(`${this.apiUrl}/todos/${id}`);
}
}
