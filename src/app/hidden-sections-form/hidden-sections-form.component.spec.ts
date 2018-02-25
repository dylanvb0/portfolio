import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenSectionsFormComponent } from './hidden-sections-form.component';

describe('HiddenSectionsFormComponent', () => {
  let component: HiddenSectionsFormComponent;
  let fixture: ComponentFixture<HiddenSectionsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiddenSectionsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenSectionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
