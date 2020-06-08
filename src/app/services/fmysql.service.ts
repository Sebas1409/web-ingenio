import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
export interface respuestaAPI {
  ok?: boolean,
  error?: boolean,
  sql?: string,
  cantidad?: number,
  data?: any[],
  msg?: string,
  id?: number,
  nombre?: string
}

@Injectable({
  providedIn: 'root'
})
export class FmysqlService {

  constructor(private http: HttpClient) { }

  enviar_post(urlapi: string, item: any) {
    let url = environment.url_hosting + urlapi;
    console.warn("URL API: [" + url + "]");
    let ndata = JSON.stringify(item);
    return this.http.post<respuestaAPI>(url, ndata);
  }
}
