import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFair } from './fun-fair';

describe('FunFair', () => {
  let component: FunFair;
  let fixture: ComponentFixture<FunFair>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunFair]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunFair);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
