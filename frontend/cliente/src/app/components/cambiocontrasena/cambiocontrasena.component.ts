import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entity/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { UtilsService } from 'src/app/services/utils.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cambiocontrasena',
  templateUrl: './cambiocontrasena.component.html',
  styleUrls: ['./cambiocontrasena.component.css']
})
export class CambiocontrasenaComponent implements OnInit {

  usuario: Usuario = new Usuario;

  constructor(private router:Router, 
    private usuarioService: UsuarioService,
    private utilsService: UtilsService,
    private cookieService: CookieService) { }

  ngOnInit() {
    this.usuario = JSON.parse(this.cookieService.get('usuario'));
  }

  
    cambiarpassword(){
      this.usuario;
      if (this.usuario.password.length == 0){
      Swal.fire('Error en los campos', "Todos los campos han de estar completos.", 'error');
    } else {
      if( this.utilsService.comprobarpassword(this.usuario.password)){
        this.usuarioService.modificarPassword(this.usuario._id, this.usuario).subscribe(
          response => {
            this.router.navigate(['/citas'])
            Swal.fire('Contraseña actualizada', 'Su contraseña ha sido actualizada con éxito', 'success');
          }
        );
      }
    }
  }

}
