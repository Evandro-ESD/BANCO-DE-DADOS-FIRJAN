import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { authGuard } from './services/auth.guard';
import { GerenciaComponent } from './gerencia/gerencia/gerencia.component';
import { VisualizarJogosComponent } from './usuarios/visualizar-jogos/visualizar-jogos.component';



export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: 'gerencia',
    canActivate: [authGuard],
    data: { role: 'admin' },
    children: [
      { path: 'cadastro', component: GerenciaComponent },
      { path: '', redirectTo: 'cadastro', pathMatch: 'full' }
    ]
  },

  {
    path: 'usuarios',
    canActivate: [authGuard],
    data: { role: 'user' },
    children: [
      { path: 'jogos', component: VisualizarJogosComponent },
      { path: '', redirectTo: 'jogos', pathMatch: 'full' }
    ]
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
