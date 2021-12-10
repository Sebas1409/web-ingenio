import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UploadFileService } from './upload-file.service';

@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  public url_imagen: string;
  public editar: boolean;
  public nombre_imagen: string;
  public id;
  public imgTemporal: boolean = false;
  public size: string;
  @Output () readFile: EventEmitter<any> = new EventEmitter();

  @Input() set optionsFile(option: any) {
    setTimeout(() => {
      console.log('option', option)
      this.url_imagen = option.url_imagen;
      this.editar = option.editar;
      this.size = option.size;
    }, 1000);
  };

  constructor(private fupload: UploadFileService) {

  }

  ngOnInit(): void { }

  visualizarImgTemporal(event) {
    this.url_imagen = null;
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    this.imgTemporal = true;
    reader.onload = () =>
      this.url_imagen = reader.result as string;
    reader.readAsDataURL(file)
    this.readFile.emit(event);
  }

 
  seleccionar_archivo(event) {
    this.visualizarImgTemporal(event);
  }

}
