import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {
  public readonly rest_api_url: string = 'http://localhost:4200/api'

  constructor(private http: HttpClient) { }

  public get = (url: string, options?: any): Observable<any> =>
  this.http.get(`${this.rest_api_url}/${url}`, options);

public post = (url: string, data?: any, options?: any): Observable<any> =>
  this.http.post(`${this.rest_api_url}/${url}`, data, options);

public put = (url: string, data: any, options?: any): Observable<any> =>
  this.http.put(`${this.rest_api_url}/${url}`, data, options);

public patch = (url: string, data: any, options?: any): Observable<any> =>
  this.http.patch(`${this.rest_api_url}/${url}`, data, options);

public delete = (url: string, options?: any): Observable<any> =>
  this.http.delete(`${this.rest_api_url}/${url}`, options);
}