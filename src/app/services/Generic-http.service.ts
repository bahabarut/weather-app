import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {

  //postman
  countriesUrl: string = "https://countriesnow.space/api/v0.1/countries";
  
  //rapid
  cityDetailUrl: string = "https://api.api-ninjas.com/v1/city?";
  openWtUrl: string = "https://api.openweathermap.org/data/3.0/onecall?"
  openWtApiKey: string = "API-KEY";

  fbSignInUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=API-KEY"
  fbSignUpUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=API-KEY"
  districtHeaders: HttpHeaders;
  cityHeaders: HttpHeaders;
  constructor(private _http: HttpClient) {
    this.districtHeaders = new HttpHeaders({
      'x-rapidapi-key': 'API-KEY',
      'x-rapidapi-host': 'API-HOST'
    });
    this.cityHeaders = new HttpHeaders({
      "X-Api-Key": "API-KEY"
    });
  }

  GenericGetService<T>(url: string, headers?: HttpHeaders): Observable<T> {
    const headerOptions = headers ? { headers } : {};
    return this._http.get<T>(url, headerOptions);
  }
  GenericPostService<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    const headerOptions = headers ? { headers } : {};
    return this._http.post<T>(url, body, headerOptions);
  }

}
