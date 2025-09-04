import { Component, OnInit } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReservationService } from '../../core/services/reservation/reservation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mes-reservations-donor',
  imports: [CommonModule, RouterModule],
  templateUrl: './mes-reservations-donor.component.html',
  styleUrl: './mes-reservations-donor.component.css'
})
export class MesReservationsDonorComponent implements OnInit {

  reservations : any [] = [];

  constructor(
    private reservationService : ReservationService  ){}

 
   ngOnInit(): void {
    const donorId = localStorage.getItem('userId'); // récupère l'ID stocké
    if (donorId) {
      this.reservationService.getReservationsByDonorId(Number(donorId)).subscribe({
        next: (data) => {
          this.reservations = data;
          console.log("Réservations du donneur :", data);
        },
        error: (err) => {
          console.error("Erreur lors de la récupération :", err);
        }
      });
    } else {
      console.error("Aucun userId trouvé dans localStorage");
    }
  }





}
