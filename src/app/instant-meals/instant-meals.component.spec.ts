import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantMealsComponent } from './instant-meals.component';

describe('InstantMealsComponent', () => {
  let component: InstantMealsComponent;
  let fixture: ComponentFixture<InstantMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstantMealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
