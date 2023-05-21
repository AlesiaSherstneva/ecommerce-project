import { TestBed } from '@angular/core/testing';

import { Luv2shopformService } from './luv2shopform.service';

describe('Luv2shopformService', () => {
  let service: Luv2shopformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Luv2shopformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
