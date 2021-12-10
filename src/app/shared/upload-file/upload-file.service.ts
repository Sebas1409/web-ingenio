import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()

export class UploadFileService {

  constructor(private http: HttpClient) { }

  _subir_imagen(event, nombre_carpeta, id?) {
  
    let nom_carpeta = "" + nombre_carpeta;
    let promesa = new Promise((resolve, reject) => {
    
      const file = <File>event.target.files[0];
    
      let peso_mb = file.size / (1024 * 1000);
      //this.funcion.iniciar_loader();
   
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
        
        formData.append('img', file, file.name);

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
            if (response) {
              // let url = environment.url_imagen + environment.uploads._url + response.carpeta + '/' + response.nombre;
               resolve({ ok: true, msg: url });
              // this.funcion.mostrar_snack("Imagen cargada correctamente");
             } else {
               reject({ ok: false, msg: 'Ocurrio un error' });
              //   this.funcion.mostrar_snack("Error al subir la imagen");
             }
          }
        );
      }

    });

    return promesa;

  }
}
