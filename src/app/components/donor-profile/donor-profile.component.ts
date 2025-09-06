import { Component, OnInit } from '@angular/core';
import { DonorServiceService } from '../../core/services/donor/donor-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donor-profile',
  imports: [FormsModule, CommonModule],
  templateUrl: './donor-profile.component.html',
  styleUrl: './donor-profile.component.css'
})
export class DonorProfileComponent implements OnInit{

  profileData: any = {};
  donorId: number =0;

  constructor(private donorService : DonorServiceService){}

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
    this.donorService.updateProfile(this.donorId, this.profileData).subscribe({
      next: (response)=>{
        alert('Profile mis à jour avec succès !');
      },
      error: (err)=>{
        console.log('Error updating profile:', err);
        alert('échec de la mise à jour du profile')
      }
    });
  }

}
