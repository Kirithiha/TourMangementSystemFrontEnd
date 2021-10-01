import { TestBed } from '@angular/core/testing';

import { PackageItineraryService } from './package-itinerary.service';

describe('PackageItineraryService', () => {
  let service: PackageItineraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageItineraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
