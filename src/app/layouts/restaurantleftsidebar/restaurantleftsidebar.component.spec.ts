import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RestaurantleftsidebarComponent } from './restaurantleftsidebar.component';

describe('RestaurantleftsidebarComponent', () => {
  let component: RestaurantleftsidebarComponent;
  let fixture: ComponentFixture<RestaurantleftsidebarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantleftsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantleftsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
