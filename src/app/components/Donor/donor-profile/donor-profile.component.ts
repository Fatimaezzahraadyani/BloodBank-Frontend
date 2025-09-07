import { Component, OnInit } from '@angular/core';
import { DonorServiceService } from '../../../core/services/donor/donor-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProfileStateService } from '../../../core/services/profile-state/profile-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donor-profile',
  imports: [FormsModule, CommonModule],
  templateUrl: './donor-profile.component.html',
  styleUrl: './donor-profile.component.css'
})
export class DonorProfileComponent implements OnInit{

  profileData: any = {};
  donorId: number =0;

  constructor(
    private donorService : DonorServiceService,
    private profilStateSrice : ProfileStateService,
    private router : Router
  ){}

  ngOnInit(): void {
    //give connected user
    const storedId = localStorage.getItem('userId');
    if(storedId){
      this.donorId= Number(storedId);
      this.loadProfile();
    }else{
      console.log('Donor Id not found')
    }
  }

  loadProfile(): void{
    this.donorService.getProfile(this.donorId).subscribe({
      next: (data)=>{
        this.profileData = data;
      }, 
      error: (err)=>{
        console.error('Error loading profile',err)
      }
    });
  }

  onSubmit ():void{
        if (this.donorId && this.profileData) {
      this.donorService.updateProfile(this.donorId, this.profileData).subscribe({
        next: (response) => {
          alert('Profil mis à jour avec succès !');
          // Mettez à jour le statut du profil dans le service partagé
          this.profilStateSrice.updateProfilStatus(true); 
          this.router.navigate(['/donor-dashboard']);
        },
        error: (err) => {
        console.error('Echec de la mise à jour',err)
        }
      });
    }

  }

}
