import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entity/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';
import { UtilsService } from 'src/app/services/utils.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario = new Usuario;
  



  constructor(private router:Router,
              private usuarioService: UsuarioService,
              private utilsService: UtilsService) {

   }

  ngOnInit() {
  }

  


  singUp(){
    console.log(this.usuario);
    console.log(this);

    // TODO CUANDO TENGAMOS EL ADMIN, ESTO LO HARA EL.

    this.usuario.tipo = 'paciente';
    this.usuario.centroMedico = 'Sanitas CR';
    this.usuario.medico = 'Antonio Perez Rodriguez';
    this.usuario.especialidad = 'Pediatría'



    if( this.usuario.dni.length === 0 || this.usuario.password.length === 0 || this.usuario.nombre.length === 0 || this.usuario.apellidos.length === 0 || 
        this.usuario.email.length === 0 || this.usuario.telefono.length === 0 || this.usuario.fechaNacimiento === null  || this.usuario.direccion.length === 0 || 
        this.usuario.localidad.length === 0 || this.usuario.sexo.length === 0){
      Swal.fire('Error al crear usuario', "Todos los campos han de estar completos.", 'error');
    } else {
      if( this.utilsService.validardni(this.usuario.dni) && this.utilsService.comprobarpassword(this.usuario.password) && 
          this.utilsService.controlaremail(this.usuario.email) && this.utilsService.validartelefono(this.usuario.telefono)){
        this.usuarioService.registrarUsuario(this.usuario).subscribe(
          response => {
            this.router.navigate(['/login'])
            Swal.fire('Nuevo usuario', `Usuario ${this.usuario.nombre} creado con éxito!`, 'success');
          }
        );
      }
    }

    

  }

}
