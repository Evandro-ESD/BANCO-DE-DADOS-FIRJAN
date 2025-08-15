import { CanActivateFn, CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  return false;
};
export class AdminGuard implements CanActivate{

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if(this.auth.getRole() === 'admin') return true
    this.router.navigate(['/'])
    return false;
  }
}