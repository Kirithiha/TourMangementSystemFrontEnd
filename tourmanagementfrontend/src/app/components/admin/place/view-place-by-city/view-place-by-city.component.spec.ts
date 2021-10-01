import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlaceByCityComponent } from './view-place-by-city.component';

describe('ViewPlaceByCityComponent', () => {
  let component: ViewPlaceByCityComponent;
  let fixture: ComponentFixture<ViewPlaceByCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPlaceByCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlaceByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
