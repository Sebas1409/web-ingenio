import { Component, OnInit } from '@angular/core';
import { FcorreosService } from './services/fcorreos.service';
import { environment } from 'src/environments/environment';
declare let $:any;
import Typed from 'typed.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'web-ingenio';
  item={
    nombres:null,
    correo:null,
    asunto:null,
    descripcion:null
  }
  login_loading: boolean = false;
  public secciones: Array<string> = ['Nosotros','NuestrosServicios','Contáctano'];
  constructor(private fcorreo:FcorreosService){}
  ngOnInit(){

    $(document).ready(function () {
      var options = {
        strings: [
            '"Juntos podemos hacer grandes cosas"',
            '"Inventamos con prontitud, solucionamos con facilidad"',
            '"Pensar cosas nuevas, hacer cosas nuevas"'],
        typeSpeed: 80, //80
        backSpeed: 80, //80
        backDelay: 800, //2000
        startDelay: 100, //500
        loop: true,
        showCursor: true
    }
      var typed = new Typed(".element", options);

      let pxShow = 600; // height on which the button will show
      let scrollSpeed = 500; // how slow / fast you want the button to scroll to top.

      $(window).scroll(function(){
       if($(window).scrollTop() >= pxShow){
        $("#backtotop").addClass('visible');
       } else {
        $("#backtotop").removeClass('visible');
       }
      });

      $('#backtotop a').on('click', function(){
       $('html, body').animate({scrollTop:0}, scrollSpeed);
       return false;
      });
    });
  }

  subir(){
    document.documentElement.scrollTop=0;
  }

  enviar_mensaje(){
    this.login_loading = true;
    if (this.item.nombres == null || this.item.correo == null || this.item.descripcion == null || this.item.asunto == null ||
      this.item.asunto == "" || this.item.correo == "" || this.item.descripcion == "" || this.item.asunto == "") {
      alert('Tu mensaje no fue enviado, Completar datos!!');
    }else{
      let enviar ={
        mi_correo: environment.api_correo._nombre_correo_corporativo,
        correo: this.item.correo,
        nombre_completo: this.item.nombres,
        asunto: this.item.asunto,
        consulta: this.item.descripcion,
      }


      this.fcorreo.envioMasivoCorreo(enviar).then((res: any) => {
        // console.log(res);
         if (res.ok) {
           this.login_loading = false
           this.limpiar();
           /* this.snackBar.open(res.msg, 'Exitosamente', {
             horizontalPosition: 'right', duration: 3000
           }); */
           // this._router.navigate(['/activacion-cuenta',this.funciones.encripta(this.idusuario)]);

         }
       });

    }
  }


  limpiar(){
    this.item={
      nombres:null,
      correo:null,
      asunto:null,
      descripcion:null
    }
  }




}
