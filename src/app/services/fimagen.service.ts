import { Injectable } from '@angular/core';
//import { FmysqlService } from './fmysql.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ImagenPipe } from '../pipes/imagen.pipe';
import { Observable } from 'rxjs';
//import { MatSnackBar } from '@angular/material';
//import { FuncionesService } from './funciones.service';

@Injectable()

export class FimagenService {

  constructor(private http: HttpClient) { }

  _subir_imagen(event: FileList, nombre_carpeta, id?) {
    let nom_carpeta = "" + nombre_carpeta;
    let promesa = new Promise((resolve, reject) => {
      const file:File = event.item(0);
      console.log('file', file)
      let peso_mb = file.size / (1024 * 1000);
      //this.funcion.iniciar_loader();
      console.log('peso', peso_mb)
      if (peso_mb > 1.5) {
        console.error("Mucho pesa :/");
        // this.funcion.mostrar_snack("La Imágen pesa mucho, el peso maximo es de 1.5 Mb");
        reject({ ok: false, msg: 'Mucho pesa' });
      } else if (file.type.split('/')[0] !== 'image') {
        // this.funcion.mostrar_snack("El archivo seleccionado no es una imagen");
        console.error('Solo Imagenes');
        reject({ ok: false, msg: 'Solo imagenes' });
      } else {

        const formData = new FormData();
        // formData.append('ubicacion', nom_carpeta);
        console.log(formData)

        formData.append('img', file);

        console.log(formData)


        const headers = new HttpHeaders().set('Content-Type', []);
        var response;
        let url: string;
        url = environment.api + '/upload/' + nombre_carpeta + '/' + id;
        this.http.post(url, formData, {
          headers,
          responseType: 'json'
        }).subscribe(


          /*snap => {



          //console.log(snap);
          let res: any = snap;
          if (res.ok) {
            let url = environment.url_hosting + environment.uploads._url + res.carpeta + '/' + res.nombre;
            resolve({ ok: true, msg: url });
            this.funcion.mostrar_snack("Imagen cargada correctamente");

          } else {
            reject({ ok: false, msg: 'Ocurrio un error' });
            this.funcion.mostrar_snack("Error de red, la imagen no se completo");

          }

          }*/


          data => response = data,
          err => {
            reject({ ok: false, msg: 'Ocurrio un error' });
            //this.funcion.mostrar_snack("Error de red, la imagen no se completo");
          },
          () => {
            /* if (response) {
               let url = environment.url_imagen + environment.uploads._url + response.carpeta + '/' + response.nombre;
               resolve({ ok: true, msg: url });
               this.funcion.mostrar_snack("Imagen cargada correctamente");
             } else {
               reject({ ok: false, msg: 'Ocurrio un error' });
               this.funcion.mostrar_snack("Error al subir la imagen");
             }*/
          }
        );
      }

    });

    return promesa;

  }

  _subir_imagen1(event, nombre_carpeta, id?: any): Promise<any> {

    const file = <File>event.target.files[0];
    console.log('file', file)

    let url: string;
    url = environment.api + '/upload/' + nombre_carpeta + '/' + id;

    const formData = new FormData();
    formData.append('img', file, file.name);

    return this.http.post(url, formData).toPromise()

   // return this.http.post(`http://boca2.herokuapp.com/api/upload/categories/61a3b9d1b2da8e0016f2cef4`, id).toPromise();
  }





}