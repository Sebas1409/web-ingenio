import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FmysqlService } from './services/fmysql.service';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FcorreosService } from './services/fcorreos.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { routes } from './app.route';


const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: 'enabled'
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,BrowserModule,FormsModule,HttpClientModule, RouterModule.forRoot(routes,routerOptions)
  ],
  providers: [FmysqlService,FcorreosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
