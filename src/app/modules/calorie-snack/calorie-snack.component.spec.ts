import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorieSnackComponent } from './calorie-snack.component';

describe('CalorieSnackComponent', () => {
  let component: CalorieSnackComponent;
  let fixture: ComponentFixture<CalorieSnackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalorieSnackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalorieSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
