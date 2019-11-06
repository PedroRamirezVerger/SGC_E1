import { Usuario } from '../entity/Usuario';
import { Cita } from '../entity/Cita';

export class RespuestaCitasPaciente {
    usuario: Usuario;
    listaCitasPaciente: Cita[];


    constructor() {
        this.usuario = null;
        this.listaCitasPaciente = null;
    }
}