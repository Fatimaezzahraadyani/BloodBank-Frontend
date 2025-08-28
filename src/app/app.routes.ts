import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { adminGuard } from './guards/admin.guard';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DonorDashboardComponent } from './components/donor-dashboard/donor-dashboard.component';
import { ReservationAdminComponent } from './components/reservation-admin/reservation-admin.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent }, 
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'admin-dashboard', canActivate:[adminGuard],component : AdminDashboardComponent },
    { path: 'donor-dashboard', component: DonorDashboardComponent},
    { path : 'admin/reservations',canActivate:[adminGuard], component : ReservationAdminComponent},

    { path: '**', redirectTo: 'login' }
];

