import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../../../components/reservation-admin/reservation-admin.component';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {


  private apiUrl = 'http://localhost:8082/api/rendezVous'; 
  private Url = 'http://localhost:8082/api/rendezVous/donneur/';

  constructor(private http : HttpClient) { }

  getReservations(): Observable<Reservation[]> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization' : `Bearer ${token}`
    });
    return this.http.get<Reservation[]>(`${this.apiUrl}/all`, {headers});
  }

    getReservationById(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.apiUrl}/${id}`);
  }

  getReservationsByDonorId(donorId: number): Observable<any[]> {
  return this.http.get<any[]>(`${this.Url}${donorId}`);
}



}