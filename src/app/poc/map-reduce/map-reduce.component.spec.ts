import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapReduceComponent } from './map-reduce.component';

describe('MapReduceComponent', () => {
  let component: MapReduceComponent;
  let fixture: ComponentFixture<MapReduceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapReduceComponent]
    });
    fixture = TestBed.createComponent(MapReduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
