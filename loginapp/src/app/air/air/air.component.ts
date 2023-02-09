import { Component, OnInit } from '@angular/core';
import { CscService } from 'src/app/csc.service';
import { FormGroup, FormControl } from '@angular/forms';
// import { Country } from 'src/app/models/country';
import { 
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { UsersService } from 'src/app/shared/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-air',
  templateUrl: './air.component.html',
  styleUrls: ['./air.component.css']
})
export class AirComponent implements OnInit {

  createAccountForm: FormGroup
  countries: any;
  states : any;
  cities :any;
  state: any;
  country:any;
  city:any;

  c:any;
  s:any;
  co:any;

  cit:any;
  selectedLevel:any;

  finalData:any;
  fData:any;
  he:boolean = false;


  constructor(private cscService:CscService,private userService:UsersService, private router:Router) { }


  ngOnInit(): void {

    this.cscService.getCountries().subscribe(
      (data:any) => {
        console.log(data)
        this.countries = data
        console.log(this.countries)
        this.country = this.countries.data;
      }
    );

    
    this.createAccountForm = new FormGroup({
      country: new FormControl(''),
      state : new FormControl(''),
      city : new FormControl('')
    })
  }


  onChangeCountry(event: any) {
    if (event.target.value) {
      this.co = event.target.value;
      this.cscService.getStates(event.target.value).subscribe(
        (data:any[]) => {
          console.log(data)
          this.states = data;
          this.cities = null;
          this.state = this.states.data;
          console.log(this.state)
        }
      );
    } else {
      this.states = null;
      this.cities = null;
    }
  }

  onChangeState(event: any) {
    if (event.target.value) {
      this.s = event.target.value;
      this.cscService.getCities(event.target.value, this.co).subscribe(
        (data:any[]) =>{


          this.cities = data
          this.city = this.cities.data
        } 
      );
    } else {
      this.cities = null;
    }
  }

  onChangeCity(event:any){
    this.he = false;
    console.log(event.target.value)
    if(event.target.value){
      this.c = event.target.value
    }
    else{
      this.c = null;
    }
  }

  callapi(){
    console.log(this.c, this.s, this.co, this.cit);
    this.cscService.getData(this.c, this.s, this.co).subscribe(
      (data:any[]) =>{
        this.finalData = data;
        this.fData = this.finalData.data
        console.log(this.fData);
        this.he = true;

      }
      )
  }
  selected(){
    this.c = this.selectedLevel;
    console.log(this.selectedLevel)
  }



  onLogout(){
    this.userService.deleteToken();
    this.router.navigateByUrl('/signup');
  }

  update(){
    this.router.navigateByUrl('/update');
  }
}
