import { Component, OnInit } from '@angular/core';
import { FriendsReqService } from '../../services/friendsReq.service';

@Component({
  selector: 'app-friend-requests',
  templateUrl: './friend-requests.component.html',
  styleUrls: ['./friend-requests.component.css']
})
export class FriendRequestsComponent implements OnInit {
  friendUsername!: string;
  pendingRequests:any[] = []
  constructor( private friendsService:FriendsReqService) { }

  ngOnInit() {
    this.getFriendRequests();
  }


  getFriendRequests(){
    this.friendsService.getAllPendingReq().subscribe((res)=>{
      this.pendingRequests = res;
      console.log(this.pendingRequests)
    })

  }

  RespondToRequest(id:string, action:string){
    this.friendsService.respondToReq(id , action).subscribe({
      next:()=>{
        console.log('Friend request accepted successfully.');
        // After a successful acceptance, refresh the list of pending requests
        this.getFriendRequests();
      }
    })

  }

  AddFriend(){

    if ( this.friendUsername && this.friendUsername.trim()) {
      this.friendsService.sendReq(this.friendUsername.trim()).subscribe({
        next:()=>{
          console.log('Friend request sent successfully.');
         this.friendUsername = ''; // Clear the input field
        },
        error:(err)=>{
          console.error('Failed to send friend request:', err);
          // Optionally, handle errors (e.g., user not found, already friends, etc.)
        }
      })
    }
}


}
