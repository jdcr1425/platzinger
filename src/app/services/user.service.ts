import { Injectable } from '@angular/core';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  friends: User[] = [];
  constructor() {


    let myuser1:User={nick:'jdcr1425',
      subnick:'jd',
      age:24,
      email:'jd@gmail.com',
      friend:true,uid:1,
      status:'away'

    };
    let myuser2:User={nick:'jdcr',
      subnick:'jd252',
      age:16,
      email:'jd@gmail.com',
      friend:true,uid:1,
      status:'busy'};
    let myuser3:User={nick:'j',
      subnick:'jdcr',
      age:44,
      email:'jdcr@gmail.com',
      friend:false,uid:1,
    status:'online'};

    this.friends=[ myuser1,myuser2,myuser3];
  }


  getFriends(){
    return this.friends;
  }
}
