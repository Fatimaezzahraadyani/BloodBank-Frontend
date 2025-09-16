import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = {
    email:'',
    password:'',
    rememberMe: false,

  };
  showPassword= false;

  constructor(private authService : AuthService, private router: Router){}

  togglePasswordVisibility(): void{
    this.showPassword = !this.showPassword;
  }

    onSignIn(): void {
      this.authService.login(this.loginData).subscribe({
        next : (response) =>{
          console.log('Réponse de backend:', response);
          const token = response.token;
          const role = response.role;
          const userId = response.id;

          localStorage.setItem('authToken', token);
          localStorage.setItem('userRole', role);

           //  Récupérer l'utilisateur courant après login
          this.authService.getCurrentUser().subscribe({
        next: (user) => {
          console.log("Utilisateur courant :", user);
          localStorage.setItem('userId', String(user.id)); // stockage du userId
        },
        error: (err) => {
          console.error("Erreur récupération utilisateur :", err);
        }
      });
          //  Redirection selon le rôle
            if (role === 'ADMIN') {
              this.router.navigate(['/admin-dashboard']);
            } else if (role === 'DONOR') {
              this.router.navigate(['/donor-dashboard']);
            } else {
              // Gérer d'autres rôles ou une erreur
              console.error("Rôle inconnu:", role);
            }
          
        },
        error: (err)=>{
          console.error('Erreur lors de la connexion :', err);
          alert('Email ou Password incorrect');
        }
      });
    }




}
