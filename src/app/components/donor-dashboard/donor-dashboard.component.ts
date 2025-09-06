import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { DonorServiceService } from '../../core/services/donor/donor-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-donor-dashboard',
  imports: [RouterModule, CommonModule],
  templateUrl: './donor-dashboard.component.html',
  styleUrl: './donor-dashboard.component.css'
})
export class DonorDashboardComponent implements OnInit{

  user : any;
  profileIncomplete : boolean = false;

  constructor(private authService : AuthService, private donorService : DonorServiceService){}


  ngOnInit(): void {
    // 1. Abonnez-vous à l'Observable retourné par getCurrentUser()
    this.authService.getCurrentUser().subscribe(currentUser => {
      // 2. Le code ici ne s'exécute que lorsque la requête HTTP est terminée
      // et que l'objet 'currentUser' (de type 'User') est disponible.

      if (currentUser && currentUser.id) {
        // 3. Utilisez l'ID de l'objet 'currentUser' pour appeler getProfile
        this.donorService.getProfile(currentUser.id).subscribe(profile => {
          this.user = profile;
          // Vérifiez si le profil est complet ou non
          this.profileIncomplete = this.isProfileIncomplete(profile);
        });
      } else {
        // Gérer le cas où aucun utilisateur n'est trouvé
        console.error("Impossible de récupérer les informations de l'utilisateur connecté.");
      }
    },
    // Gérer les erreurs de l'appel getCurrentUser()
    error => {
      console.error("Erreur lors de la récupération de l'utilisateur :", error);
    });
  }

    private isProfileIncomplete(profile: any): boolean{
      return(
        profile.bloodType === null ||
        profile.birthdate === null ||
        profile.weight === null ||
        profile.phone === null ||
        profile.maladieHistory === null ||
        profile.address === null ||
        profile.maladiesChroniques === null ||
        profile.priseDeMedicaments === null ||
        profile.chirurgiesRecentes === null
      );
    }
  
}
