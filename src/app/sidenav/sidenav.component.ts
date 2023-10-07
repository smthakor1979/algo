import { Component } from '@angular/core';
import { navbarData } from './navdata';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  collapsed = false;
  navdata = navbarData;  
}
