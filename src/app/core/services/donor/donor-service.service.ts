import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// creer interface pour les donnees de profil 
export interface DonorProfile{
  id: number;
  firstName: string;
  email : string;
  bloodType: string | null;
  birthdate: string | null; 
  weight: number | null;
  maladieHistory: string | null;
  phone: string | null;
  address: string | null;
  maladiesChroniques: string | null;
  priseDeMedicaments: boolean | null;
  chirurgiesRecentes: boolean | null;

}
@Injectable({
  providedIn: 'root'
})

export class DonorServiceService {
  private apiUrl = 'http://localhost:8082/api/donneurs'

  constructor(private http : HttpClient) { }

  getProfile(donorId: number): Observable<DonorProfile>{
    return this.http.get<DonorProfile>(`${this.apiUrl}/${donorId}/profile`);
  }

  updateProfile(donorId: number, profileData: any): Observable<DonorProfile>{
    return this.http.put<DonorProfile>(`${this.apiUrl}/${donorId}/profile`, profileData)
  }
}
