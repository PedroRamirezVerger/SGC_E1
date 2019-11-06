import { Medico } from './Medico';
import { Cita } from './Cita';
import { Usuario } from './Usuario';

export class Paciente extends Usuario{
    medico: Medico;
    citas: Cita[];

    constructor(){
        super();
        this.medico=null;
        this.citas=null;
    }
}