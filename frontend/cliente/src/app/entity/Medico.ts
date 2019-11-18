
import { Usuario } from './Usuario';

export class Medico extends Usuario{
    especialidad: string;

    constructor(){
        super();
        this.especialidad = "";
    }
}