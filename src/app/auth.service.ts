import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, Subject } from 'rxjs';
import { API_DEFINITIONS } from "./shared/+constantes/api-definitions.constant";
import { Account, Logueado, Usuario } from "./models/usuario/usuario.interface";
// import { ISesionInfo, IUsuarioDto, IUsuario } from './shared/user/login-info/login-info.interface';
// import * as moment from 'moment';
// import { IMenu } from './shared/layout/menu/menu.interface';
// import { ResponseModel } from "./shared/models/ResponseModel";
// import { Terminos } from "./shared-mgr/formato-hoja/terminos.interface";
// import { API_DEFINITIONS } from "./shared/+constantes/api-definitions.constant";
// import { TIPO_CONFIGURACION } from "./shared/+constantes/variables-enum";


const CODIGO_ALTERNO_APP: string = 'MIRANDA';
@Injectable()
export class AuthService {

  // public baseUrl_sinRest = environment.urlBase.rulesWithoutRest;

  // public baseUrl: string = environment.urlBase.rules;
  // public baseUrlAyuda = environment.urlBase.ayuda;
  public iconoGeneral:string;
  public loadingGeneal:boolean=true;
  public nombreApp:string='';
  public autorizado;

  //TODO: REEMPLAZAR POR NUEVO SERVICIO DE CHECKEO DE LOGIN
  // public RulesURL = environment.urlBase.rules;
  public fechaActualServer = new Subject<string>();
  public tituloAplicacion = new Subject<string>();

  constructor(private http: HttpClient) { }

  public login(payload): Observable<Usuario> {
    // let token = AES2.Encrypt(payload.clave, environment.secretKeyAes);
    // let formatedToken = token.replace(/\+/g,'xMl3Jk').replace(/\//g,'Por21Ld').replace(/\=/g,'Ml32');
    // const parametros = new HttpParams().
    //   set('email', payload.email).
    //   set('password', payload.password);
    return this.http.post(API_DEFINITIONS.URL_LOGIN, payload)
  }


  public setSession(user: any, token: string) {
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(user));
  }


  public setReintentosReload(reintentos: number) {
    localStorage.setItem(`reintentos_${CODIGO_ALTERNO_APP}`, reintentos.toString());
  }

  public getUsuario(): Logueado {
    const usu: Logueado = localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):'';
    return usu;
  }

  public getUsuarioFoto(): any {
    return JSON.parse(localStorage.getItem('mgr_usuario_foto'));
    // return '';
  }

  public setUsuarioFoto(foto: string) {
    localStorage.setItem('mgr_usuario_foto', JSON.stringify(foto))
  }

  public getMenus(): any[] {
    return JSON.parse(localStorage.getItem("mgr_Menus"));
  }

  public getToken() {
    return JSON.parse(localStorage.getItem("token"));
  }

  public closeSesion(){
    localStorage.removeItem("user");
    localStorage.removeItem("token");

  }




}
