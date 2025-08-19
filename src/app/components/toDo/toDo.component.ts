import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-toDo',
  templateUrl: './toDo.component.html',
  styleUrls: ['./toDo.component.css']
})
export class ToDoComponent implements OnInit {
  allTasks:any
  newTask!: string;
  constructor( private todoService:TodoService) { }

  ngOnInit() {
    this.getAllTodos()
  }



  getAllTodos(){

    this.todoService.getAllTodo().subscribe((res)=>{

      this.allTasks = res;
      console.log(this.allTasks)

    })
  }

 addTask() {
    if (this.newTask.trim()) { // Check if the input is not empty
      this.todoService.addTodo(this.newTask).subscribe(() => {
        this.newTask = ''; // Clear the input field
        this.getAllTodos(); // Refresh the list
      });
    }
  }

  deleteTodo(id:string){

    this.todoService.deleteTodo(id).subscribe({

      next:()=>{
     console.log('Todo deleted successfully.');
      // After a successful deletion, refresh the list of tasks
      this.getAllTodos();
      }
    })
  }
}
