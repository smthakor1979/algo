import { Component } from '@angular/core';
import { navbarData } from '../menubar/navdata';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
  // standalone: true,
  
})
export class MenubarComponent {
  collapsed = false;
  navdata = navbarData;
}
// export class CdkDragDropOverviewExample {}
