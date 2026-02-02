import { TestBed } from '@angular/core/testing';

import { TechnoService } from './techno.service';

describe('TechnoServiceService', () => {
  let service: TechnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
