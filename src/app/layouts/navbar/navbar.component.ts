import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public nombre:string;
  public imagen:string;
  public logueado:string;

  constructor(private service:AuthService) { }

  ngOnInit(): void {
    this.nombre = this.service.getUsuario()? this.service.getUsuario().nombres : '';
    this.imagen =  this.service.getUsuario()?environment.url_imagen +'/'+this.service.getUsuario().imagen:'';
    this.logueado = this.service.getToken()?this.service.getToken():'';
    console.log(this.logueado)
  }

  cerrarSesion(){
    this.service.closeSesion();
    window.location.reload();
  }

}
