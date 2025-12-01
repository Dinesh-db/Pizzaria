import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logoimg:string="../../assets/home.jpg";
  islogged:boolean=false;
  menuOpen = false;

}
