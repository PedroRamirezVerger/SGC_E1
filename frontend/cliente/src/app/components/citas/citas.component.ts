import { Component, OnInit } from '@angular/core';
import { Router, ChildActivationStart } from '@angular/router';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  citas = [{id:'1', fecha: '13/10/2019', consulta: '37', medico: 'Antonio Ramos Romero', especialidad: 'Traumatología'},
           {id:'2', fecha: '15/10/2019', consulta: '45', medico: 'Luis Jimenez Roldán', especialidad: 'Neurología'},
           {id:'3', fecha: '17/10/2019', consulta: '65', medico: 'María Torras Catalán', especialidad: 'Urgencias'},
           {id:'4', fecha: '23/11/2019', consulta: '23', medico: 'Manuel Puente Garcia', especialidad: 'Oncología'},
           {id:'5', fecha: '26/11/2019', consulta: '67', medico: 'Paula Bermejo Delgado', especialidad: 'Nefrología'}
          ];

  constructor(private router:Router) { }

  ngOnInit() {
  }
  pedircita(){
    this.router.navigate(['/pedircita'])
  }
  modificardatoscontacto(){
    this.router.navigate(['/cambiodatoscontacto'])
  }
 
  eliminarcita(cita){
    var index=this.citas.indexOf(cita);
    this.citas.splice(index, 1);
  }
  cambiarcontrasena(){
    this.router.navigate(['/cambiocontrasena'])
  }
}
