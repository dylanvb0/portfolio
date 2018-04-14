import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartItemFormComponent } from './chart-item-form.component';

describe('ChartItemFormComponent', () => {
  let component: ChartItemFormComponent;
  let fixture: ComponentFixture<ChartItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
