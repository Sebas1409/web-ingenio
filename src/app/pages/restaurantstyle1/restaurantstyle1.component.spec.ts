import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Restaurantstyle1Component } from './restaurantstyle1.component';

describe('Restaurantstyle1Component', () => {
  let component: Restaurantstyle1Component;
  let fixture: ComponentFixture<Restaurantstyle1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Restaurantstyle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Restaurantstyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
