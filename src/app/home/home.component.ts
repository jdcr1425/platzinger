import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
friends:User[]=[];
   

  constructor() { 

let myuser1:User={nick:'jdcr1425',
                 subnick:'jd',
                 age:24,
                 email:'jd@gmail.com',
                 friend:true,uid:1};
let myuser2:User={nick:'jdcr',
                 subnick:'jd252',
                 age:16,
                 email:'jd@gmail.com',
                 friend:true,uid:1};
let myuser3:User={nick:'j',
                 subnick:'jdcr',
                 age:44,
                 email:'jdcr@gmail.com',
                 friend:true,uid:1};

this.friends=[ myuser1,myuser2,myuser3];



  }

  ngOnInit() {
  }

}
