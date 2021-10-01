import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagestatesComponent } from './managestates.component';

describe('ManagestatesComponent', () => {
  let component: ManagestatesComponent;
  let fixture: ComponentFixture<ManagestatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagestatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagestatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
