import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FriendsReqService } from '../../services/friendsReq.service';

@Component({
  selector: 'app-my-stats',
  templateUrl: './my-stats.component.html',
  styleUrls: ['./my-stats.component.css']
})
export class MyStatsComponent implements OnInit {
  userScore:any
  myFriends:any[] = []
    private profileImages: string[] = [
    'https://i.pinimg.com/1200x/38/5d/d1/385dd19601b16ee0fdde50f06ec8225a.jpg',
    'https://i.pinimg.com/736x/b1/14/af/b114afbcf407f1d792e76b22f089137e.jpg',
    'https://i.pinimg.com/736x/9d/84/24/9d842428179dadcf89f7bce919ace0d6.jpg',
    'https://i.pinimg.com/736x/51/47/9a/51479a6847b23898929cffacbba19561.jpg',
    'https://i.pinimg.com/736x/53/ca/12/53ca12ff715299bff0a094edfcca5db7.jpg'
  ];

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

  getMyFriends() {
    this.friendsService.getAllFriends().subscribe((res: any[]) => {
      this.myFriends = res.map(friend => {
        return {
          ...friend,
          randomImage: this.getRandomImage()
        };
      });
      console.log(this.myFriends);
    });
  }
  getRandomImage(): string {
    const randomIndex = Math.floor(Math.random() * this.profileImages.length);
    return this.profileImages[randomIndex];
  }

}
