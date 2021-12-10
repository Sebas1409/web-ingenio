import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasService } from './categorias.service';
import { CategoriasComponent } from './categorias.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CategoriasRegistrarComponent } from './categorias-registrar/categorias-registrar.component';
import { RouterModule } from '@angular/router';
import { CategoriasEditarComponent } from './categorias-editar/categorias-editar.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { SharedModule } from 'src/app/shared/shared.module';
import { UploadFileModule } from 'src/app/shared/upload-file/upload-file.module';



@NgModule({
  declarations: [CategoriasComponent, CategoriasRegistrarComponent, CategoriasEditarComponent],
  imports: [
    CommonModule,NgxPaginationModule,SharedModule,RouterModule,PipesModule,UploadFileModule,FormsModule,ReactiveFormsModule,NgBootstrapFormValidationModule.forRoot(),NgBootstrapFormValidationModule
  ],
  providers:[CategoriasService]
})
export class CategoriasModule { }
