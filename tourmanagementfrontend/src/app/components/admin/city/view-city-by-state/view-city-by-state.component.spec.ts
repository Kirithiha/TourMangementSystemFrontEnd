import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCityByStateComponent } from './view-city-by-state.component';

describe('ViewCityByStateComponent', () => {
  let component: ViewCityByStateComponent;
  let fixture: ComponentFixture<ViewCityByStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCityByStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCityByStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
