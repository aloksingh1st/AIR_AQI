import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
// import { JsonP } from '@angular/http';

import { catchError } from 'rxjs/operators';


import { HttpHeaders } from '@angular/common/http';

const key="256713d5-b3a6-45eb-b68e-0a99b2dbe660";

@Injectable({
  providedIn: 'root'
})
export class CscService {
  apiBaseUrl = "http://api.airvisual.com/v2/"
  constructor(private http:HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Methods':'DELETE, POST, GET, OPTIONS',
        'Access-Control-Allow-Headers':'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'http://localhost:4200'
    })
  };



  getCountries() {
    return this.http.get<any>(`http://api.airvisual.com/v2/countries?key=256713d5-b3a6-45eb-b68e-0a99b2dbe660`).pipe(
      catchError(this.handleError)
    );

    // return this.http.jsonp(`http://api.airvisual.com/v2/countries?key=256713d5-b3a6-45eb-b68e-0a99b2dbe660`, '')
  }

  getStates(countryId: String) {
  
    return this.http.get<any>(`http://api.airvisual.com/v2/states?country=${countryId}&key=256713d5-b3a6-45eb-b68e-0a99b2dbe660`).pipe(
      catchError(this.handleError)
    );
  }

  getCities(stateId: string, co:string) {
    return this.http.get<any>(`http://api.airvisual.com/v2/cities?state=${stateId}&country=${co}&key=256713d5-b3a6-45eb-b68e-0a99b2dbe660`).pipe(
      catchError(this.handleError)
    );
  }

  getData(c:string, s:string, co:string){
    return this.http.get<any>(`http://api.airvisual.com/v2/city?city=${c}&state=${s}&country=${co}&key=256713d5-b3a6-45eb-b68e-0a99b2dbe660`).pipe(
      catchError(this.handleError)
    )
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }
}
