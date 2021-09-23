import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any = {};

  constructor(public accountService: AccountService, private router:Router, 
    private toastr: ToastrService) { }

  ngOnInit(): void {}
  login(): void {
    // console.log(this.model);
    this.accountService.login(this.model).subscribe(user =>{
      this.router.navigateByUrl('/members');
    })
  }

  logout():void {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

}
