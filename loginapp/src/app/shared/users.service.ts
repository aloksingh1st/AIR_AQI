import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import {Users, Log} from './users.model'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  selectedUser : Users = {
    fullName:'',
    email:'',
    password:''
  }

  noAuthHeader = {headers : new HttpHeaders({'NoAuth':'True'})}; 


  constructor(private http : HttpClient) { }


  id:any;

  postUser(user: Users){
    return this.http.post(environment.apiBaseUrl+'/register', user, this.noAuthHeader);
  }
  loginUser(authCredentials:Log){
    return this.http.post(environment.apiBaseUrl +'/login', authCredentials)
  }


  updatePassword(credentials:any){
    return this.http.post(environment.apiBaseUrl+'/update/'+this.id, credentials);
  }

  
  setToken(token:string){
    localStorage.setItem('token', token);
  }

  deleteToken(){
    localStorage.removeItem('token')
  }

  getUsersPayload(){
    var token = this.getToken();
    if(token){
      var userPayload = atob(token.split('.')[1])
      this.id = JSON.parse(userPayload)._id;
      console.log(JSON.parse(userPayload));
      
      return JSON.parse(userPayload);
    }
    else{
      return null
    }
  }

  getUserProfile(headers:any){
    return this.http.get(environment.apiBaseUrl+'/userprofile/'+this.id);
  }


  isLoggedIn(){
    var userPayload = this.getUsersPayload();
    if(userPayload){
      return userPayload.exp > Date.now() / 1000;
    }
    else{
      return false;
    }
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
