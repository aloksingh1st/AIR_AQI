import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  count:number = 0;
  @Input() fData:any;
  level:any;
  constructor() { 
  }
  
  ngOnInit(): void {
    if(this.fData.current.pollution.aqius < 50){
      this.level = "Good";
    }
    else if(this.fData.current.pollution.aqius > 50 && this.fData.current.pollution.aqius < 100){
      this.level = "Moderate"
    }
    else if(this.fData.current.pollution.aqius > 100 && this.fData.current.pollution.aqius < 150){
      this.level = "Unhealthy for sensative groups"
    }

    else if(this.fData.current.pollution.aqius > 150 && this.fData.current.pollution.aqius < 200){
      this.level = "Unhealthy"
    }
    else if(this.fData.current.pollution.aqius > 200 && this.fData.current.pollution.aqius < 250){
      this.level = "Very Unhealthy"
    }
   
    else{
      this.level = "Hazardous";
    }
  }

  con(){
    this.count++;
    console.log(this.fData.country+"is herererererer")
    console.log(this.level)
    localStorage.setItem("lastname"+this.count, JSON.stringify(this.fData));
  }

}
 