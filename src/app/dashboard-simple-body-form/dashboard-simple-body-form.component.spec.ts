import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSimpleBodyFormComponent } from './dashboard-simple-body-form.component';

describe('DashboardSimpleBodyFormComponent', () => {
  let component: DashboardSimpleBodyFormComponent;
  let fixture: ComponentFixture<DashboardSimpleBodyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSimpleBodyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSimpleBodyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
