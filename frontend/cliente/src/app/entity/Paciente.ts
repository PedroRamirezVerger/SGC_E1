import { Medico } from './Medico';
import { Cita } from './Cita';

import { Usuario } from './Usuario';

export class Paciente {// Usuario{
    medico: Medico;
    citas: Cita[];

    constructor(){
        //super();

        this.medico=null;
        this.citas=null;
    }
}