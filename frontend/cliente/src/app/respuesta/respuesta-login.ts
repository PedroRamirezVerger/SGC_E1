import { Usuario } from '../entity/Usuario';
import { RouterLink } from '@angular/router';
import { Rol } from '../entity/Rol';

export class RespuestLogin {
    loginPasado: boolean;
    usuario: Usuario;
    rol: Rol;


    constructor () {
        this.loginPasado = false;
        this.usuario = null;
    }
}