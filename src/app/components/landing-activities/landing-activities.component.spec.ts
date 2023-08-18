import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingActivitiesComponent } from './landing-activities.component';

describe('LandingActivitiesComponent', () => {
  let component: LandingActivitiesComponent;
  let fixture: ComponentFixture<LandingActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
