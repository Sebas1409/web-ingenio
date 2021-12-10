import { Component, OnInit } from '@angular/core';
import { CategoriasService } from './categorias.service';
import data from '../../data/menu.json';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Category, CategoryClass } from 'src/app/models/category/category.interface';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  page: number = 1;
  public listadoCategorias:CategoryClass[] = [];
  public url_imagen = environment.url_imagen;

  constructor(private service:CategoriasService,private route:Router) { }

  ngOnInit(): void {
    this.service.getAllCategories().subscribe(res=>{
      console.log(res['Categories'])
      this.listadoCategorias = res['Categories'];
    })
  }

  getCategoria(item){
    this.route.navigate(['/dash/categorias/editar',item['_id']]) 
  }

}
