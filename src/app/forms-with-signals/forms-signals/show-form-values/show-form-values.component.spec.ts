import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFormValuesComponent } from './show-form-values.component';

describe('ShowFormValuesComponent', () => {
  let component: ShowFormValuesComponent;
  let fixture: ComponentFixture<ShowFormValuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowFormValuesComponent]
    });
    fixture = TestBed.createComponent(ShowFormValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
