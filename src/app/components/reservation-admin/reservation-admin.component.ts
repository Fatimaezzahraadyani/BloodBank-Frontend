import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../core/services/reservation/reservation.service';
import { CommonModule } from '@angular/common';

export interface Reservation {
  id: number;
  donneurId: number;
  centree: string;
  date: string;
  heure: string;
  statut: string;
}

@Component({
  selector: 'app-reservation-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservation-admin.component.html',
  styleUrl: './reservation-admin.component.css'
})
export class ReservationAdminComponent implements OnInit {

  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe({
      next: (data) => {
        this.reservations = data;
        console.log("data : ", data);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des réservations : ', err);
      }
    });
  }
}
