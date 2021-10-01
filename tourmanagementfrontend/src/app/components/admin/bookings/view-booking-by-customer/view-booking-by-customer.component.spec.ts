import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookingByCustomerComponent } from './view-booking-by-customer.component';

describe('ViewBookingByCustomerComponent', () => {
  let component: ViewBookingByCustomerComponent;
  let fixture: ComponentFixture<ViewBookingByCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBookingByCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookingByCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
