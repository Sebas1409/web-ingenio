import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RestaurantrightsidebarComponent } from './restaurantrightsidebar.component';

describe('RestaurantrightsidebarComponent', () => {
  let component: RestaurantrightsidebarComponent;
  let fixture: ComponentFixture<RestaurantrightsidebarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantrightsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantrightsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
