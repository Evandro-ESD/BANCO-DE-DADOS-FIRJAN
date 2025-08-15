import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
AuthService

export const usersGuard: CanActivateFn = (route, state) => {
  return true;
};

export const userGuard: CanActivateFn = (route, state) => {
  return true;
};

export class UserGuard implements CanActivate{

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if(this.auth.getRole() === 'user') return true
    this.router.navigate(['/'])
    return false;
  }
}
