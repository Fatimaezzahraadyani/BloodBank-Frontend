import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  constructor(private router: Router) { }

    showLogoutMenu: boolean = false;

      toggleLogoutMenu() {
    this.showLogoutMenu = !this.showLogoutMenu;
  }

    logout() {
    // 1. Remove the authentication token
    localStorage.removeItem('token');
      localStorage.removeItem('jwt');
        localStorage.removeItem('authToken');
          localStorage.removeItem('role');
    localStorage.removeItem('userRole');
    // 2. Navigate to the login page
    this.router.navigate(['/login']);

    // 3. Hide the menu
    this.showLogoutMenu = false;
  }

}
