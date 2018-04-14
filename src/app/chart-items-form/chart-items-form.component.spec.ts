import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartItemsFormComponent } from './chart-items-form.component';

describe('ChartItemsFormComponent', () => {
  let component: ChartItemsFormComponent;
  let fixture: ComponentFixture<ChartItemsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartItemsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartItemsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
