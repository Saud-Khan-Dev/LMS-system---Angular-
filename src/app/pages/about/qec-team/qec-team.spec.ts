import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QecTeam } from './qec-team';

describe('QecTeam', () => {
  let component: QecTeam;
  let fixture: ComponentFixture<QecTeam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QecTeam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QecTeam);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
