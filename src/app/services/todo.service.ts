import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = '/api';
constructor( private http:HttpClient) { }

getallTasks(): Observable<any[]>{

 return this.http.get<any[]>(`${this.apiUrl}/allTasks`)
}
getUserScore(): Observable<any[]>{

 return this.http.get<any[]>(`${this.apiUrl}/userScore`)
}

addTodo(task:string){

  return this.http.post<any>(`${this.apiUrl}/createTask`, {task})
}

updateTodo(id:string , task:boolean ){

  return this.http.put<any>(`${this.apiUrl}/taskById/${id}`, {task})
}
completeTodo(id:string ){

  return this.http.put<any>(`${this.apiUrl}/taskById/${id}/complete`, {id})
}

deleteTodo(id:string){

  return this.http.delete<any>(`${this.apiUrl}/deleteById/${id}`);
}
}
