import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookingsCustomerComponent } from './view-bookings-customer.component';

describe('ViewBookingsCustomerComponent', () => {
  let component: ViewBookingsCustomerComponent;
  let fixture: ComponentFixture<ViewBookingsCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBookingsCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookingsCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
