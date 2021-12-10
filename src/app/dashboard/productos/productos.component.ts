import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category/category.interface';
import { Product, ProductElement } from 'src/app/models/product/product.interface';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public listadoProductos: ProductElement[] = [];
  page: number = 1;


  constructor(private service: ProductosService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.service.getAllProducts().subscribe(res => {
      console.log(res.products)
      this.listadoProductos = res.products;
    })
  }

}
