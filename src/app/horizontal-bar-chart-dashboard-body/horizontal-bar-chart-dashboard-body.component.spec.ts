import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalBarChartDashboardBodyComponent } from './horizontal-bar-chart-dashboard-body.component';

describe('HorizontalBarChartDashboardBodyComponent', () => {
  let component: HorizontalBarChartDashboardBodyComponent;
  let fixture: ComponentFixture<HorizontalBarChartDashboardBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalBarChartDashboardBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalBarChartDashboardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
