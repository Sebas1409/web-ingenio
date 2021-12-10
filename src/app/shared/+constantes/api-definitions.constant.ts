import { environment } from "src/environments/environment";

const API_BASE = environment.api;


export namespace API_DEFINITIONS {


  //AUTH SERVICE

  export const URL_LOGIN = `${API_BASE}/login`;

  export const URL_CATEGORIES = `${API_BASE}/categories`;

  export const URL_CATEGORY = `${API_BASE}/category`;

  export const URL_PRODUCT = `${API_BASE}/product`;

  export const URL_PRODUCTS = `${API_BASE}/products`;


 }
