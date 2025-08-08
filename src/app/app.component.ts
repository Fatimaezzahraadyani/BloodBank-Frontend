import { Component } from '@angular/core';
import { RouterOutlet ,Router, NavigationEnd} from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bloodbank-Front';
  showNavAndFooter : boolean = true;

  constructor(private router : Router){
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        const authRoutes = ['/login','/register', '/forgot-password'];
        this.showNavAndFooter= !authRoutes.includes(event.urlAfterRedirects)
      }
    });

  }
}
