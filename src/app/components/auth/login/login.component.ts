import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

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
    rememberMe: '',

  };
  showPassword= false;

  togglePasswordVisibility(): void{
    this.showPassword = !this.showPassword;
  }

    onSignIn(): void {
    console.log('Login form submitted (backend not hooked up yet):', this.loginData);
    // Vous pouvez ajouter une alerte temporaire pour confirmer la soumission
    alert('Formulaire soumis ! (Logique backend non connectée)');
    }



}
