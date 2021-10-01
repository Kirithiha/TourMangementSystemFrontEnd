import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookingByPackageComponent } from './view-booking-by-package.component';

describe('ViewBookingByPackageComponent', () => {
  let component: ViewBookingByPackageComponent;
  let fixture: ComponentFixture<ViewBookingByPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBookingByPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookingByPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
