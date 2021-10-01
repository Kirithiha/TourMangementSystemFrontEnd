import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPackageByCityComponent } from './view-package-by-city.component';

describe('ViewPackageByCityComponent', () => {
  let component: ViewPackageByCityComponent;
  let fixture: ComponentFixture<ViewPackageByCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPackageByCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPackageByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
