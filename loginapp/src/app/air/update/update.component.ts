import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/shared/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  response:any

  createAccountForm: FormGroup

  constructor(private userService:UsersService, private router:Router) { }

  model = {
    newPassword:''
  }

  ngOnInit(): void {
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigateByUrl('/signup');
  }

  onUpdate(form:any){
    this.userService.updatePassword(form.value).subscribe((res)=>{
      this.response = res;
      alert(this.response.msg)
      this.onLogout()
      
    })
  }
}
