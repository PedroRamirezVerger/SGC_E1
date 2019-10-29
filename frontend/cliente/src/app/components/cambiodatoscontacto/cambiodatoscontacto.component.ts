import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiodatoscontacto',
  templateUrl: './cambiodatoscontacto.component.html',
  styleUrls: ['./cambiodatoscontacto.component.css']
})
export class CambiodatoscontactoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  modificardatoscontacto(telefono: string, email: string){
    
    this.router.navigate(['/citas'])
  }

}
