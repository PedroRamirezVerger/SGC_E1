import { Usuario } from '../entity/Usuario';

export class RespuestLogin {
    loginPasado: boolean;
    usuario: Usuario;


    constructor () {
        this.loginPasado = false;
        this.usuario = null;
    }
}