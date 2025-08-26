import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userScore:any
  constructor( private todoService:TodoService) { }

  ngOnInit() {
    this.getUserScore();
  }


    getUserScore(){

    this.todoService.getUserScore().subscribe((res)=>{

      this.userScore = res;
      console.log(this.userScore)

    })
  }

}
