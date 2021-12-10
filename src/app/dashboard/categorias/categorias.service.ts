import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, CategoryClass } from 'src/app/models/category/category.interface';
import { API_DEFINITIONS } from 'src/app/shared/+constantes/api-definitions.constant';
import { environment } from 'src/environments/environment';

@Injectable()

export class CategoriasService {

  constructor(private http: HttpClient) { }

  getAllCategories(){
    return this.http.get(API_DEFINITIONS.URL_CATEGORIES)
  }

  getAllCategoriesActivated():Observable<CategoryClass[]>{
    return this.http.get<CategoryClass[]>(API_DEFINITIONS.URL_CATEGORIES+'/activated');
  }

  getCategoryById(_id:string): Observable<Category>{
    return this.http.get(API_DEFINITIONS.URL_CATEGORY+'/'+_id)
  }

  putCategoryById(_id:string,body:Category): Observable<Category>{
    return this.http.put(API_DEFINITIONS.URL_CATEGORY+'/'+_id,body)
  }

  postCategory(body:Category): Observable<Category>{
    return this.http.post(API_DEFINITIONS.URL_CATEGORY,body)
  }
}
