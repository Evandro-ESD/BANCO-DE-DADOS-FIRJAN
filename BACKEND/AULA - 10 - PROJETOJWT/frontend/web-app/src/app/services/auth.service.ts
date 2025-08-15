import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface loginResponse {
  token: string,
  role: 'admin' | 'user'
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3015/api/auth/login'

  private logedID = new BehaviorSubject(false)
  private userRole = new BehaviorSubject<'admin' | 'user' | null>(null)
  private http = inject(HttpClient)

  constructor() {
    const token = localStorage.getItem('token')
    if (token) {
      this.logedID.next(true)
      this.userRole.next(localStorage.getItem('role') as 'admin' | 'user')
    }
  }

  login(login: string, senha: string): Observable<loginResponse> {
    return this.http.post<loginResponse>(`${this.baseUrl}/login`, { login, senha }).pipe(
      tap(res => {
        localStorage.setItem('token', res.token)
        localStorage.setItem('role', res.role)
        this.logedID.next(true)
        this.userRole.next(res.role)
      }))
  }

  logout() { 
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    this.logedID.next(false)
    this.userRole.next(null)
  }

  getToken() { 
    return localStorage.getItem('token')
  }

  getRole() { 
    return this.userRole.value
  }

}
