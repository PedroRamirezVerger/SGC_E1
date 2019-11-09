import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entity/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario = new Usuario;
  constructor(private router:Router,
              private usuarioService: UsuarioService) {

   }

  ngOnInit() {
  }


  singUp(){
    console.log(this.usuario);

    // TODO CUANDO TENGAMOS EL ADMIN, ESTO LO HARA EL.

    this.usuario.tipo = 'paciente';
    this.usuario.centroMedico = 'Sanitas CR';
    this.usuario.medico = 'Antonio Perez Rodriguez';
    this.usuario.especialidad = 'Pediatría'


    this.usuarioService.registrarUsuario(this.usuario).subscribe(
      response => {
        this.router.navigate(['/login'])
        Swal.fire('Nuevo usuario', `Usuario ${this.usuario.nombre} creado con éxito!`, 'success')
      }
    );

  }

}
