import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPackageByTypeComponent } from './view-package-by-type.component';

describe('ViewPackageByTypeComponent', () => {
  let component: ViewPackageByTypeComponent;
  let fixture: ComponentFixture<ViewPackageByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPackageByTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPackageByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
