import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import data from "../../assets/data.json";
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  constructor(private pc:ServiceService){
    this.pc.getdata().subscribe((e)=>{
      this.pizza=e;
    })
    
  }
  pizza:any;
  isClicked:boolean=false;
  getdatas(){
    this.isClicked=true;
    this.pc.senddata(data.pizzas).subscribe((e)=>{
      console.log("data sented...",e);
    })
  }
  
  cleardata(){
    this.isClicked=false;
  }
}
