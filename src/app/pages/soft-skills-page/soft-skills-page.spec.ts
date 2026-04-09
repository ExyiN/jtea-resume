import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftSkillsPage } from './soft-skills-page';

describe('SoftSkillsPage', () => {
  let component: SoftSkillsPage;
  let fixture: ComponentFixture<SoftSkillsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftSkillsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SoftSkillsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
