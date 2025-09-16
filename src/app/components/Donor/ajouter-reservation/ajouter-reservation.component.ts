import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../../core/services/reservation/reservation.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CentreCollecte } from '../../reservation-admin/reservation-admin.component';
import { CentreCollecteService } from '../../../core/services/centreCollecte/centre-collecte.service';

@Component({
  selector: 'app-ajouter-reservation',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './ajouter-reservation.component.html',
  styleUrl: './ajouter-reservation.component.css'
})
export class AjouterReservationComponent implements OnInit {

  //champs du formulaire
  centreCollecteId : number | null = null;
  date : string = '';
  heure : string = '';

  //Liste des centres 
  centres: CentreCollecte[] = [];

    // heures disponibles (fixes)
  heures: string[] = ['09:00', '10:30', '12:00', '14:00', '15:30'];

  constructor(
    private reservationService : ReservationService,
    private centreService : CentreCollecteService,
    private router : Router
  ){}


  ngOnInit(): void {
    this.loadCenters();
  }

  loadCenters(): void{
    this.centreService.getCentres().subscribe({
      next:(data)=>{
        this.centres = data ;
      },
      error:(err)=>{
        console.error('EErreur lors du chargement des centres de collecte :', err);
      }
    });
  }

  onSubmit(){

    const donorId = localStorage.getItem('userId');

      const parsedDonorId = donorId ? Number(donorId) : NaN;
      
    if(!donorId ||  isNaN(parsedDonorId) || this.centreCollecteId === null || !this.date || !this.heure){
      alert('Veuillez remplir tous les champs du formulaire');
      return;
    }

    const reservation = {
      date: this.date,
      heure: this.heure,
      statut: 'EN_ATTENTE',
      donneur: { id: parsedDonorId },
      centreCollecte: { id: this.centreCollecteId }
    };

    this.reservationService.ajouterReservation(reservation).subscribe({
      next:()=>{
        alert('Réservation ajoutée avec succès');
        this.router.navigate(['/donor/mes-reservations']);
      },
      error: (err)=>{
        console.error('Erreur lors de l’ajout :', err);
        alert('Impossible d’ajouter la réservation. Veuillez réessayer plus tard.');

      }
    });

  }
  
}
