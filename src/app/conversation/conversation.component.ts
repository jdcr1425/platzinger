import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../interfaces/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  friendid: any;
  Friends: User[];
  friend:User;
  price:number=8.55555565415421;
  date = Date.now();
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {

    this.friendid = this.activatedRoute.snapshot.params['uid'];
    console.log(this.friendid);
    this.Friends= this.userService.getFriends();
  this.friend = this.Friends.find((user)=> user.uid==this.friendid );

  console.log(this.friend);


  }

  ngOnInit() {
  }

}
