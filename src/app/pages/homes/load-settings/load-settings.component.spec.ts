import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadSettingsComponent } from './load-settings.component';

describe('LoadSettingsComponent', () => {
  let component: LoadSettingsComponent;
  let fixture: ComponentFixture<LoadSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
