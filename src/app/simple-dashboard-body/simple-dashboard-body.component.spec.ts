import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDashboardBodyComponent } from './simple-dashboard-body.component';

describe('SimpleDashboardBodyComponent', () => {
  let component: SimpleDashboardBodyComponent;
  let fixture: ComponentFixture<SimpleDashboardBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDashboardBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDashboardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
