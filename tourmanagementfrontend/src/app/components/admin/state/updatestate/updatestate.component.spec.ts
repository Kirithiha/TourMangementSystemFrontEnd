import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestateComponent } from './updatestate.component';

describe('UpdatestateComponent', () => {
  let component: UpdatestateComponent;
  let fixture: ComponentFixture<UpdatestateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatestateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
