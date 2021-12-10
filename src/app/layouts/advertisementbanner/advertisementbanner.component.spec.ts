import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdvertisementbannerComponent } from './advertisementbanner.component';

describe('AdvertisementbannerComponent', () => {
  let component: AdvertisementbannerComponent;
  let fixture: ComponentFixture<AdvertisementbannerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
