import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { UserComponent } from './user/user/user.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/users.guard';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
    { path: 'user', component: UserComponent, canActivate: [UserGuard] },
];
