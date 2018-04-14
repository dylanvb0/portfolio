import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHorizontalBarChartBodyFormComponent } from './dashboard-horizontal-bar-chart-body-form.component';

describe('DashboardHorizontalBarChartBodyFormComponent', () => {
  let component: DashboardHorizontalBarChartBodyFormComponent;
  let fixture: ComponentFixture<DashboardHorizontalBarChartBodyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHorizontalBarChartBodyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHorizontalBarChartBodyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
