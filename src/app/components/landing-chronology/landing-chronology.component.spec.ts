import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingChronologyComponent } from './landing-chronology.component';

describe('LandingChronologyComponent', () => {
  let component: LandingChronologyComponent;
  let fixture: ComponentFixture<LandingChronologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingChronologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingChronologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
