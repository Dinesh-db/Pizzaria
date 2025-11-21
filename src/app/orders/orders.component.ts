import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

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
    
  }
  
  cleardata(){
    this.isClicked=false;
  }
}
