import { TestBed } from '@angular/core/testing';

import { FimagenService } from './fimagen.service';

describe('FimagenService', () => {
  let service: FimagenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FimagenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
