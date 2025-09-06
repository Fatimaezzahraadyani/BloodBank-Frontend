import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




//interface pour la structure des données d'un centre
export interface CentreCollecte{
 id: number;
  name: string;
  adresse : string;
  ville : string;
}

@Injectable({
  providedIn: 'root'
})

export class CentreCollecteService {

  private apiUrl = 'http://localhost:8082/api/CentresCollecte';


  constructor(private http : HttpClient) { }

  getCentres() : Observable<CentreCollecte[]>{
    return this.http.get<CentreCollecte[]>(this.apiUrl);
  }
}
