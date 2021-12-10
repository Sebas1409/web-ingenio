import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category/category.interface';
import { Product, ProductElement } from 'src/app/models/product/product.interface';
import { API_DEFINITIONS } from 'src/app/shared/+constantes/api-definitions.constant';

@Injectable()
export class ProductosService {

  constructor(private http:HttpClient) { }

  getAllCategories(){
    return this.http.get(API_DEFINITIONS.URL_CATEGORIES);
  }

  getAllProducts():Observable<Product>{
    return this.http.get(API_DEFINITIONS.URL_PRODUCTS);
  }

  postProduct(body,idCategory): Observable<Category>{
    return this.http.post(API_DEFINITIONS.URL_PRODUCT+'/'+idCategory,body)
  }

  getProductById(_id:string): Observable<Product>{
    return this.http.get(API_DEFINITIONS.URL_PRODUCT+'/'+_id)
  }

  putProductById(body:ProductElement,_id:string,): Observable<Product>{
    return this.http.put(API_DEFINITIONS.URL_PRODUCT+'/'+_id,body)
  }
}
