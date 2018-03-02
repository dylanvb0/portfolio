import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDashboardBodyComponent } from './list-dashboard-body.component';

describe('ListDashboardBodyComponent', () => {
  let component: ListDashboardBodyComponent;
  let fixture: ComponentFixture<ListDashboardBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDashboardBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDashboardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
