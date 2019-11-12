import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { CitaService } from 'src/app/services/cita.service';
import { Cita } from 'src/app/entity/Cita';
import { RespuestaCitasPaciente } from 'src/app/respuesta/respuesta-citas-paciente';
import Swal from 'sweetalert2';
import { Usuario } from 'src/app/entity/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cambiarcita',
  templateUrl: './cambiarcita.component.html',
  styleUrls: ['./cambiarcita.component.css']
})
export class CambiarcitaComponent implements OnInit {

  respuestaCitasPaciente: RespuestaCitasPaciente = new RespuestaCitasPaciente;
  cita: Cita = new Cita;
  usuario: Usuario = new Usuario;
  idCita: string;
  idUsuario: string;

  constructor(private router:Router, 
              private citaService: CitaService,
              private usuarioService: UsuarioService,
              private utilsService: UtilsService,
              private activateRoute: ActivatedRoute) { 
                
              }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      console.log(params);
      this.idCita = params['idCita'];
      this.idUsuario = params['idUsuario'];
      if (this.idCita) {
        this.citaService.getCitasById(this.idCita).subscribe(
          response => {
            this.cita = response;
          }
        )
      }
    });

  }



  cambiarCita(dia: string, hora: string) {
    let horaSeparada = hora.split(':');
    let diaSeparado = dia.split('-');
    let fecha = new Date(parseInt(diaSeparado[0]),parseInt(diaSeparado[1])-1, parseInt(diaSeparado[2]), parseInt(horaSeparada[0]),parseInt(horaSeparada[1]) )
    if(this.comprobarfecha(fecha)){
      this.cita.fecha = fecha;
      this.citaService.modifyCita(this.idCita, this.cita).subscribe(
        response => {
          this.router.navigate(['/citas', this.idUsuario])
          Swal.fire('Cita modificada', `Cita modificada con éxito!`, 'success');
        }
      );
    }
    else{
      Swal.fire('Error de fecha', "La fecha introducida no es correcta.", 'error');
    }
  }


  comprobarfecha(fecha:Date){
    let hoy=new Date();
    let v=fecha.toString()==="Invalid Date";
    let v2=fecha<hoy;
    if( v2 || v)
      return false;
    return true;
  }



}
