import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminalComponent } from './component/terminal/terminal.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {
    path: 'login' ,
    component: LoginComponent 
  },
  {
    path: 'register' ,
    component: RegisterComponent 
  },
  {
    path: 'terminal' ,
    component: TerminalComponent 
  },
  {
    path: '', pathMatch: 'full', 
    redirectTo: 'terminal'
  },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
