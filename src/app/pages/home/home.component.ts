import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/dashboard/categorias/categorias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public closeBanner : boolean | undefined;
  public listadoCategorias = [];
  constructor(private service:CategoriasService) { }
  toggleBanner(){
    this.closeBanner = !this.closeBanner;
  }

  ngOnInit(): void {
    this.service.getAllCategoriesActivated().subscribe(res=>{
      console.log(res)
     this.listadoCategorias = res;
    })
  }

}
