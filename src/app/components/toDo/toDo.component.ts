import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-toDo',
  templateUrl: './toDo.component.html',
  styleUrls: ['./toDo.component.css']
})
export class ToDoComponent implements OnInit {

  allTasks:any
  currentEditTask: any = null;
  newTask!: string;
  constructor( private todoService:TodoService) { }

  ngOnInit() {
    this.getAllTodos();
     // NEW: Set up a timer to refresh the UI every second
    setInterval(() => {
      this.allTasks = [...this.allTasks]; // Trigger change detection
    }, 1000);
  }



  getAllTodos(){

    this.todoService.getallTasks().subscribe((res)=>{

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

editTodo(todo: any) {
  // Set the current todo to be edited
  this.currentEditTask = { ...todo };
}
completeTodo(id:string){

  this.todoService.completeTodo(id).subscribe({
    next:()=>{
   console.log('Todo completed successfully.');
    // After a successful completion, refresh the list of tasks
    this.getAllTodos();
    }
  })
}
saveEdit() {
    this.todoService.updateTodo(this.currentEditTask.id, this.currentEditTask.task).subscribe({
        next: () => {
            console.log('Todo edited successfully.');
            // After successful edit, reset the currentEditTask
            this.currentEditTask = null;
            // Refresh the list of tasks
            this.getAllTodos();
        },
        error: (err) => {
            console.error('Error editing todo:', err);
        }
    });
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

    // NEW: Method to calculate and format the remaining time
  getRemainingTime(createdAt: string | Date): string {
    const totalTimeHours = 8;
    const initialPoints = 3;
    const decayRateHours = 3; // Points decay every 3 hours

    const created = new Date(createdAt).getTime();
    const now = new Date().getTime();
    const elapsedTimeMilliseconds = now - created;

    const totalDurationMilliseconds = totalTimeHours * 60 * 60 * 1000;
    const remainingMilliseconds = totalDurationMilliseconds - elapsedTimeMilliseconds;

    if (remainingMilliseconds <= 0) {
      return `0h 0m 0s (0 pts)`;
    }

    const hours = Math.floor(remainingMilliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((remainingMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingMilliseconds % (1000 * 60)) / 1000);

    const pointsToSubtract = Math.floor(elapsedTimeMilliseconds / (decayRateHours * 60 * 60 * 1000));
    const currentPoints = Math.max(0, initialPoints - pointsToSubtract);

    return `${hours}h ${minutes}m ${seconds}s (${currentPoints} pts)`;
  }
}
