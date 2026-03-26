import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleThemeButton } from './toggle-theme-button';

describe('ToggleThemeButton', () => {
  let component: ToggleThemeButton;
  let fixture: ComponentFixture<ToggleThemeButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleThemeButton],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleThemeButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
