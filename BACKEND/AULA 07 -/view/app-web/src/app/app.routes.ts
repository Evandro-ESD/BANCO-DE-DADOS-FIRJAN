import { Routes } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios/usuarios.component';

export const routes: Routes = [
    { path: '', component: UsuariosComponent, title: 'Usuários' },
    { path: 'usuarios', component: UsuariosComponent }
];
