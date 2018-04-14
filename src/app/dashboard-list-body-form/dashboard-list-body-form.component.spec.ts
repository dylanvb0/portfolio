import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardListBodyFormComponent } from './dashboard-list-body-form.component';

describe('DashboardListBodyFormComponent', () => {
  let component: DashboardListBodyFormComponent;
  let fixture: ComponentFixture<DashboardListBodyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardListBodyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardListBodyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
