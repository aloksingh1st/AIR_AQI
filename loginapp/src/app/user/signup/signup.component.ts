import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/shared/users.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[UsersService]
})
export class SignupComponent implements OnInit {
  showSuccessMethod: boolean;
  serverErrorMessage:string;
  toke :any;

  constructor(public userService: UsersService, private router : Router) { 

  }

  model = {
    email:'',
    password:''
  };

  ngOnInit(): void {
    if(this.userService.isLoggedIn()){
      this.router.navigateByUrl('/air');
    }
  }
    clicked(){
      const a = document.getElementById("login");
      const b = document.getElementById("register");
      a?.classList.toggle("inactive");
      b?.classList.toggle("inactive");
    }

    onSubmit(form : NgForm){
      this.userService.postUser(form.value).subscribe(
        res => {
          this.showSuccessMethod = true;
          setTimeout(()=> this.showSuccessMethod = false , 4000)
        },
        err => {

          if (err.status == 422){
            this.serverErrorMessage = err.error.join("<br/>");
          }
          else{
            this.serverErrorMessage = "Something went Wrong";
          }
        }
      )
    }

    onSubmite(form:NgForm){
      this.userService.loginUser(form.value).subscribe(
        (res)=>{
          this.toke = res;
          console.log(this.toke.token)
           this.userService.setToken(this.toke.token);
           this.router.navigateByUrl('/air');
        },
        (err)=>{
          this.serverErrorMessage = err.error.message;

        }
      )
    }


  }
