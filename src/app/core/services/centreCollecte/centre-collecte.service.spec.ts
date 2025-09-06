import { TestBed } from '@angular/core/testing';

import { CentreCollecteService } from './centre-collecte.service';

describe('CentreCollecteService', () => {
  let service: CentreCollecteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentreCollecteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
