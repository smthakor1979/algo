import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalStorageService } from '../services/localstorage.service';
import { User } from '../model/user.model';
import { environment } from 'src/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private router: Router,
    private http: HttpClient, ls:LocalStorageService) {
      
  }
  register(user: User) {
    return this.http.post(`${environment.apiUrl}/register`, user);
}}
