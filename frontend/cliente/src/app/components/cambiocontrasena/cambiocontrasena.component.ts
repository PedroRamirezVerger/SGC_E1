import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiocontrasena',
  templateUrl: './cambiocontrasena.component.html',
  styleUrls: ['./cambiocontrasena.component.css']
})
export class CambiocontrasenaComponent implements OnInit {

  /*msg:string = ''
  mismacontrasena:boolean;
  iguales:boolean;*/

  constructor(private router:Router) { }

  ngOnInit() {
  }

  /*cambiocontrasena(cactual: string, cnueva: string,cconfirm:string){
    // Comprobar que cactual es igual a la contraseña del usuario en la BD. Si no es igual, error.
    if((cactual == cnueva) && (cactual == cconfirm)){ //Si la contraseña antigua y la contraseña nueva coinciden,error.
      this.mismacontrasena = true;
      this.msg = 'La contraseña actual y la contraseña nueva no pueden coincidir. Introduzca otra contraseña nueva';
    }else{ //Si no coinciden las contraseñas, entonces dos casos:
      if(cnueva == cconfirm){ //Si la contraseña nueva y la confirmacion son iguales
      this.msg = 'Contraseña actualizada con éxito.';
      //Guardar contraseña nueva en BBDD
      this.router.navigate(['/citas']);
      }else{ //Si la contraseña nueva y la confirmación no son iguales
      this.msg = 'La contraseña nueva y su confirmación no coinciden. Introduzca la misma contraseña en ambos campos.'
      }
    }
  }*/
    confirmarcambio(){
      this.router.navigate(['/citas'])
  }

}
