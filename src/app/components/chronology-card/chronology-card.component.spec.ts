import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronologyCardComponent } from './chronology-card.component';

describe('ChronologyCardComponent', () => {
  let component: ChronologyCardComponent;
  let fixture: ComponentFixture<ChronologyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChronologyCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChronologyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
