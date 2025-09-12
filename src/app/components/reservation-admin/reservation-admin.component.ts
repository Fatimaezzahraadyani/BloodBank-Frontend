import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../core/services/reservation/reservation.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReservationCenter,ReservationD,ReservationDonor } from '../../core/services/reservation/reservation.service';

export interface Reservation {
  id: number;
  date: string;
  heure: string;
  donneur: Donneur;
  centreCollecte: CentreCollecte;
  statut: string;
}


export interface Donneur {
  id: number ;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  bloodType?: string;
  phone?: string;
  address?: string;
}

export interface CentreCollecte {
  id: number;
  name: string;
  adresse: string;
  ville: string;
}

@Component({
  selector: 'app-reservation-admin',
  standalone: true,
  imports: [CommonModule,RouterModule],
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
