import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { 
  }



  getdata(){
    let url="http://localhost:9000/";
    return this.http.get(url);
  }
}
