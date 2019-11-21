import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';
import { RespuestLogin } from 'src/app/respuesta/respuesta-login';
import { CookieService } from 'ngx-cookie-service';
import { $ } from 'protractor';
import { settings } from 'cluster';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg: string = '';
  respuestaLogin: RespuestLogin;


  constructor(private router:Router,
              private usuarioService: UsuarioService,
              private cookieService: CookieService
              ) { 
  }

  ngOnInit() {
  }


  logIn(dni: string, password: string){
    const ajustes = {
      secure: true

    }
    if (dni.length === 0 || password.length === 0){
      Swal.fire('Error en los campos', "Todos los campos han de estar completos.", 'error');
    } else {
      this.usuarioService.validateLogin(dni, password).subscribe(
        response => {
          (this.respuestaLogin = response)
          console.log(this.respuestaLogin);
          if(this.respuestaLogin.loginPasado){
            Swal.fire('Login correcto', "Ha iniciado sesión", 'success');
            this.cookieService.set('usuario', JSON.stringify(this.respuestaLogin.usuario));
            this.cookieService.set('rol', JSON.stringify(this.respuestaLogin.rol));
            if (this.respuestaLogin.usuario.tipo==='GESTOR')
              this.router.navigate(['/panelgestor'])
            else
              this.router.navigate(['/citas'])
          } else {
            Swal.fire('Error en los campos', "El DNI y/o la contraseña son incorrectos.", 'error');
          }
        }
      );
    }
  }

  singIn(){
    this.router.navigate(['/registro'])
  }
}