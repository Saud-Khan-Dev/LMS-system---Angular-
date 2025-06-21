import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Socities } from './societies';

describe('Socities', () => {
  let component: Socities;
  let fixture: ComponentFixture<Socities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Socities],
    }).compileComponents();

    fixture = TestBed.createComponent(Socities);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
