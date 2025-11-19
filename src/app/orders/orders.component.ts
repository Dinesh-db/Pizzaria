import { Component } from '@angular/core';
import data from '../../assets/data.json';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  pizzas=data.pizzas;
  constructor(private pc:ServiceService){
  }

  getdatas(){
    this.pc.getdata().subscribe((e)=>{
      console.log("data recieved")
    });
  }
}
