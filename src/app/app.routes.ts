import { Routes,RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { adminGuard } from './guards/admin.guard';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DonorDashboardComponent } from './components/Donor/donor-dashboard/donor-dashboard.component';
import { ReservationAdminComponent } from './components/reservation-admin/reservation-admin.component';
import { ReservationDetailsComponent } from './components/reservation-details/reservation-details.component';
import { donorGuard } from './guards/donor.guard';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MesReservationsDonorComponent } from './components/Donor/mes-reservations-donor/mes-reservations-donor.component';
import { AjouterReservationComponent } from './components/Donor/ajouter-reservation/ajouter-reservation.component';
import { DonorProfileComponent } from './components/Donor/donor-profile/donor-profile.component';
import { MesresrvationDetailsComponent } from './components/Donor/mesresrvation-details/mesresrvation-details.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent }, 
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'dashboard', component: DashboardComponent },
    {path : 'about-us', component : AboutUsComponent},
    
    //admis
    { path: 'admin-dashboard', 
        canActivate:[adminGuard],
        component : AdminDashboardComponent 
    },
        { path : 'admin/reservations',
        canActivate:[adminGuard], 
        component : ReservationAdminComponent
    },
     { path: 'reservations/:id',
        canActivate : [adminGuard],
        component: ReservationDetailsComponent },



    //donors
    {path: 'donor-dashboard', component: DonorDashboardComponent},
    {path : 'mes-reservation',canActivate:[donorGuard], component : MesReservationsDonorComponent},
    {path : 'donor/mes-reservations/nouveau', canActivate : [donorGuard], component:AjouterReservationComponent},
    {path: 'donor/profile/complete' , component: DonorProfileComponent, canActivate: [donorGuard]
  },
    {path: 'donor/mes-reservations/:id',canActivate: [donorGuard], component:MesresrvationDetailsComponent},



    { path: '**', redirectTo: 'login' }
];

