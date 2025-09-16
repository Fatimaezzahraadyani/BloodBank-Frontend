import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileStateService {

  private profileSatusSource = new BehaviorSubject<boolean>(false)
  currentProfilStatus = this.profileSatusSource.asObservable();

  constructor() { }

  updateProfilStatus(isComplete : boolean){
    this.profileSatusSource.next(isComplete);
  }
}
