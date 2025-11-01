import { Component } from '@angular/core';
import data from '../../assets/data.json';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  pizzas=data.pizzas;
  constructor(){
    console.log(this.pizzas);
  }
}
