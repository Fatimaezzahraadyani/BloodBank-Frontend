import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesReservationsDonorComponent } from './mes-reservations-donor.component';

describe('MesReservationsDonorComponent', () => {
  let component: MesReservationsDonorComponent;
  let fixture: ComponentFixture<MesReservationsDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesReservationsDonorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesReservationsDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
