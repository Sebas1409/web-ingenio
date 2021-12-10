import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosRegistrarComponent } from './productos-registrar.component';

describe('ProductosRegistrarComponent', () => {
  let component: ProductosRegistrarComponent;
  let fixture: ComponentFixture<ProductosRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosRegistrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
