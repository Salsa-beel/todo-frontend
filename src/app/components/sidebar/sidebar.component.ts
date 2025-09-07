import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FriendsReqService } from '../../services/friendsReq.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userScore:any
  myFriends:any[] = []
  constructor( private todoService:TodoService , private friendsService:FriendsReqService) { }

  ngOnInit() {
    this.getUserScore();
    this.getMyFriends();
  }


    getUserScore(){

    this.todoService.getUserScore().subscribe((res)=>{

      this.userScore = res;
      console.log(this.userScore)

    })
  }

  getMyFriends(){
    this.friendsService.getAllFriends().subscribe((res)=>{
   this.myFriends = res;
   console.log(this.myFriends)

    })
  }

}
