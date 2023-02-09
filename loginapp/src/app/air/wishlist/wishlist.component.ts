import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishdata:any;
  he:boolean = false
  index:any;
  constructor() { }

  ngOnInit(): void {
    this.wish()
  }

  allStorage() {

    var values = [];
    var fvalue = [];
    //     keys = Object.keys(localStorage),
    //     i = keys.length;

    // while ( i-- ) {
    //   console.log(i);
    //   var some =  JSON.parse(localStorage.getItem(keys[i]) || '{}'); 
    //   console.log(some)
    //   values.push(some);
    // }

    // return values;

    for (var a in localStorage) {
      if(a == 'token' || a == 'setItem' || a=='getItem' || a=='clear'||a == 'key' || a=='removeItem' || a=='length'){
        continue
      }
      else{

        let v = localStorage[a];
        console.log(a);
        values.push(v);
      }
   }

  let  keys = Object.keys(localStorage);
  let  i = keys.length - 1;

  console.log(keys)

  for(let j=0; j<i; j++){

    fvalue.push(JSON.parse(values[j])); 
  }

     return fvalue;
}

wish(){
  this.wishdata = this.allStorage();
  console.log(this.wishdata)

}

viewMore(city:any, country:string){
  this.he = true;
  this.index = this.wishdata.findIndex((x:any) => x.city == city);
  console.log(this.index)
}

delete(city:any){
  this.index = this.wishdata.findIndex((x:any) => x.city == city);
  this.wishdata.splice(this.index, 1);

  var keys = Object.keys(localStorage)
  localStorage.removeItem(keys[this.index])
}
}
