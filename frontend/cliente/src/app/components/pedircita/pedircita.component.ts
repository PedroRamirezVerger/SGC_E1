import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cita } from 'src/app/entity/Cita';
import { CitaService } from 'src/app/services/cita.service';
import { Usuario } from 'src/app/entity/Usuario';
import { Especialidad } from 'src/app/entity/Especialidad';
import { UsuarioService } from 'src/app/services/usuario.service';
import {EspecialidadService} from 'src/app/services/especialidad.service';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';
import { Medico } from 'src/app/entity/Medico';
//import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-pedircita',
  templateUrl: './pedircita.component.html',
  styleUrls: ['./pedircita.component.css']
})
export class PedircitaComponent implements OnInit {
  especialidadMostrar: boolean = false;
  cita: Cita = new Cita;
  usuario: Usuario = new Usuario;
  esMedicoCabecera: boolean;
  especialidades: Especialidad[] = [];
  especialidadSeleccionada:number = 0;
  especialidadElegida: Especialidad;
  medicoSeleccionado:number = 0;
  medicoElegido: String;

  constructor(private router:Router, 
              private citaService : CitaService, 
              private cookieService: CookieService, 
              private usuarioService: UsuarioService,
              private especialidadService: EspecialidadService) { }
  
  
  ngOnInit() {
    this.usuario = JSON.parse(this.cookieService.get('usuario'));

    let x=document.getElementById("especialistas");
    x.style.display="none";
    this.esMedicoCabecera = true;
    this.obtenerespecialidades();
  }
 /* obtenerHuecosLibres(){
    return this.
  }
  */
  obtenerespecialidades() {
    return this.especialidadService.getAllEspecialidades().subscribe(
      response => {
        this.especialidades = response;
        console.log(this.especialidades);
      }
    );
  }
  //Coger del array de especialidades, la especialidad seleccionada
  capturarEspecialidad(){
    this.especialidadElegida = this.especialidades[this.especialidadSeleccionada];
  }
  //Coger de la especialidad elegida, de su lista de medicos, el medico elegido (para el calendario)
  /*capturarMedico(){
    this.medicoElegido = this.especialidadElegida.listaMedicos[this.medicoSeleccionado]
  }*/


  mostrarMedicosDeEspecialidad(especialidad:Especialidad) {
    var especialistas = especialidad.listaMedicos;
    for (var i=0;i<especialistas.length;i++){
      console.log(especialistas[i]);
    }
  }
    
    
    /*for (var i = 0; i < numbers.length; _i++) {
      var num = numbers[_i];
      console.log(num);
  }*/
  //}
  


  comprobarfecha(fecha:Date){
    let hoy=new Date();
    let v=fecha.toString()==="Invalid Date";
    let v2=fecha<hoy;
    if( v2 || v)
      return false;
    return true;
  }


  anadircita(dia: string, hora: string){
    console.log(this.especialidadMostrar);
    let horaSeparada = hora.split(':');
    let diaSeparado = dia.split('-');
    let fecha = new Date(parseInt(diaSeparado[0]),parseInt(diaSeparado[1])-1, parseInt(diaSeparado[2]),
    parseInt(horaSeparada[0]),parseInt(horaSeparada[1]) )
    if(this.comprobarfecha(fecha)){
      this.cita.dniPaciente = this.usuario.dni;
      this.cita.fecha = fecha;
      this.cita.consulta = Math.floor((Math.random() * 25) + 1);;
      if (this.esMedicoCabecera) {
        this.cita.dniMedico = this.usuario.medico;
        this.cita.especialidad = "Médico de cabecera";
      }
      if(this.cita.especialidad.length === 0 || this.cita.dniMedico.length === 0){
        Swal.fire('Error al crear cita', "Todos los campos han de estar completos.", 'error');
      } 
      else {
        console.log(this.cita);
        this.citaService.addCita(this.cita).subscribe(
          response => {
            this.router.navigate(['/citas'])
            Swal.fire('Nueva cita', `Cita creada con éxito!`, 'success');
          }
        );
      }
    }
    else{
      Swal.fire('Error de fecha', "La fecha introducida no es correcta.", 'error');
    }
  }
  mostrarEspecialidad(n:number) {
    let x=document.getElementById("especialistas");
    if (n==0) {
      x.style.display="none";
      this.esMedicoCabecera = true;
    }
    if (n==1) {
      x.style.display="block";
      this.esMedicoCabecera = false;
    }
   
  }
}
