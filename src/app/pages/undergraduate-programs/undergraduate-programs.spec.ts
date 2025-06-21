import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndergraduatePrograms } from './undergraduate-programs';

describe('UndergraduatePrograms', () => {
  let component: UndergraduatePrograms;
  let fixture: ComponentFixture<UndergraduatePrograms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UndergraduatePrograms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UndergraduatePrograms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
