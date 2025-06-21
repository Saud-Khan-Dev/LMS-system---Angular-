import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStories } from './top-stories';

describe('TopStories', () => {
  let component: TopStories;
  let fixture: ComponentFixture<TopStories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopStories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopStories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
