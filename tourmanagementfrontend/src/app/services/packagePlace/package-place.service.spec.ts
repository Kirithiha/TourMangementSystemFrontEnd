import { TestBed } from '@angular/core/testing';

import { PackagePlaceService } from './package-place.service';

describe('PackagePlaceService', () => {
  let service: PackagePlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackagePlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
