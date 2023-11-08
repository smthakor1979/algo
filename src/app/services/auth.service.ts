import { Injectable } from '@angular/core';
import { LocalStorageService } from './localstorage.service';
import { ApiHttpService } from './api.service';
// import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private ls: LocalStorageService, http: ApiHttpService ) { }
  
  public isLoggedIn() {
    if(this.ls.getItem('token')){
      return true;
    }else{
      return false;
    }
  }
  /* for broker login */
  // public login(data: any): Observable<any> {
  //   return this.http.post('');
  // }
}