import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPackagesDetailsComponent } from './view-packages-details.component';

describe('ViewPackagesDetailsComponent', () => {
  let component: ViewPackagesDetailsComponent;
  let fixture: ComponentFixture<ViewPackagesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPackagesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPackagesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
