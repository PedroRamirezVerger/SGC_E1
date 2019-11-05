import { Medico } from './Medico';
import { Cita } from './Cita';

export class Paciente{
    medico:Medico;
    citas: Cita[];

    constructor(){
        this.medico=null;
        this.citas=null;
    }
}