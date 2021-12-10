import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SharedModule } from '../shared/shared.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ProductosModule } from './productos/productos.module';



@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CategoriasModule,
    ProductosModule
  ]
})
export class DashboardModule { }
