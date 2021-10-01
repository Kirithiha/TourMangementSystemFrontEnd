import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPackagesListComponent } from './view-packages-list.component';

describe('ViewPackagesListComponent', () => {
  let component: ViewPackagesListComponent;
  let fixture: ComponentFixture<ViewPackagesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPackagesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPackagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
