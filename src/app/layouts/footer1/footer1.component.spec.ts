import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Footer1Component } from './footer1.component';

describe('Footer1Component', () => {
  let component: Footer1Component;
  let fixture: ComponentFixture<Footer1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Footer1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
