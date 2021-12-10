import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { default as swal } from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_form: FormGroup;
  public login_loading: boolean = false;

  constructor(private formBuilder: FormBuilder, private service: AuthService, private location: Location) { }

  ngOnInit() {
    this.login_form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
    //this.loginForm.valueChanges.subscribe(data => console.log(data));
  }

  public submit() {
    let load: { email: string, password: string } = null;

    this.login_loading = true;

    if (this.login_form.valid) {
      load = {
        email: this.login_form.value['email'],
        password: this.login_form.value['password']
      }

      this.service.login(load).subscribe((response) => {
        if (response) {
          // if (response.response.sessionBean.mensaje) {

          //   swal.fire({
          //     title: "<span style='font-size: 18px;'>Atención...!</span>",
          //     html: "<span class='swal-text' style='font-size: 14px!important;'>" + response.response.sessionBean.mensaje + "</span>",
          //     width: "400px",
          //     icon: 'warning'
          //   })
          //   this.login_loading = false;
          // };

          let usu = response.Account;

          const usuario = {
            nombres: `${usu.name || ''}`,
            apellidos: `${usu.last_name || ''}`,
            nombres_completos: `${usu.name || ''} ${usu.last_name || ''}`,
            email: `${usu.email || ''}`,
            rol: `${usu.role || ''}`,
            imagen: `${usu.image || ''}`
          };



          // const usuario_foto = usu.foto === null ? '' : usu.foto;

          this.service.setSession(usuario, response.token);


          swal.fire({
            title: "<span style='font-size: 18px;'>Se autenticó correctamente</span>",
            html: "<span class='swal-text' style='font-size: 14px!important;'>" + 'Ahora puede seguir realizando su pedido.' + "</span>",
            width: "400px",
            icon: 'success',
            timer: 1000
          }).then(value => {
            this.location.back();
          });


          // if(!this.redirect_str) {
          //   this.router.navigate([RUTA.MENU_PRINCIPAL]);
          // } else {
          //   // //remover y usar token cuando se consiga el servicio de consulta de sesión en backend
          //   let encrypt_token = this.encryption_service.MGREncrypt('"' + response.response.token + '"', environment.secretKeyAes);
          //   let encrypt_session = this.encryption_service.MGREncrypt(JSON.stringify(response.response.sessionBean), environment.secretKeyAes);
          //   window.location.href = this.redirect_str + (this.redirect_str.indexOf('#') == -1 ? '#/' : '') + '?redirect_response=' + encrypt_token + '&u=' + UsuarioDto.id_usuario + '&s=' + encrypt_session;
          //   return;
          // }

        } else if (!response) {

          this.login_loading = false;
          swal.fire({
            title: "<span style='font-size: 18px;'>Error de Autenticación</span>",
            html: "<span class='swal-text' style='font-size: 14px!important;'>" + 'eroror' + "</span>",
            width: "400px",
            icon: 'error'
          });

        } else {
          this.login_loading = false;
          this.internalServerError();
        };
      }
        , err => {
          this.login_loading = false;
          console.log(err)
          swal.fire({
            title: "<span style='font-size: 18px;'>Error de Autenticación</span>",
            html: "<span class='swal-text' style='font-size: 14px!important;'>" + err.error.name + "</span>",
            width: "400px",
            icon: 'error'
          });
          // this.internalServerError();
        }
      );

    } else {
      this.login_loading = false;
      swal.fire('ERROR', 'Debe de llenar todos los datos', 'warning')
    }

  }

  public internalServerError() {
    swal.fire({
      title: "Error de Servidor",
      text: "Por favor verifique su conexión de internet o inténtelo más tarde",
      icon: "warning",
      allowOutsideClick: false
    })
  }

}
