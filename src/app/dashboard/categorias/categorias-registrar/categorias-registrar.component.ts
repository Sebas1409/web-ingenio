import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from '../categorias.service';
import fechas from '../../../data/fechas.json';
import { FimagenService } from 'src/app/services/fimagen.service';
import { UploadFileService } from 'src/app/shared/upload-file/upload-file.service';


@Component({
  selector: 'app-categorias-registrar',
  templateUrl: './categorias-registrar.component.html',
  styleUrls: ['./categorias-registrar.component.scss']
})
export class CategoriasRegistrarComponent implements OnInit {

  //public item = { name:'Meal1', price: 10, qty: 10, status: 'Out Of Stock', longdesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book type and scrambled it to make a type specimen book." };
  public contactForm;
  public listadoFechas = fechas;
  public fechasActivas = [];
  public disabledDays: boolean = false;
  public _idCategoria: string;
  public optionsFile: any = { url_imagen: null, editar: false, size: '540 x 300' };
  public url_imagen: string;
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

    /*this.contactForm = new FormGroup({
     // id: new FormControl('', [Validators.required, Validators.minLength(10)]),
    // name: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]),
      id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      description: new FormControl(''),
      description_short: new FormControl(''),
      image: new FormControl(''),
      products: new FormControl('', [Validators.required]),
      activated_dates: new FormControl(''),
      created_date: new FormControl('')
    });*/



  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.contactForm);

    this.guardarCategoria()

  }

  obtenerCategoria() {
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
    this.service.postCategory(this.contactForm.value).subscribe(res => {
      console.log('registrando categoria', res)
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
    } else {
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
    this.dataFile = event;
  }


}
