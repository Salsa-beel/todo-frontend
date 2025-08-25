import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  allTasks:any
  constructor( private todoService:TodoService) { }

  ngOnInit() {
    this.getAllTodos();
  }


    getAllTodos(){

    this.todoService.getUser().subscribe((res)=>{

      this.allTasks = res;
      console.log(this.allTasks)

    })
  }

}
