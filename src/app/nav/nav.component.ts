import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any = {};
  loggedIn: boolean;

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
    this.getCurrentUseer();
  }
  login(): void {
    // console.log(this.model);
    this.accountService.login(this.model).subscribe(user =>{
      console.log(user);
      this.loggedIn = true;
    }, error => {
      console.log(error);
    })
  }

  logout():void {
    this.accountService.logout();
    this.loggedIn = false;
  }

  getCurrentUseer(){
    this.accountService.currentUser$.subscribe(user => {
      this.loggedIn = !!user;
    }, error => {
      console.log(error);
    })
  }
}
