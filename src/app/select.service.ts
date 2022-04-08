import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SelectService {
url= "https://jsonplaceholder.typicode.com/users";
  constructor(private _http:HttpClient) { }

  getdata(){
    return this._http.get(this.url)
  }
}
