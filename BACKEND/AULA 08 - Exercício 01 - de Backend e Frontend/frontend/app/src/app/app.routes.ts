import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {path: '', loadComponent: ()=> import('./layout/layout/layout.component').then(c => c.LayoutComponent)}

];
