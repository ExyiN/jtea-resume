import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesPage } from './hobbies-page';

describe('HobbiesPage', () => {
  let component: HobbiesPage;
  let fixture: ComponentFixture<HobbiesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HobbiesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(HobbiesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
