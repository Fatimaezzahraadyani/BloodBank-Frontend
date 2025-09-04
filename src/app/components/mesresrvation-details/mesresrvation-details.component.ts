import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../core/services/reservation/reservation.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mesresrvation-details',
  imports: [RouterModule,CommonModule],
  templateUrl: './mesresrvation-details.component.html',
  styleUrl: './mesresrvation-details.component.css'
})
export class MesresrvationDetailsComponent implements OnInit{

  reservationId! : number;
  reservation : any;

  constructor(private reservationService : ReservationService, private route : ActivatedRoute ){}


  ngOnInit(): void {
    this.reservationId = Number(this.route.snapshot.paramMap.get('id'));

    this.reservationService.getReservationById(this.reservationId).subscribe({
      next:(res) => this.reservation = res,
      error:(err) => console.error(err)
    });
    
  }

}
