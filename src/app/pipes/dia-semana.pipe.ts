import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diaSemana'
})
export class DiaSemanaPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {

    let dia: string;
    console.log('dia', value)

      switch (value) {
        case 0:
          dia = 'Domingo';
          break;
        case 1:
          dia = 'Lunes';
          break;
        case 2:
          dia = 'Martes';
          break;
        case 3:
          dia = 'Miercoles';
          break;
        case 4:
          dia = 'Jueves';
          break;
        case 5:
          dia = 'Viernes';
          break;
        case 6:
          dia = 'Sábado';
          break;

        default:
          dia = 'Not found';
          break;
      }
    

    return dia;
  }

}
