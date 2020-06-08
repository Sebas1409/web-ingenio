import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FmysqlService } from './fmysql.service';


@Injectable({
  providedIn: 'root'
})
export class FcorreosService {

  constructor(private fmysql: FmysqlService) { }

  envioMasivoCorreo(datos: any) {
    let promesa = new Promise((resolve, reject) => {
      let respuesta;
      this.fmysql.enviar_post(environment.api_correo._envio_masivo_correo, datos).subscribe((res: any) => {
        respuesta = res;

        if (respuesta) {
          resolve({ ok: res.ok, msg: res.msg });
        } else {
          reject({ ok: res.ok, msg: res.msg });
        }
      });
    });

    return promesa;
  }


}
