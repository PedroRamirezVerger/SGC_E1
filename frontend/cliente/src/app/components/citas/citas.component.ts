import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Cita } from 'src/app/entity/Cita';
import { CitaService } from 'src/app/services/cita.service';
import { Usuario } from 'src/app/entity/Usuario';
import { RespuestaCitasPaciente } from 'src/app/respuesta/respuesta-citas-paciente';



@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {


  respuestaCitasPaciente: RespuestaCitasPaciente;

  citas: Cita[] = [];
  usuario: Usuario = new Usuario();
  id: string = '';


  constructor(private router:Router,
              private citaService: CitaService,
              private activateRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
      if(this.id)
        this.mostrarListaCitas();
    });
  }

  mostrarListaCitas(){
    this.citaService.getCitasUsuario(this.id).subscribe(
      response => {
        this.respuestaCitasPaciente = response;
        this.usuario = this.respuestaCitasPaciente.usuario;
        this.citas = this.respuestaCitasPaciente.listaCitasPaciente;
      }
    );
  }


  pedircita(){
    this.router.navigate(['/pedircita', this.dni])
  }
  modificardatoscontacto(){
    this.router.navigate(['/cambiodatoscontacto', this.id])
  }
 
  eliminarcita(cita){
    var index=this.citas.indexOf(cita);
    this.citas.splice(index, 1);
  }
  cambiarcita(){
    this.router.navigate(['/cambiocita'])
  }
  cambiarcontrasena(){
    this.router.navigate(['/cambiocontrasena'])
  }
}
