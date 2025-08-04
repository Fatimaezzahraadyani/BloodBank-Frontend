import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //url de base d'auth backend Spring Security
  private apiUrl = 'http://localhost:8082/api/auth';

  //cle de token
  private tokenKey = 'authToken';

  constructor(private http : HttpClient, private router : Router) { }

 login(data:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/login`,data);
  }

  getToken(): string | null {
  return localStorage.getItem(this.tokenKey);
}

}
