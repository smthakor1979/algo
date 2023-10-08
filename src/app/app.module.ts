import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatDrawerContainer, MatSidenavModule} from '@angular/material/sidenav';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgIf, NgFor} from '@angular/common';
import { MenubarComponent } from './menubar/menubar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatDrawer } from '@angular/material/sidenav';
import { Route, RouterModule } from '@angular/router';
import { TerminalComponent } from './terminal/terminal.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    MenubarComponent,
    TerminalComponent,
    // MatDrawer,
    // MatDrawerContainer
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

