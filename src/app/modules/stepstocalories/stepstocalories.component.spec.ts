import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepstocaloriesComponent } from './stepstocalories.component';

describe('StepstocaloriesComponent', () => {
  let component: StepstocaloriesComponent;
  let fixture: ComponentFixture<StepstocaloriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepstocaloriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepstocaloriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
