import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  citas = [{fecha: '13/10/2019', consulta: '37', medico: 'Antonio Ramos Romero', especialidad: 'Traumatología'},
           {fecha: '15/10/2019', consulta: '45', medico: 'Luis Jimenez Roldán', especialidad: 'Neurología'},
           {fecha: '17/10/2019', consulta: '65', medico: 'María Torras Catalán', especialidad: 'Urgencias'},
           {fecha: '23/11/2019', consulta: '23', medico: 'Manuel Puente Garcia', especialidad: 'Oncología'},
           {fecha: '26/11/2019', consulta: '67', medico: 'Paula Bermejo Delgado', especialidad: 'Nefrología'}
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

}
