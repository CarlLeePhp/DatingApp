import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/User';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private httpClient: HttpClient, private accountService: AccountService) { }

  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser(){
    const user:User = JSON.parse(localStorage.getItem("user"));
    this.accountService.setCurrentUser(user);
  }

  getUsers(): void {
    this.httpClient.get("https://localhost:5001/api/users").subscribe(response =>{
      this.users = response;
    }, error => {
      console.log(error);
    })
  }

}
