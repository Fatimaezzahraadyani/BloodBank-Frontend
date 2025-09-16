import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import { DonorServiceService } from '../../../core/services/donor/donor-service.service';
import { CommonModule } from '@angular/common';
import { ProfileStateService } from '../../../core/services/profile-state/profile-state.service';
import { Subscription } from 'rxjs';

// the Font Awesome imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUserCircle, faCalendarAlt, faHeartbeat, faExclamationTriangle, faArrowRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-donor-dashboard',
  standalone:true,
  imports: [RouterModule, CommonModule, FontAwesomeModule ],
  templateUrl: './donor-dashboard.component.html',
  styleUrl: './donor-dashboard.component.css'
})
export class DonorDashboardComponent implements OnInit, OnDestroy{

  user : any;
  profileIncomplete : boolean = false;
  profileStatusSubscription: Subscription | null = null;

  constructor(
    private authService : AuthService, 
    private donorService : DonorServiceService,
    private profileStateService : ProfileStateService,
    private library: FaIconLibrary
  ){
        library.addIcons(faUserCircle, faCalendarAlt, faHeartbeat, faExclamationTriangle, faArrowRight);

  }


  ngOnInit(): void {
        // 1. Abonnement à l'état du profil
    //  On s'abonne en premier pour être sûr de ne pas rater d'information
    this.profileStatusSubscription = this.profileStateService.currentProfilStatus.subscribe(isComplete => {
      this.profileIncomplete = !isComplete; // Met à jour l'état de l'alerte
    });

    // 2. Chargement initial des données utilisateur
    //  On charge les données initiales du profil et on met à jour le ProfileStateService
    this.authService.getCurrentUser().subscribe(currentUser => {
      if (currentUser && currentUser.id) {
        this.donorService.getProfile(currentUser.id).subscribe(profile => {
          this.user = profile;
          // On met à jour le service partagé avec le résultat de la vérification
          const isComplete = this.isProfileComplete(profile);
          this.profileStateService.updateProfilStatus(isComplete);
        });
      } else {
        console.error("Impossible de récupérer les informations de l'utilisateur connecté.");
      }
    },
    error => {
      console.error("Erreur lors de la récupération de l'utilisateur :", error);
    });
  }

    private isProfileComplete(profile: any): boolean{
      return!(
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


    ngOnDestroy(): void {
    // désabonner pour éviter les fuites de mémoire
    if (this.profileStatusSubscription) {
      this.profileStatusSubscription.unsubscribe();
    }
  }
  
}
