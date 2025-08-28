import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../../../components/reservation-admin/reservation-admin.component';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {


  private apiUrl = 'http://localhost:8082/api/rendezVous'; 

  constructor(private http : HttpClient) { }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/all`);
  }
}