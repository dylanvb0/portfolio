import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenSectionFormComponent } from './hidden-section-form.component';

describe('HiddenSectionFormComponent', () => {
  let component: HiddenSectionFormComponent;
  let fixture: ComponentFixture<HiddenSectionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiddenSectionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenSectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
