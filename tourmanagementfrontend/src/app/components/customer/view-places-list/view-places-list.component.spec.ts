import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlacesListComponent } from './view-places-list.component';

describe('ViewPlacesListComponent', () => {
  let component: ViewPlacesListComponent;
  let fixture: ComponentFixture<ViewPlacesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPlacesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlacesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
