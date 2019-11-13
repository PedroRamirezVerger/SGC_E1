import { Component, OnInit } from '@angular/core';
import { RespuestaUsuariosGestor } from 'src/app/respuesta/respuesta-usuarios-gestor';
import { Usuario } from 'src/app/entity/Usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-panelgestor',
  templateUrl: './panelgestor.component.html',
  styleUrls: ['./panelgestor.component.css']
})
export class PanelgestorComponent implements OnInit {

  respuestaUsuariosGestor: RespuestaUsuariosGestor;

  usuarios: Usuario[]= [];
  constructor(private router:Router,private usuarioService:UsuarioService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.mostrarListaUsuarios();
  }
  mostrarListaUsuarios(){
    this.usuarioService.getAllUsers().subscribe(
      response => {
        this.respuestaUsuariosGestor =response;
        this.usuarios=this.respuestaUsuariosGestor.listaUsuarios;
      }
    )
  }
  modificardatospersonales(id:string){
    this.router.navigate(['/cambiodatospersonales', id])
  }
  modificardatoscontacto(id:string){
    this.router.navigate(['/cambiodatoscontacto', id])
  }
  historialcitas(id:string){
    this.router.navigate(['/citas', id])
  }

}
