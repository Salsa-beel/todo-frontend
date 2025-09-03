import { Component, OnInit } from '@angular/core';
import { FriendsReqService } from '../../services/friendsReq.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  UserID:any
  constructor( private friendsService:FriendsReqService , private authService :AuthService) { }

  ngOnInit() {
    this.getFriends();
    this.getUserID();
  }


  getUserID(){

    this.UserID= this.authService.getUserId();
    return this.UserID;
  }
  getFriends(){

    this.friendsService.getAllFriends().subscribe((res)=>{

      console.log(res)

    })
  }
}
