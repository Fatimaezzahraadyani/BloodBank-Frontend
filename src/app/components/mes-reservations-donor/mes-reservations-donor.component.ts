import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  donorId! : number ;

  constructor(
    private reservationService : ReservationService,
    private route : ActivatedRoute
  ){}

 
  ngOnInit(): void {
  const storedUser = localStorage.getItem('userId');
  if (storedUser) {
    this.donorId = +storedUser;
    this.loadReservations();
  } else {
    console.warn("Aucun userId trouvé dans localStorage");
  }
}



  loadReservations(): void {
    this.reservationService.getReservationsByDonorId(this.donorId).subscribe({
      next: (data) => {
        this.reservations = data;
      },
      error: (err) => {
        console.error('Erreur chargement reservations:', err);
      }
    });
  }


}
