import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    
    loginForm = this.fb.group({
    user : ['',Validators.required],
    password : ['',Validators.required, Validators.email]
  })

  constructor( private fb: FormBuilder){}
  
}
