import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../shared/users.service';
import { CscService } from '../csc.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userDetails:any;
  use :  any;
  token:any;
  // headers: string = ("Authorization", "Bearer" + this.userService.getToken())
  constructor(private userService:UsersService, private router:Router) { }


  ngOnInit(): void {
    let headers = this.userService.getToken();
    console.log(headers)
    this.token = this.userService.getToken();
    this.userService.getUserProfile(headers).subscribe(
      res =>{
        this.use = res
        this.userDetails = this.use.user;
      },
       err =>{

       }
    )
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigateByUrl('/signup');
  }

}
