import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  constructor(private pc:ServiceService){
  }

  getdatas(){
    this.pc.getdata().subscribe((e)=>{
      console.log("data recieved",e);
    });
  }
}
