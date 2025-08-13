import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

type UserRole = 'admin' | 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;
  private role: UserRole | null = null;

  router = inject(Router)


  constructor() { }

  login(username: string, password: string): boolean {
    // Simulação de perfis
    if (username === 'admin' && password === '1234') {
      this.loggedIn = true;
      this.role = 'admin';
      return true;
    }
    if (username === 'user' && password === '1234') {
      this.loggedIn = true;
      this.role = 'user';
      return true;
    }
    return false;
  }

  logout() {
    this.loggedIn = false;
    this.role = null;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getRole(): UserRole | null {
    return this.role;
  }

}
