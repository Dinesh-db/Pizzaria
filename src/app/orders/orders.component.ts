import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  constructor(private pc:ServiceService){
    console.log(this.pizza);
  }
  pizza:any;
  getdatas(){
    this.pc.getdata().subscribe((e)=>{
      console.log("data recieved",e);
      this.pizza=e;
      console.log(this.pizza);
    });
  }
}
