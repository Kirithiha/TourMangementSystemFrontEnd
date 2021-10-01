import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBookingByPendingsComponent } from './view-booking-by-pendings.component';

describe('ViewBookingByPendingsComponent', () => {
  let component: ViewBookingByPendingsComponent;
  let fixture: ComponentFixture<ViewBookingByPendingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBookingByPendingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBookingByPendingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
