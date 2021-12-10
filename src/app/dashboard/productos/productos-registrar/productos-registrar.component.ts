import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, CategoryClass } from 'src/app/models/category/category.interface';
import { Opciones } from 'src/app/models/varios/varios.interface';
import { UploadFileService } from 'src/app/shared/upload-file/upload-file.service';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-productos-registrar',
  templateUrl: './productos-registrar.component.html',
  styleUrls: ['./productos-registrar.component.css']
})
export class ProductosRegistrarComponent implements OnInit {

  public optionsFile: any = { url_imagen: null, editar: false };
  public dataFile: any;
  public contactForm;
  public tag: string;
  public idCategory: string;
  public _idProducto: string;
  public listadoImagenes = [];


  public listadoCategorias: CategoryClass[] = [];

  constructor(private _route:Router,private formBuilder: FormBuilder, private service: ProductosService,private router: ActivatedRoute, private fupload: UploadFileService) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: [''],
      price: [''],
      offer_price: [''],
      quantity: [''],
      sku: ['', [Validators.required]],
      details: [''],
      lb: [''],
      oz: [''],
      text_offer: [''],
      image: [''],
      tags: [['churrasco', 'churrasco 1', 'churrasco 2', 'churrasco 4']],
      activated: [true]
    });
  }

  ngOnInit(): void {
    this.getCategories()
    this._idProducto = this.router.snapshot.params.id;
    let opcion = this.router.snapshot.params.opcion;

    console.log('opcion',opcion)
    if(this._idProducto){
      this.obtenerProducto();
    }

    if (opcion == Opciones.DETALLE) {
      this.contactForm.disable();
     // this.disabledDays = true;
    }
  }

  readFile(event) {
    this.dataFile = event;
  }

  onSubmit() {
    console.log(this.contactForm.value);
    if(this._idProducto){
      this.updateProduct();
    }else{
      this.addProduct();
    }
  }

  getCategories() {
    this.service.getAllCategories().subscribe(res => {
      this.listadoCategorias = res['Categories'];
    })
  }

  seleccionarCatgeoria(event) {
    this.idCategory = event.target.value;
  }

  deleteTag(index) {
    this.contactForm['controls'].tags.value.splice(index, 1);
  }

  addTag() {
    let newTag = this.tag; // this.contactForm['controls'].tags.value;
    if (newTag) {
      this.contactForm['controls'].tags.value.push(newTag);
      this.tag = null;
    }

  }

  addProduct(){
    this.service.postProduct(this.contactForm.value,this.idCategory).subscribe(res=>{
      console.log(res);
    })
  }
  updateProduct() {
    this.service.putProductById(this.contactForm.value,this._idProducto).subscribe(res => {
      console.log('actualizando producto', res)
      this.guardarImagen(this.dataFile);
    })
  }

  guardarImagen(event?) {
    console.log('guardando img', event, this._idProducto)
    if (event) {
      this.fupload._subir_imagen(event, "products", this._idProducto).then((res: any) => {
        console.log('res', res)
        this._route.navigate(['/dash/productos']) 
      }).catch(res => {
        // console.error(res);
      });
    }else{
      this._route.navigate(['/dash/productos']) 
    }

  }

  obtenerProducto(){
    this.service.getProductById(this._idProducto).subscribe(res => {
      console.log(res.product)
    /*  this.url_imagen = res.Category.image;
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

      }*/
      this.optionsFile.url_imagen = res.product['uploads'][0].image;
      this.listadoImagenes = res.product['uploads'];
      this.idCategory = res.product['category']._id;
    //  this.seleccionarCatgeoria(this.idCategory);
      this.contactForm.patchValue(res.product);
    })
  }
}
