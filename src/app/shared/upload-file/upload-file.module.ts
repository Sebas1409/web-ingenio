import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { UploadFileService } from './upload-file.service';
import { UploadFileComponent } from './upload-file.component';



@NgModule({
  declarations: [UploadFileComponent],
  imports: [
    CommonModule,PipesModule
  ],
  providers:[UploadFileService],
  exports:[UploadFileComponent]
})
export class UploadFileModule { }
