import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDetailsComponent } from './manage-details.component';

describe('ManageDetailsComponent', () => {
  let component: ManageDetailsComponent;
  let fixture: ComponentFixture<ManageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
