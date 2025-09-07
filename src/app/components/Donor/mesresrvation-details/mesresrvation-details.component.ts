import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../../core/services/reservation/reservation.service';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mesresrvation-details',
  imports: [RouterModule,CommonModule],
  templateUrl: './mesresrvation-details.component.html',
  styleUrl: './mesresrvation-details.component.css'
})
export class MesresrvationDetailsComponent implements OnInit{

  reservationId : number | null = null;
  reservation : any;
  errorMessage: string | null = null;
  

  constructor(
    private reservationService : ReservationService, 
    private route : ActivatedRoute ,
    private router : Router
  ){}



  ngOnInit(): void {
    // Étape A : Récupérer l'ID de la réservation depuis l'URL
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');

      // Étape B : Valider si l'ID est un nombre valide
      if (idParam && !isNaN(Number(idParam))) {
        this.reservationId = Number(idParam);
        this.loadReservationDetails();
      } else {
        // Gérer le cas où l'ID est invalide (NaN, null, etc.)
        this.errorMessage = "ID de réservation invalide.";
        console.error('ID de réservation invalide : ', idParam);
        // Rediriger ou afficher une erreur
        this.router.navigate(['/donor/mes-reservations']);
      }
    });
  }

  loadReservationDetails(): void {
    if (this.reservationId === null) {
      return; // Ne pas appeler l'API si l'ID est null
    }

    // Étape C : Appeler le service pour obtenir les détails
    this.reservationService.getReservationById(this.reservationId).subscribe({
      next: (data) => {
        this.reservation = data;
        this.errorMessage = null; // Réinitialiser le message d'erreur
      },
      error: (err) => {
        // Gérer les erreurs de l'API (e.g., 404 Not Found)
        console.error('Erreur lors du chargement des détails de la réservation :', err);
        this.errorMessage = "Impossible de trouver les détails de cette réservation.";
      }
    });
  }

}
