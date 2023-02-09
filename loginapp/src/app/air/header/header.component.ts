import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  tag:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  wishlist(){
    this.tag = !this.tag;

  }

  wishlist_close(){
    this.tag = false;
  }

}
