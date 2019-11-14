import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/entity/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { UtilsService } from 'src/app/services/utils.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-cambiodatoscontacto',
  templateUrl: './cambiodatoscontacto.component.html',
  styleUrls: ['./cambiodatoscontacto.component.css']
})
export class CambiodatoscontactoComponent implements OnInit {

  usuario: Usuario = new Usuario;

  constructor(private router:Router, 
              private usuarioService: UsuarioService,
              private utilsService: UtilsService,
              private cookieService: CookieService) { 
              
              }

  ngOnInit() {
    this.usuario = JSON.parse(this.cookieService.get('usuario'));
  }



  modificardatoscontacto(){
    this.usuario;
    if (this.usuario.telefono.length === 0 || 
        this.usuario.email.length === 0 || 
        this.usuario.direccion.length === 0){
      Swal.fire('Error en los campos', "Todos los campos han de estar completos.", 'error');
    } else {
      if( this.utilsService.controlaremail(this.usuario.email) && 
          this.utilsService.validartelefono(this.usuario.telefono)){
        this.usuarioService.modificarDatosContactoUsuario(this.usuario._id, this.usuario).subscribe(
          response => {
            console.log(this.usuario);
            this.router.navigate(['/citas'])
            Swal.fire('Datos de contacto usuario actualizados', 'Sus datos de contacto han sido actualizados con éxito', 'success');
          }
        );
      }
    }
  }

}
