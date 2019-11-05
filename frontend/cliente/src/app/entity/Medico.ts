import { Especialidad } from './Especialidad';
import { CentroSalud } from './CentroSalud';

export class Medico{
    especialidad: Especialidad;
    centrosalud: CentroSalud;

    constructor(){
        this.especialidad=null;
        this.centrosalud=null;
    }
}