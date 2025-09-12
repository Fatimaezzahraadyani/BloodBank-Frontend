import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  email: string;
  role: string;
  firstName?: string;
  lastName?: string;
}

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  //url de base d'auth backend Spring Security
  private apiUrl = 'http://localhost:8082/api/auth';
  private baseUrl = 'http://localhost:8082/api/auth/register';
  private Url = 'http://localhost:8082/api/donneurs'

  //cle de token
  private tokenKey = 'authToken';

  constructor(private http : HttpClient, private router : Router) { }

 login(data:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/login`,data);
  }

  getToken(): string | null {
  return localStorage.getItem(this.tokenKey);
}

  registerDonor(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, data);
  }


  getUserRole(): string | null {
  return localStorage.getItem('userRole');
}


  //  INFOS UTILISATEUR COURANT 

  getCurrentUser(): Observable<User> {
    const token = this.getToken();
    if (!token) {
      throw new Error('Aucun token trouvé');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<User>(`${this.Url}/me`, { headers });
  }


}








 /*register(userData: any): Observable<any> {
    // 1. Envoie une requête POST à l'API d'enregistrement.
    // L'URL complète est `${this.apiUrl}/register`.
    // L'objet `userData` est envoyé dans le corps de la requête.
    return this.http.post(`${this.apiUrl}/register/donor`, userData).pipe(
      // 2. 'tap' exécute des actions en cas de succès, sans modifier le flux de données.
      // C'est un bon endroit pour logguer la réussite ou effectuer une action après une inscription réussie,
      // comme la connexion automatique si votre backend le permet.
      tap(response => {
        console.log('Enregistrement réussi :', response);
        // Si votre backend renvoie un token après l'inscription (ce qui est moins courant),
        // vous pouvez le stocker ici:
        // if (response && response.token) {
        //   localStorage.setItem(this.tokenKey, response.token);
        // }
      }),
      // 3. 'catchError' intercepte les erreurs HTTP.
      // Par exemple, si l'email existe déjà, le backend renverra une erreur 4xx.
      catchError(error => {
        console.error('Erreur lors de l\'enregistrement :', error);
        
        // Initialisation d'un message d'erreur générique.
        let errorMessage = 'Une erreur inconnue est survenue lors de l\'enregistrement.';

        // Si le backend renvoie une erreur avec un corps de réponse JSON, on l'utilise.
        if (error.error && error.error.message) {
          errorMessage = error.error.message;
        } else if (error.status === 409) {
          // Gérer le cas d'un email déjà utilisé (Conflict)
          errorMessage = 'Cet email est déjà utilisé. Veuillez en choisir un autre.';
        }
        
        // 4. 'throwError' renvoie un Observable d'erreur que le composant appelant peut gérer.
        return throwError(() => new Error(errorMessage));
      })
    );
  }*/
