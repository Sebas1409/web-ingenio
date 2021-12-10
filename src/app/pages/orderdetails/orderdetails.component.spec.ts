import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderdetailsComponent } from './orderdetails.component';

describe('OrderdetailsComponent', () => {
  let component: OrderdetailsComponent;
  let fixture: ComponentFixture<OrderdetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
