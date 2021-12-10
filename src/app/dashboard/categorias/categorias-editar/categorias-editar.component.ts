import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category/category.interface';
import { CategoriasService } from '../categorias.service';
import fechas from '../../../data/fechas.json';
import { Opciones } from 'src/app/models/varios/varios.interface';
import { FimagenService } from 'src/app/services/fimagen.service';
import { UploadFileService } from 'src/app/shared/upload-file/upload-file.service';


@Component({
  selector: 'app-categorias-editar',
  templateUrl: '../../categorias/categorias-registrar/categorias-registrar.component.html',
  styleUrls: ['../../categorias/categorias-registrar/categorias-registrar.component.scss']
})
export class CategoriasEditarComponent implements OnInit {

  //public item = { name: 'Meal1', price: 10, qty: 10, status: 'Out Of Stock', longdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book type and scrambled it to make a type specimen book." };
  public url_imagen: string;
  public contactForm;
  public listadoFechas = fechas;
  public fechasActivas = [];
  public disabledDays: boolean = false;
  public _idCategoria: string;
  public optionsFile: any = { url_imagen: null, editar: true, size: '540 x 300' };
  public dataFile: any;


  constructor(private _route:Router,private router: ActivatedRoute, private service: CategoriasService, private formBuilder: FormBuilder, private fupload: UploadFileService) {

    this.contactForm = this.formBuilder.group({
      //id: [''],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      short_description: ['', [Validators.required]],
      //image: [''],
      //  products: [''],
      activated_dates: [''],
      // created_date: ['']
    });

  }


  ngOnInit(): void {
    this._idCategoria = this.router.snapshot.params.id;
    let opcion = this.router.snapshot.params.opcion;

    this.obtenerCategoria();

    /*this.listadoFechas.forEach((ele, index) => {
      this.datos(ele.id, ele.isChecked)
    })*/
    if (opcion == Opciones.DETALLE) {
      this.contactForm.disable();
      this.disabledDays = true;
    }

  }

  onSubmit() {
    console.log(this.contactForm);

    this.guardarCategoria()

  }

  obtenerCategoria(){
    this.service.getCategoryById(this._idCategoria).subscribe(res => {
      this.url_imagen = res.Category.image;
      this.optionsFile.url_imagen = res.Category.image;
      console.log(this.optionsFile)
      console.log('array', this.contactForm['controls'].activated_dates.value)
      if (res.Category.activated_dates.length > 0) {
        res.Category.activated_dates.forEach(element => {
          console.log('eleemme', element)
          // if (element) {
          this.listadoFechas.forEach((ele, index) => {
            if (element === ele.id) {
              ele.isChecked = true;
            }
          })
          //}
        });
      } else {

      }
      this.contactForm.patchValue(res.Category)
    })
  }

  guardarCategoria() {
    this.service.putCategoryById(this._idCategoria, this.contactForm.value).subscribe(res => {
      console.log('actualizando categoria', res)
       this.guardarImagen(this.dataFile);
    })
  }

  guardarImagen(event?) {
    console.log('guardando img', event, this._idCategoria)
    if (event) {
      this.fupload._subir_imagen(event, "categories", this._idCategoria).then((res: any) => {
        console.log('res', res)
        this._route.navigate(['/dash/categorias']) 
      }).catch(res => {
        // console.error(res);
      });
    }else{
      this._route.navigate(['/dash/categorias']) 
    }

  }

  // public productdetails = product;
  /* public setProduct(id: any) { 
     this.productdetails = product.filter((item: { id: any; }) => { return item.id == id });
   }
   ngAfterContentInit(): void {
     this.setProduct(this.router.snapshot.params.id);
   }*/


  datos(id: any, isChecked: any) {
    if (isChecked) {
      let parametro = this.listadoFechas.find(x => x.id == id).id;
      this.fechasActivas.push(parametro);
    } else {
      let removerParametro = this.fechasActivas.find(x => x == id);
      console.log('removerParamtro', removerParametro)
      if (removerParametro) {
        let index = this.fechasActivas.indexOf(removerParametro);
        this.fechasActivas.splice(index, 1);
      }
    }
    console.log('fechas activas', this.fechasActivas)
    this.contactForm['controls'].activated_dates.value = this.fechasActivas;
  }

  readFile(event) {
    console.log(event)
    this.dataFile = event;
  }





}
