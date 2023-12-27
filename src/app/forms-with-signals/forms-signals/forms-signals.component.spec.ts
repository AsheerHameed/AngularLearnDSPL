import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsSignalsComponent } from './forms-signals.component';

describe('FormsSignalsComponent', () => {
  let component: FormsSignalsComponent;
  let fixture: ComponentFixture<FormsSignalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsSignalsComponent]
    });
    fixture = TestBed.createComponent(FormsSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
