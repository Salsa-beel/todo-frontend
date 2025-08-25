import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = '/api/todos';
constructor( private http:HttpClient) { }

getAllTodo(): Observable<any[]>{

 return this.http.get<any[]>(this.apiUrl)
}

addTodo(task:string){

  return this.http.post<any>(this.apiUrl, {task})
}

updateTodo(id:string , task:boolean ){

  return this.http.put<any>(`${this.apiUrl}/${id}`, {task})
}
completeTodo(id:string ){

  return this.http.put<any>(`${this.apiUrl}/${id}`, {id})
}

deleteTodo(id:string){

  return this.http.delete<any>(`${this.apiUrl}/${id}`);
}
}
