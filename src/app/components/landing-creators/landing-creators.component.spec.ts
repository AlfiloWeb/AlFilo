import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingCreatorsComponent } from './landing-creators.component';

describe('LandingCreatorsComponent', () => {
  let component: LandingCreatorsComponent;
  let fixture: ComponentFixture<LandingCreatorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingCreatorsComponent]
    });
    fixture = TestBed.createComponent(LandingCreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
