import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { ProductosEditarComponent } from './productos-editar/productos-editar.component';
import { ProductosRegistrarComponent } from './productos-registrar/productos-registrar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { UploadFileModule } from 'src/app/shared/upload-file/upload-file.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { ProductosService } from './productos.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ProductosComponent,
    ProductosEditarComponent,
    ProductosRegistrarComponent
  ],
  imports: [
    CommonModule,NgbModule,NgxPaginationModule,SharedModule,RouterModule,PipesModule,UploadFileModule,FormsModule,ReactiveFormsModule,NgBootstrapFormValidationModule.forRoot(),NgBootstrapFormValidationModule
  ],
  providers:[ProductosService]
})
export class ProductosModule { }
