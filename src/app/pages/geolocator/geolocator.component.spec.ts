import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GeolocatorComponent } from './geolocator.component';

describe('GeolocatorComponent', () => {
  let component: GeolocatorComponent;
  let fixture: ComponentFixture<GeolocatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolocatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
