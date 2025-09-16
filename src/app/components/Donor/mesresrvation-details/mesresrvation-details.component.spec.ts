import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesresrvationDetailsComponent } from './mesresrvation-details.component';

describe('MesresrvationDetailsComponent', () => {
  let component: MesresrvationDetailsComponent;
  let fixture: ComponentFixture<MesresrvationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesresrvationDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesresrvationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
