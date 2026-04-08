import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardSkillsPage } from './hard-skills-page';

describe('HardSkillsPage', () => {
  let component: HardSkillsPage;
  let fixture: ComponentFixture<HardSkillsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HardSkillsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(HardSkillsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
