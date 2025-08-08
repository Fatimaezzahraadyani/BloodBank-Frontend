// register.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  constructor(private authService: AuthService) {}

  onSubmit() {
    console.log("Submit clicked", this.form);
    this.authService.registerDonor(this.form).subscribe({
      next: res => console.log('Success', res),
      error: err => console.error('Error', err)
    });
  }
}
