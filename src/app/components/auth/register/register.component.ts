// register.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  form = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router : Router) {}

  onSubmit() {
    console.log("Submit clicked", this.form);
    this.authService.registerDonor(this.form).subscribe({
      next: res => {
        console.log('Success', res);
      this.router.navigate(['/login']);
      },
      error: err => console.error('Error', err)
    });
  }
}
