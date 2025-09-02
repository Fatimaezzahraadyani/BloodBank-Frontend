import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,RouterModule } from '@angular/router';
import { ReservationService } from '../../core/services/reservation/reservation.service';
import { Reservation } from '../reservation-admin/reservation-admin.component';

@Component({
  selector: 'app-reservation-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './reservation-details.component.html',
  styleUrl: './reservation-details.component.css'
})
export class ReservationDetailsComponent implements OnInit {

   reservation: Reservation | null = null;
  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService
  ) { }

  ngOnInit(): void {
    //extrait la valeur du paramètre de l'URL id
    const id = this.route.snapshot.paramMap.get('id');
    //vérifier l"esiqtence de l'id
        if (id) {
      this.reservationService.getReservationById(+id).subscribe({     //+convertir la chaine de caractère
        next: (data) => {
          this.reservation = data;
        },
        error: (err) => {
          console.error('Erreur lors du chargement des détails : ', err);
        }
      });
    }
  }

}
