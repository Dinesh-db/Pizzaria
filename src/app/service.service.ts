import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import data from "../assets/data.json";
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { 
    console.log(data.pizzas);
  }

  getdata(){
    let url="http://localhost:9000/";
    return this.http.get(url);
  }
}
