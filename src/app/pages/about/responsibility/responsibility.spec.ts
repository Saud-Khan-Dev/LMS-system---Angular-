import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Responsibility } from './responsibility';

describe('Responsibility', () => {
  let component: Responsibility;
  let fixture: ComponentFixture<Responsibility>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Responsibility]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Responsibility);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
