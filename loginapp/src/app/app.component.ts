import { Component } from '@angular/core';
declare var mai:any ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginapp';
}

const fun=()=>{
  new mai();
}
