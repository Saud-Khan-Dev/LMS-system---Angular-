import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAcademic } from './non-academic';

describe('NonAcademic', () => {
  let component: NonAcademic;
  let fixture: ComponentFixture<NonAcademic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonAcademic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonAcademic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
