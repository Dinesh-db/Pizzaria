import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { 
  }

  adddata(d:any){
    console.log("sevice tab",d);
    let url="http://localhost:9000/order";
    return this.http.post(url,d);
  }
}
