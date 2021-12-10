import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExdealsComponent } from './exdeals.component';

describe('ExdealsComponent', () => {
  let component: ExdealsComponent;
  let fixture: ComponentFixture<ExdealsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExdealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
