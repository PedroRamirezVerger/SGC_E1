import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/entity/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
import { UtilsService } from 'src/app/services/utils.service';


@Component({
  selector: 'app-cambiodatospersonales',
  templateUrl: './cambiodatospersonales.component.html',
  styleUrls: ['./cambiodatospersonales.component.css']
})
export class CambiodatospersonalesComponent implements OnInit {

  id:string;
  usuario:Usuario=new Usuario;

  constructor(private router:Router, 
              private usuarioService: UsuarioService,
              private utilsService: UtilsService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.usuarioService.getUsuarioById(this.id).subscribe(
          response => {
            this.usuario = response;
            console.log(this.usuario);
            this.usuario.nombre = '';
            this.usuario.apellidos = '';
            this.usuario.sexo = '';
            this.usuario.tipo='';
            console.log(this.usuario);
          }
        )
      }
    });
  }
  modificardatospersonales(){
    this.usuario;
    if (this.usuario.nombre.length === 0 || 
        this.usuario.apellidos.length === 0 || 
        this.usuario.sexo.length === 0 ||
        this.usuario.tipo.length ===0){
      Swal.fire('Error en los campos', "Todos los campos han de estar completos.", 'error');
    } else {
        this.usuarioService.modificarDatosPersonalesUsuario(this.id, this.usuario).subscribe(
          response => {
            console.log(this.usuario);
            this.router.navigate(['/citas', this.id])
            Swal.fire('Datos de personales usuario actualizados', 'Los datos personales han sido actualizados con éxito', 'success');
          }
        );
    }
  }

}
