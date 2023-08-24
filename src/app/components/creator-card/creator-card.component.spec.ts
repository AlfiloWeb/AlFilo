import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorCardComponent } from './creator-card.component';

describe('CreatorCardComponent', () => {
  let component: CreatorCardComponent;
  let fixture: ComponentFixture<CreatorCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatorCardComponent]
    });
    fixture = TestBed.createComponent(CreatorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
