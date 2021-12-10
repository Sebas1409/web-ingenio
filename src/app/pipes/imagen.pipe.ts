import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    let nueva_ruta:string;

    if(value){
      nueva_ruta = environment.url_imagen + '/' + value
    }

    return nueva_ruta;
  }

}
