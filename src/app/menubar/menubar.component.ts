import { Component } from '@angular/core';
import { navbarData } from '../menubar/navdata';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  collapsed = false;
  navdata = navbarData;
}
