import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/entity/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-cambiocontrasena',
  templateUrl: './cambiocontrasena.component.html',
  styleUrls: ['./cambiocontrasena.component.css']
})
export class CambiocontrasenaComponent implements OnInit {

  id: string;
  usuario: Usuario = new Usuario;

  constructor(private router:Router, 
    private usuarioService: UsuarioService,
    private utilsService: UtilsService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.usuarioService.getUsuaioById(this.id).subscribe(
          response => {
            this.usuario = response;
          }
        )
      }
    });
  }

  
    cambiarcontrasena(){
      this.usuario;
      if (this.usuario.password.length == 0){
      Swal.fire('Error en los campos', "Todos los campos han de estar completos.", 'error');
    } else {
      if( this.utilsService.comprobarpassword(this.usuario.password)){
        this.usuarioService.modificarDatosContactoUsuario(this.id, this.usuario).subscribe(
          response => {
            console.log(this.usuario);
            this.router.navigate(['/citas', this.id])
            Swal.fire('Contraseña actualizada', 'Su contraseña ha sido actualizada con éxito', 'success');
          }
        );
      }
    }
  }

}
